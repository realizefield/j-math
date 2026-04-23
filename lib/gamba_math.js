/* ==================================================================
 * gamba_math.js
 *
 * KaTeX を GAMBA 教材向けに自動読み込み・自動レンダリングする
 * 共通ラッパースクリプト。
 *
 * 使い方：
 *   各HTMLの <head> 内（できれば末尾）に次の1行を書くだけ：
 *     <script src="../lib/gamba_math.js" defer></script>
 *
 *   本文では次のように書くとKaTeXで描画される：
 *     インライン :  $\sqrt{5}$  または  \(\sqrt{5}\)
 *     ブロック   :  $$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}$$  または  \[...\]
 *
 * 配置：
 *   lib/gamba_math.js            ← このファイル
 *   lib/katex/katex.min.css
 *   lib/katex/katex.min.js
 *   lib/katex/contrib/auto-render.min.js
 *
 * 呼び出し側のパス調整：
 *   各HTMLは単元フォルダ（例: sq01/intro.html）から呼ばれるので、
 *   このスクリプトからは一律「../lib/katex/」が相対パスになる。
 *   リポジトリ直下からの絶対パスで解決する方式に変更してもよい。
 * ================================================================== */

(function(){
  'use strict';

  /* ---------- 配置パスの自動判定 ----------
     gamba_math.js 自身の場所を script タグから逆算し、
     katex フォルダへの相対URLを組み立てる。
     これにより呼び出し元のHTMLがどの階層にあっても動く。 */
  var scriptEl = document.currentScript
    || (function(){
         var arr = document.getElementsByTagName('script');
         return arr[arr.length-1];
       })();
  var myPath = scriptEl.src;                     // 例: https://.../j-math/lib/gamba_math.js
  var baseDir = myPath.substring(0, myPath.lastIndexOf('/')+1); // 例: https://.../j-math/lib/

  var cssUrl       = baseDir + 'katex/katex.min.css';
  var jsUrl        = baseDir + 'katex/katex.min.js';
  var autoUrl      = baseDir + 'katex/contrib/auto-render.min.js';

  /* ---------- CSS を読み込む ---------- */
  if(!document.querySelector('link[data-katex]')){
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cssUrl;
    link.setAttribute('data-katex','1');
    document.head.appendChild(link);
  }

  /* ---------- 速度計測（表示してもしなくてもOK） ---------- */
  var t0 = (typeof performance !== 'undefined' && performance.now)
           ? performance.now() : Date.now();

  /* ---------- auto-render のオプション ---------- */
  var renderOptions = {
    delimiters: [
      { left: '$$', right: '$$',  display: true  },
      { left: '\\[', right: '\\]', display: true  },
      { left: '$',  right: '$',   display: false },
      { left: '\\(', right: '\\)', display: false }
    ],
    /* エラーがあっても処理を止めず、その数式だけスキップ */
    throwOnError: false,
    /* 未定義マクロなどをどうするか（警告は出さない） */
    errorColor: '#cc0000',
    /* SVG の不要属性を省いて軽くする */
    strict: 'ignore'
  };

  /* ---------- JSを順に読み込む ---------- */
  function loadScript(url, onload){
    var s = document.createElement('script');
    s.src = url;
    s.defer = true;
    s.onload = onload;
    s.onerror = function(){
      console.error('[gamba_math] KaTeX読み込み失敗:', url);
    };
    document.head.appendChild(s);
  }

  /* 本体 → auto-render の順に読み込み、
     auto-render 完了時点で DOM 全体をレンダリングする */
  loadScript(jsUrl, function(){
    loadScript(autoUrl, function(){
      function renderAll(){
        if(typeof renderMathInElement === 'function'){
          renderMathInElement(document.body, renderOptions);
          var t1 = (typeof performance !== 'undefined' && performance.now)
                   ? performance.now() : Date.now();
          /* 開発時の速度確認用。本番では消してOK */
          if(window.GAMBA_MATH_DEBUG){
            console.log('[gamba_math] render時間: '+(t1-t0).toFixed(1)+' ms');
            var el = document.getElementById('gamba-math-time');
            if(el) el.textContent = (t1-t0).toFixed(1)+' ms';
          }
        }
      }
      /* DOM読み込み完了後に実行 */
      if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', renderAll);
      }else{
        renderAll();
      }
    });
  });

  /* ---------- 手動レンダリングAPIも公開 ---------- */
  /* 動的に追加した要素にKaTeXを適用したいときに使う。
     例: gambaMath.render(document.getElementById('new-area'));   */
  window.gambaMath = {
    render: function(el){
      if(typeof renderMathInElement === 'function' && el){
        renderMathInElement(el, renderOptions);
      }
    },
    /* 単一の数式文字列を HTML 文字列に変換して返す */
    renderToString: function(tex, opts){
      if(typeof katex !== 'undefined'){
        return katex.renderToString(tex, Object.assign(
          { throwOnError:false }, opts||{}
        ));
      }
      return tex;
    }
  };

})();
