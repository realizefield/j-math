// MA13 分数の混合計算（×と÷が混ざった計算）
// 式を左から読んで、÷はすべて逆数に変換してからまとめてかける
//
// ops: 配列で各ステップを記述
//   { w, n, d, op }  op: 'mul'=×, 'div'=÷
//   最初の項は op なし
// ans_n, ans_d: 最終答え（既約分数、整数は ans_d=1）

const MA13_SETS = [
  {
    set_id: 1,
    problems: [
      // (1) 5/9 ÷ 3/4 × 7/10 = 14/27
      // 5/9 × 4/3 × 7/10 → 約分: 5と10÷5, 4と2(=9?)... 1×4×7/(9×3×2)=28/54→14/27
      { id:"Q1",
        terms:[
          { w:0, n:5,  d:9,  op:null },
          { w:0, n:3,  d:4,  op:'div' },
          { w:0, n:7,  d:10, op:'mul' }
        ],
        ans_n:14, ans_d:27,
        converted:"5/9 × 4/3 × 7/10",
        reduce_note:"5と10は÷5→1と2、あとはそのまま　→　1×4×7 ＝ 28、9×3×2 ＝ 54　→　÷2 → 14/27",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">5</span><span class="f-bar"></span><span class="f-den">9</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">4</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">3</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">7</span><span class="f-bar"></span><span class="f-den">10</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×4×7</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">9×3×2</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">14</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">27</span></span>
        </div>`
      },

      // (2) 5/8 ÷ 5 ÷ 3/4 = 1/6
      // 5/8 × 1/5 × 4/3 → 5と5÷5, 8と4÷4... 1×1×1/(2×1×3)=1/6
      { id:"Q2",
        terms:[
          { w:0, n:5,  d:8,  op:null },
          { w:0, n:5,  d:1,  op:'div' },
          { w:0, n:3,  d:4,  op:'div' }
        ],
        ans_n:1, ans_d:6,
        converted:"5/8 × 1/5 × 4/3",
        reduce_note:"5と5は÷5→1と1、8と4は÷4→2と1　→　1×1×1 ＝ 1、2×1×3 ＝ 6",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">5</span><span class="f-bar"></span><span class="f-den">8</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">1</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">5</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">4</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">3</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×1×1</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">2×1×3</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">1</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">6</span></span>
        </div>`
      },

      // (3) 5/3 ÷ 3/4 × 12/25 = 16/15
      // 5/3 × 4/3 × 12/25 → 5と25÷5=1と5、4と12÷4=1と3... 1×1×3/(3×3×5)=... 
      // 実: 5×4×12/(3×3×25) = 240/225 → ÷15 = 16/15
      { id:"Q3",
        terms:[
          { w:0, n:5,  d:3,  op:null },
          { w:0, n:3,  d:4,  op:'div' },
          { w:0, n:12, d:25, op:'mul' }
        ],
        ans_n:16, ans_d:15,
        converted:"5/3 × 4/3 × 12/25",
        reduce_note:"5と25は÷5→1と5、4と12は÷4→1と3　→　1×1×3 ＝ 3、3×3×5 ＝ 45　→　÷3 → 16/15 ※もう一度約分",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">5</span><span class="f-bar"></span><span class="f-den">3</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">4</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">3</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">12</span><span class="f-bar"></span><span class="f-den">25</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×1×3</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">3×3×5</span></span>
          <span>→約分→</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">16</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">15</span></span>
        </div>`
      },

      // (4) 2/5 ÷ 4/15 × 3/7 = 9/14
      // 2/5 × 15/4 × 3/7 → 2と4÷2=1と2、5と15÷5=1と3 → 1×3×3/(1×2×7)=9/14
      { id:"Q4",
        terms:[
          { w:0, n:2,  d:5,  op:null },
          { w:0, n:4,  d:15, op:'div' },
          { w:0, n:3,  d:7,  op:'mul' }
        ],
        ans_n:9, ans_d:14,
        converted:"2/5 × 15/4 × 3/7",
        reduce_note:"2と4は÷2→1と2、5と15は÷5→1と3　→　1×3×3＝9、1×2×7＝14",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">2</span><span class="f-bar"></span><span class="f-den">5</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">15</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">4</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">3</span><span class="f-bar"></span><span class="f-den">7</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×3×3</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">1×2×7</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">9</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">14</span></span>
        </div>`
      }
    ]
  },
  {
    set_id: 2,
    problems: [
      // (1) 7/4 ÷ 7/8 × 3/5 = 6/5
      // 7/4 × 8/7 × 3/5 → 7と7÷7=1と1、4と8÷4=1と2 → 1×2×3/(1×1×5)=6/5
      { id:"Q1",
        terms:[
          { w:0, n:7,  d:4,  op:null },
          { w:0, n:7,  d:8,  op:'div' },
          { w:0, n:3,  d:5,  op:'mul' }
        ],
        ans_n:6, ans_d:5,
        converted:"7/4 × 8/7 × 3/5",
        reduce_note:"7と7は÷7→1と1、4と8は÷4→1と2　→　1×2×3＝6、1×1×5＝5",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">7</span><span class="f-bar"></span><span class="f-den">4</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">8</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">7</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">3</span><span class="f-bar"></span><span class="f-den">5</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×2×3</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">1×1×5</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">6</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">5</span></span>
        </div>`
      },

      // (2) 9 ÷ 12 × 16 = 12  →  9/1 × 1/12 × 16/1 = 144/12 = 12
      { id:"Q2",
        terms:[
          { w:0, n:9,  d:1,  op:null },
          { w:0, n:12, d:1,  op:'div' },
          { w:0, n:16, d:1,  op:'mul' }
        ],
        ans_n:12, ans_d:1,
        converted:"9 × 1/12 × 16",
        reduce_note:"9と12は÷3→3と4、3と12(→4)÷4→3と1、16と4は÷4　→　3×1×4 ＝ 12",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span style="font-weight:700;">9</span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">1</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">12</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span style="font-weight:700;">16</span>
          <span>＝</span>
          <span style="font-size:1.1em;font-weight:700;color:var(--accent);">12</span>
        </div>`
      },

      // (3) 7/6 ÷ 7/3 × 4/5 = 2/5  → 7/6 × 3/7 × 4/5 = 7×3×4/(6×7×5) = 84/210 → ÷42 = 2/5
      { id:"Q3",
        terms:[
          { w:0, n:7,  d:6,  op:null },
          { w:0, n:7,  d:3,  op:'div' },
          { w:0, n:4,  d:5,  op:'mul' }
        ],
        ans_n:2, ans_d:5,
        converted:"7/6 × 3/7 × 4/5",
        reduce_note:"7と7は÷7→1と1、6と3は÷3→2と1、残り4と5はそのまま　→　1×1×4 ＝ 4、2×1×5 ＝ 10　→　÷2 → 2/5",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">7</span><span class="f-bar"></span><span class="f-den">6</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">3</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">7</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">4</span><span class="f-bar"></span><span class="f-den">5</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">1×1×4</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">2×1×5</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">2</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">5</span></span>
        </div>`
      },

      // (4) 5/6 × 4/9 ÷ 2/3 = 5/9
      // 5/6 × 4/9 × 3/2 → 6と3÷3=2と1、4と2÷2=2と1 → 5×2×1/(2×1×9)=10/18=5/9
      { id:"Q4",
        terms:[
          { w:0, n:5,  d:6,  op:null },
          { w:0, n:4,  d:9,  op:'mul' },
          { w:0, n:2,  d:3,  op:'div' }
        ],
        ans_n:5, ans_d:9,
        converted:"5/6 × 4/9 × 3/2",
        reduce_note:"6と3は÷3→2と1、4と2は÷2→2と1　→　5×2×1＝10、2×1×9＝18　→　÷2 → 5/9",
        steps_html:`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:clamp(.9em,2vw,1.05em);">
          <span class="frac-sm"><span class="f-num">5</span><span class="f-bar"></span><span class="f-den">6</span></span>
          <span style="color:var(--primary);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num">4</span><span class="f-bar"></span><span class="f-den">9</span></span>
          <span style="color:var(--success);font-weight:700;">×</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--success);">3</span><span class="f-bar" style="background:var(--success);"></span><span class="f-den" style="color:var(--success);">2</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--text-sub);font-size:.88em;">5×2×1</span><span class="f-bar"></span><span class="f-den" style="color:var(--text-sub);font-size:.88em;">2×1×9</span></span>
          <span>＝</span>
          <span class="frac-sm"><span class="f-num" style="color:var(--accent);font-weight:700;">5</span><span class="f-bar" style="background:var(--accent);"></span><span class="f-den" style="font-weight:700;">9</span></span>
        </div>`
      }
    ]
  }
];
