// MB09 指数の計算（例題：(−2)³、−2³、(−3)²、−5²）

const MB09_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−4)²", type:"bracket", base:4, exp:2, ans:16,  hint:"(−4)×(−4)＝16" },
      { id:"Q2", expr:"−4²",   type:"plain",   base:4, exp:2, ans:-16, hint:"−(4×4)＝−16" },
      { id:"Q3", expr:"(−3)³", type:"bracket", base:3, exp:3, ans:-27, hint:"(−3)×(−3)×(−3)＝−27" },
      { id:"Q4", expr:"−3²",   type:"plain",   base:3, exp:2, ans:-9,  hint:"−(3×3)＝−9" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"(−1)³", type:"bracket", base:1, exp:3, ans:-1,  hint:"(−1)×(−1)×(−1)＝−1" },
      { id:"Q2", expr:"−1²",   type:"plain",   base:1, exp:2, ans:-1,  hint:"−(1×1)＝−1" },
      { id:"Q3", expr:"(−5)³", type:"bracket", base:5, exp:3, ans:-125,hint:"(−5)×(−5)×(−5)＝−125" },
      { id:"Q4", expr:"−6²",   type:"plain",   base:6, exp:2, ans:-36, hint:"−(6×6)＝−36" }
    ]
  }
];

const MB09_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−4)²", type:"bracket", base:4, exp:2, ans:16,  hint:"(−4)×(−4)＝16" },
      { id:"Q2", expr:"−4²",   type:"plain",   base:4, exp:2, ans:-16, hint:"−(4×4)＝−16" },
      { id:"Q3", expr:"(−3)³", type:"bracket", base:3, exp:3, ans:-27, hint:"(−3)×(−3)×(−3)＝−27" },
      { id:"Q4", expr:"−6²",   type:"plain",   base:6, exp:2, ans:-36, hint:"−(6×6)＝−36" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"(−5)³", type:"bracket", base:5, exp:3, ans:-125,hint:"(−5)×(−5)×(−5)＝−125" },
      { id:"Q2", expr:"−3²",   type:"plain",   base:3, exp:2, ans:-9,  hint:"−(3×3)＝−9" },
      { id:"Q3", expr:"(−1)³", type:"bracket", base:1, exp:3, ans:-1,  hint:"(−1)×(−1)×(−1)＝−1" },
      { id:"Q4", expr:"−4²",   type:"plain",   base:4, exp:2, ans:-16, hint:"−(4×4)＝−16" }
    ]
  }
];
