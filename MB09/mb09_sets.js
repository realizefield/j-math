// MB09 指数の計算
// type: 'bracket'=(−n)^p / 'plain'=−n^p
// base: 底の数（正）, exp: 指数, ans: 答え

const MB09_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−3)²", type:"bracket", base:3, exp:2, ans:9,   hint:"(−3)×(−3)＝9" },
      { id:"Q2", expr:"−3²",   type:"plain",   base:3, exp:2, ans:-9,  hint:"−(3×3)＝−9" },
      { id:"Q3", expr:"(−5)²", type:"bracket", base:5, exp:2, ans:25,  hint:"(−5)×(−5)＝25" },
      { id:"Q4", expr:"−5²",   type:"plain",   base:5, exp:2, ans:-25, hint:"−(5×5)＝−25" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"(−2)³", type:"bracket", base:2, exp:3, ans:-8,  hint:"(−2)×(−2)×(−2)＝−8" },
      { id:"Q2", expr:"−2³",   type:"plain",   base:2, exp:3, ans:-8,  hint:"−(2×2×2)＝−8" },
      { id:"Q3", expr:"(−2)²", type:"bracket", base:2, exp:2, ans:4,   hint:"(−2)×(−2)＝4" },
      { id:"Q4", expr:"−2²",   type:"plain",   base:2, exp:2, ans:-4,  hint:"−(2×2)＝−4" }
    ]
  }
];

const MB09_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−3)³", type:"bracket", base:3, exp:3, ans:-27, hint:"(−3)×(−3)×(−3)＝−27" },
      { id:"Q2", expr:"−5²",   type:"plain",   base:5, exp:2, ans:-25, hint:"−(5×5)＝−25" },
      { id:"Q3", expr:"(−2)²", type:"bracket", base:2, exp:2, ans:4,   hint:"(−2)×(−2)＝4" },
      { id:"Q4", expr:"−2³",   type:"plain",   base:2, exp:3, ans:-8,  hint:"−(2×2×2)＝−8" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"(−5)²", type:"bracket", base:5, exp:2, ans:25,  hint:"(−5)×(−5)＝25" },
      { id:"Q2", expr:"−3²",   type:"plain",   base:3, exp:2, ans:-9,  hint:"−(3×3)＝−9" },
      { id:"Q3", expr:"(−2)³", type:"bracket", base:2, exp:3, ans:-8,  hint:"(−2)×(−2)×(−2)＝−8" },
      { id:"Q4", expr:"−2²",   type:"plain",   base:2, exp:2, ans:-4,  hint:"−(2×2)＝−4" }
    ]
  }
];
