/**
 * gamba_support.js
 * 全ページ共通：AIサポート＋LINE連絡＋音声読み上げ フローティングボタン
 *
 * ★ AIチャットはClaude.aiへのリンク方式（APIキー不要・無料）
 *
 * 設定：LINE_URL を先生のLINE IDに変更してください
 *   例: 'https://line.me/R/ti/p/@abc1234'
 */

(function() {

  /* ══════════════════════════════════
     ★ 設定（ここだけ変更）
     ══════════════════════════════════ */
  const LINE_URL = 'https://line.me/R/ti/p/ここに先生のLINE_IDを入れる';

  /* ── 科目判定 ── */
  function detectSubject() {
    const p = window.location.pathname;
    if (p.includes('/english/') || p.includes('EA')) return 'english';
    if (p.includes('/math/')    || p.includes('MA') || p.includes('MB')) return 'math';
    return 'both';
  }
  const subject = detectSubject();

  /* ── ページタイトル取得 ── */
  function getPageTitle() {
    return document.title
      .replace('【導入】','').replace('【例題】','').replace('【演習】','')
      .replace('【確認テスト】','').replace('爆速英文法｜','').trim();
  }

  /* ── Claude.ai 用プロンプト生成 ── */
  function buildClaudePrompt() {
    const title = getPageTitle();
    const name  = localStorage.getItem('studentName') || '';
    const nameStr = name ? `（${name}さんの質問）` : '';

    const base = subject === 'english'
      ? `高校認定試験（高認）の英文法${nameStr}について質問があります。\n今学習中の単元：「${title}」\n\n`
      : `高校認定試験（高認）の数学${nameStr}について質問があります。\n今学習中の単元：「${title}」\n\n`;

    const prompt = base +
      `この単元でわからないことを教えてください。\n` +
      `中学生にもわかるようにやさしく日本語で説明してください。\n\n` +
      `【質問】\n（ここに質問を入力してください）`;

    return encodeURIComponent(prompt);
  }

  /* ── Claude.aiを開く ── */
  window.gambaAIOpen = function() {
    const prompt = buildClaudePrompt();
    // Claude.aiの新規チャットにプロンプトを渡す
    const url = `https://claude.ai/new?q=${prompt}`;
    window.open(url, '_blank');
  };

  /* ── LINE連絡 ── */
  window.gambaLineOpen = function() {
    window.open(LINE_URL, '_blank');
  };

  /* ══════════════════════════════════
     スタイル
     ══════════════════════════════════ */
  const style = document.createElement('style');
  style.textContent = `
    #gamba-float-wrap {
      position: fixed; bottom: 24px; right: 16px;
      z-index: 9999;
      display: flex; flex-direction: column;
      align-items: flex-end; gap: 10px;
    }

    .gamba-fab {
      width: 52px; height: 52px; border-radius: 50%;
      border: none; cursor: pointer; font-size: 1.45em;
      box-shadow: 0 4px 16px rgba(0,0,0,.22);
      display: flex; align-items: center; justify-content: center;
      transition: transform .18s, box-shadow .18s;
      -webkit-tap-highlight-color: transparent;
    }
    .gamba-fab:hover  { transform: scale(1.1); box-shadow: 0 6px 22px rgba(0,0,0,.3); }
    .gamba-fab:active { transform: scale(.95); }

    #fab-main  { background: #1a56a0; color: #fff; }
    #fab-ai    { background: #7c3aed; color: #fff; }
    #fab-line  { background: #06c755; color: #fff; }
    #fab-voice { background: #d97706; color: #fff; }

    .fab-row {
      display: flex; align-items: center; gap: 8px;
      transition: opacity .2s, transform .2s;
    }
    .fab-row.hidden { opacity: 0; pointer-events: none; transform: translateY(8px); }

    .fab-label {
      background: rgba(20,20,20,.82); color: #fff;
      font-size: .75em; font-weight: 700;
      padding: 5px 11px; border-radius: 8px;
      white-space: nowrap;
      font-family: 'BIZ UDPGothic','Meiryo',sans-serif;
      pointer-events: none;
    }

    /* ── ヒントポップアップ ── */
    #gamba-hint-popup {
      display: none;
      position: fixed; bottom: 88px; right: 16px;
      width: min(300px, calc(100vw - 40px));
      background: #fff;
      border: 2px solid #7c3aed;
      border-radius: 14px;
      box-shadow: 0 6px 28px rgba(0,0,0,.18);
      z-index: 10000;
      font-family: 'BIZ UDPGothic','Meiryo',sans-serif;
      overflow: hidden;
    }
    #gamba-hint-popup.open { display: block; }

    .hint-header {
      background: #7c3aed; color: #fff;
      padding: 11px 14px;
      display: flex; align-items: center; gap: 8px;
    }
    .hint-header-title { flex: 1; font-weight: 700; font-size: .88em; }
    .hint-close {
      background: rgba(255,255,255,.2); border: none; color: #fff;
      border-radius: 50%; width: 24px; height: 24px;
      cursor: pointer; font-size: .85em;
      display: flex; align-items: center; justify-content: center;
    }

    .hint-body { padding: 14px 16px; }
    .hint-body p { font-size: .85em; color: #334155; line-height: 1.7; margin-bottom: 12px; }
    .hint-body strong { color: #7c3aed; }

    .btn-claude {
      display: block; width: 100%;
      background: #7c3aed; color: #fff;
      border: none; border-radius: 10px;
      padding: 12px; font-size: .9em; font-weight: 700;
      font-family: inherit; cursor: pointer;
      text-align: center; text-decoration: none;
      transition: background .18s;
      margin-bottom: 8px;
    }
    .btn-claude:hover { background: #6d28d9; }

    .hint-note {
      font-size: .75em; color: #94a3b8;
      text-align: center; line-height: 1.5;
      margin-top: 4px;
    }

    @media (max-width: 400px) {
      .gamba-fab { width: 48px; height: 48px; font-size: 1.3em; }
    }
  `;
  document.head.appendChild(style);

  /* ══════════════════════════════════
     HTML生成
     ══════════════════════════════════ */

  /* フローティングボタン群 */
  const floatWrap = document.createElement('div');
  floatWrap.id = 'gamba-float-wrap';
  floatWrap.innerHTML = `
    <div class="fab-row hidden" id="fab-row-ai">
      <span class="fab-label">🤖 AIに質問する</span>
      <button class="gamba-fab" id="fab-ai" onclick="gambaHintOpen()" title="AIに質問">🤖</button>
    </div>
    <div class="fab-row hidden" id="fab-row-line">
      <span class="fab-label">💬 講師に連絡する</span>
      <button class="gamba-fab" id="fab-line" onclick="gambaLineOpen()" title="講師に連絡">💬</button>
    </div>
    <div class="fab-row hidden" id="fab-row-voice">
      <span class="fab-label">🔊 音声で読み上げ</span>
      <button class="gamba-fab" id="fab-voice" onclick="gambaVoiceToggle()" title="音声読み上げ">🔊</button>
    </div>
    <button class="gamba-fab" id="fab-main" onclick="gambaToggleMenu()" title="サポートメニュー">🆘</button>
  `;

  /* AI案内ポップアップ */
  const hintPopup = document.createElement('div');
  hintPopup.id = 'gamba-hint-popup';
  const subLabel = subject === 'english' ? '英文法' : subject === 'math' ? '数学' : '数学・英文法';
  const pageTitle = document.title.replace('【導入】','').replace('【例題】','')
    .replace('【演習】','').replace('【確認テスト】','').replace('爆速英文法｜','').trim();

  hintPopup.innerHTML = `
    <div class="hint-header">
      <span style="font-size:1.2em;">🤖</span>
      <div class="hint-header-title">AI先生に質問する</div>
      <button class="hint-close" onclick="gambaHintClose()">✕</button>
    </div>
    <div class="hint-body">
      <p>
        <strong>Claude AI</strong> が${subLabel}の質問に答えます。<br>
        ボタンを押すと <strong>Claude.ai</strong> が開き、<br>
        今学習中の単元「<strong>${pageTitle}</strong>」の質問が自動で入力されます。
      </p>
      <p style="font-size:.8em; color:#64748b;">
        ※ Claude.aiのアカウント（無料）が必要です。<br>
        　 質問を書き換えて送信してください。
      </p>
      <button class="btn-claude" onclick="gambaAIOpen()">
        🤖 Claude.aiで質問する →
      </button>
      <div class="hint-note">
        無料アカウントで使えます<br>
        <a href="https://claude.ai" target="_blank" style="color:#7c3aed;">claude.ai でアカウント作成</a>
      </div>
    </div>
  `;

  document.body.appendChild(floatWrap);
  document.body.appendChild(hintPopup);

  /* ══════════════════════════════════
     メニュー開閉
     ══════════════════════════════════ */
  let menuOpen = false;

  window.gambaToggleMenu = function() {
    menuOpen = !menuOpen;
    ['ai','line','voice'].forEach(id => {
      document.getElementById('fab-row-' + id).classList.toggle('hidden', !menuOpen);
    });
    const main = document.getElementById('fab-main');
    main.textContent = menuOpen ? '✕' : '🆘';
    main.style.background = menuOpen ? '#64748b' : '#1a56a0';
    if (!menuOpen) gambaHintClose();
  };

  window.gambaHintOpen  = function() { document.getElementById('gamba-hint-popup').classList.add('open'); };
  window.gambaHintClose = function() { document.getElementById('gamba-hint-popup').classList.remove('open'); };

  /* ══════════════════════════════════
     音声読み上げ
     ══════════════════════════════════ */
  let voiceActive = false;

  window.gambaVoiceToggle = function() {
    if (voiceActive) {
      speechSynthesis.cancel();
      voiceActive = false;
      const btn = document.getElementById('fab-voice');
      btn.textContent = '🔊';
      btn.style.background = '#d97706';
      return;
    }

    // ページのメインテキストを収集
    const selectors = [
      'h1','h2','h3',
      '.section-title','.instruction','.lead-text',
      '.memo-box','.summary-box',
      '.sblock p','.section p',
      '.hint-body p'  // 爆速英文法用
    ];
    const seen = new Set();
    let texts = [];
    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        // フローティング要素やナビは除外
        if (el.closest('#gamba-float-wrap') || el.closest('#gamba-hint-popup')) return;
        const t = el.innerText.replace(/\s+/g,' ').trim();
        if (t && t.length > 4 && !seen.has(t)) {
          seen.add(t);
          texts.push(t);
        }
      });
    });

    if (texts.length === 0) {
      alert('読み上げるテキストが見つかりませんでした。');
      return;
    }

    voiceActive = true;
    const btn = document.getElementById('fab-voice');
    btn.textContent = '⏹';
    btn.style.background = '#dc2626';

    const uttr = new SpeechSynthesisUtterance(texts.join('。'));
    uttr.lang  = 'ja-JP';
    uttr.rate  = 0.92;
    uttr.pitch = 1.05;
    uttr.onend = () => {
      voiceActive = false;
      btn.textContent = '🔊';
      btn.style.background = '#d97706';
    };
    speechSynthesis.speak(uttr);
  };

})();
