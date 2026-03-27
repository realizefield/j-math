// MC01 文字式の計算（文字式の表し方）
// 縦形分数はHTML文字列で直接記述（getterなし）

const F = {
  x3:   '<span class="frac"><span class="fn">x</span><span class="fd">3</span></span>',
  x5:   '<span class="frac"><span class="fn">x</span><span class="fd">5</span></span>',
  y5:   '<span class="frac"><span class="fn">y</span><span class="fd">5</span></span>',
  n5y:  '<span class="frac"><span class="fn">5</span><span class="fd">y</span></span>',
  n3x:  '<span class="frac"><span class="fn">3</span><span class="fd">x</span></span>',
  ab4:  '<span class="frac"><span class="fn">a+b</span><span class="fd">4</span></span>',
  n4ab: '<span class="frac"><span class="fn">4</span><span class="fd">a+b</span></span>',
  a4:   '<span class="frac"><span class="fn">a</span><span class="fd">4</span></span>',
  // x÷(−2) の表記：−を分数の前に出す
  xn2:  '－<span class="frac"><span class="fn">x</span><span class="fd">2</span></span>',
  nxn2: '－<span class="frac"><span class="fn">x</span><span class="fd">2</span></span>',
};

const MC01_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      {
        id: 'Q1',
        q: 'a × 5 を文字式で書きなさい',
        ans: '5a',
        wrong: ['a5', 'a×5', '5×a'],
        hint: '数字を文字の前に書く。× は省略。'
      },
      {
        id: 'Q2',
        q: 'b × b を文字式で書きなさい',
        ans: 'b²',
        wrong: ['2b', 'bb', 'b+b'],
        hint: '同じ文字のかけ算は指数（²）で表す。'
      },
      {
        id: 'Q3',
        q: 'x ÷ 3 を文字式で書きなさい',
        ans: F.x3,
        wrong: ['3x', 'x3', F.n3x],
        hint: '÷ は分数の形で書く。x ÷ 3 ＝ ' + F.x3
      },
      {
        id: 'Q4',
        q: '1 × y を文字式で書きなさい',
        ans: 'y',
        wrong: ['1y', 'y×1', '1+y'],
        hint: '係数が1のときは「1」を省略する。'
      }
    ]
  },
  {
    set_id: 2,
    problems: [
      {
        id: 'Q1',
        q: '3 × a × b を文字式で書きなさい',
        ans: '3ab',
        wrong: ['3×ab', 'ab3', 'a3b'],
        hint: '数字を先に、文字はアルファベット順に並べる。'
      },
      {
        id: 'Q2',
        q: 'x × (−2) を文字式で書きなさい',
        ans: '−2x',
        wrong: ['−x2', 'x−2', '2x'],
        hint: 'マイナスの係数も数字を文字の前に。'
      },
      {
        id: 'Q3',
        q: '(a + b) ÷ 4 を文字式で書きなさい',
        ans: F.ab4,
        wrong: [F.n4ab, F.a4 + '＋b', 'a÷4＋b'],
        hint: 'カッコごと分子に置く。'
      },
      {
        id: 'Q4',
        q: '−1 × x を文字式で書きなさい',
        ans: '−x',
        wrong: ['−1x', 'x−1', '1x'],
        hint: '係数が−1のときは「1」を省略して−xと書く。'
      }
    ]
  }
];

const MC01_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      {
        id: 'Q1',
        q: 'a × 4 を文字式で正しく書いたものはどれ？',
        choices: ['a4', '4a', '4×a', 'a+4'],
        ans: 1,
        hint: '数字を先に書き、× を省略する。'
      },
      {
        id: 'Q2',
        q: 'y ÷ 5 を文字式で正しく書いたものはどれ？',
        choices: ['5y', 'y5', F.y5, F.n5y],
        ans: 2,
        hint: '÷ は分数の形で書く。y が分子。'
      },
      {
        id: 'Q3',
        q: 'x × x を文字式で正しく書いたものはどれ？',
        choices: ['2x', 'x2', 'x²', 'xx'],
        ans: 2,
        hint: '同じ文字を2回かけるときは x² と書く。'
      },
      {
        id: 'Q4',
        q: '−1 × a を文字式で正しく書いたものはどれ？',
        choices: ['1a', '−1a', '−a', 'a−1'],
        ans: 2,
        hint: '係数が −1 のときは 1 を省略して −a と書く。'
      }
    ]
  },
  {
    set_id: 2,
    problems: [
      {
        id: 'Q1',
        q: 'b × 7 を文字式で正しく書いたものはどれ？',
        choices: ['b7', '7b', '7×b', 'b÷7'],
        ans: 1,
        hint: '数字を文字の前に書き、× を省略。'
      },
      {
        id: 'Q2',
        q: '3 × a × b を文字式で正しく書いたものはどれ？',
        choices: ['ab3', '3×ab', '3ab', 'a3b'],
        ans: 2,
        hint: '数字→文字（アルファベット順）の順に並べる。'
      },
      {
        id: 'Q3',
        q: 'x ÷ (−2) を文字式で正しく書いたものはどれ？',
        choices: [
          '−x2',
          '－<span class="frac"><span class="fn">x</span><span class="fd">2</span></span>',
          '<span class="frac"><span class="fn">x</span><span class="fd">−2</span></span>',
          '−2x'
        ],
        ans: 1,
        hint: '÷ を分数に直す。x ÷ (−2) ＝ －<span class="frac"><span class="fn">x</span><span class="fd">2</span></span>　（−は分数の前に出す）'
      },
      {
        id: 'Q4',
        q: '1 × y を文字式で正しく書いたものはどれ？',
        choices: ['1y', 'y×1', 'y1', 'y'],
        ans: 3,
        hint: '係数が 1 のときは省略する。'
      }
    ]
  }
];
