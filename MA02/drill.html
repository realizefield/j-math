<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>MA02 約分 【演習】</title>
<link rel="stylesheet" href="style.css">
<style>
  .frac-dual { display:inline-flex; flex-direction:column; align-items:center; line-height:1.1; }
  .frac-dual .f-bar { width:100%; height:3px; background:var(--text); border-radius:2px; margin:2px 0; }
  .frac-dual .f-input {
    width:clamp(48px,10vw,68px); height:clamp(40px,8vw,54px);
    text-align:center; font-size:clamp(.9em,2.5vw,1.2em); font-weight:700;
    font-family:'BIZ UDPGothic','BIZ UDP Gothic',sans-serif;
    border:2.5px solid var(--primary); border-radius:8px;
    background:#f0f6ff; color:var(--primary); outline:none;
    transition:border-color .2s; -moz-appearance:textfield;
  }
  .frac-dual .f-input::-webkit-inner-spin-button,
  .frac-dual .f-input::-webkit-outer-spin-button { -webkit-appearance:none; }
  .frac-dual .f-input.correct { border-color:var(--success); background:var(--success-light); color:var(--success); }
  .frac-dual .f-input.wrong   { border-color:var(--accent);  background:var(--accent-light);  color:var(--accent); }
</style>
</head>
<body>

<div class="page-header">
  <div class="unit-code">MA02</div>
  <h1>約分　【演習】</h1>
</div>

<nav class="step-nav">
  <div class="step-item"><span class="step-circle">①</span><a href="intro.html">導入</a></div>
  <span class="step-arrow">›</span>
  <div class="step-item"><span class="step-circle">②</span><a href="example.html">例題</a></div>
  <span class="step-arrow">›</span>
  <div class="step-item active"><span class="step-circle">③</span><span>演習</span></div>
  <span class="step-arrow">›</span>
  <div class="step-item"><span class="step-circle">④</span><a href="check.html">確認</a></div>
</nav>

<main class="g-container">

  <div class="instruction">
    <strong>【問題】</strong>　次の分数を約分しなさい。分子と分母の両方を入力してください。
  </div>

  <div id="problems-area"></div>

  <div class="nav-btns">
    <a href="example.html" class="btn-nav btn-back">← 例題にもどる</a>
    <a href="check.html"   class="btn-nav btn-forward">④ 確認テストへ →</a>
  </div>

</main>

<script src="ma02_sets.js"></script>
<script>
  const setIndex = Math.floor(Math.random() * MA02_SETS.length);
  const problems = MA02_SETS[setIndex].problems;

  function buildProblems() {
    const area = document.getElementById('problems-area');
    area.innerHTML = '';
    problems.forEach((p, i) => {
      area.innerHTML += `
        <div class="problem-card" id="card${i}" style="margin-bottom:14px;">
          <div class="problem-head" style="flex-wrap:wrap; gap:12px;">
            <span class="q-num">(${i+1})</span>
            <div class="frac-row">
              <span class="frac">
                <span class="f-num">${p.n}</span>
                <span class="f-bar"></span>
                <span class="f-den">${p.d}</span>
              </span>
              <span class="eq-sign">＝</span>
              <span class="frac-dual">
                <input type="number" id="n${i}" class="f-input" inputmode="numeric" placeholder="?">
                <span class="f-bar"></span>
                <input type="number" id="d${i}" class="f-input" inputmode="numeric" placeholder="?">
              </span>
            </div>
            <button class="ans-toggle" onclick="toggleHint(${i})">答を見る</button>
            <span id="res${i}" style="font-size:1.3em; font-weight:700;"></span>
          </div>
          <div class="ans-badge" id="hint${i}">
            正解：分子 <strong style="color:var(--accent); font-size:1.2em;">${p.ans_n}</strong>　
                  分母 <strong style="color:var(--accent); font-size:1.2em;">${p.ans_d}</strong>
            <div class="ans-explain">${p.hint}</div>
          </div>
        </div>`;
    });

    // 各入力欄にEnterキー対応
    problems.forEach((p, i) => {
      ['n','d'].forEach(t => {
        document.getElementById(t+i).addEventListener('keydown', e => {
          if (e.key==='Enter') judgeOne(i, p.ans_n, p.ans_d);
        });
      });
    });
  }

  function judgeOne(i, ansN, ansD) {
    const inN = document.getElementById('n'+i);
    const inD = document.getElementById('d'+i);
    const res = document.getElementById('res'+i);
    const n = parseInt(inN.value,10), d = parseInt(inD.value,10);
    inN.classList.remove('correct','wrong');
    inD.classList.remove('correct','wrong');
    if (n===ansN && d===ansD) {
      res.textContent='⭕'; res.style.color='var(--success)';
      inN.classList.add('correct'); inD.classList.add('correct');
    } else {
      res.textContent='❌'; res.style.color='var(--accent)';
      inN.classList.add('wrong'); inD.classList.add('wrong');
    }
  }

  function toggleHint(i) {
    const badge = document.getElementById('hint'+i);
    const btn   = document.querySelector(`#card${i} .ans-toggle`);
    const show  = badge.classList.contains('visible');
    badge.classList.toggle('visible', !show);
    btn.textContent = show ? '答を見る' : '答を隠す';
  }

  buildProblems();
</script>
<script src="../gamba_support.js"></script>
</body>
</html>
