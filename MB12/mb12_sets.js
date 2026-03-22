// MB12 指数・カッコを含む計算（例題：(−3)²−2³−7、−6²−(−3)²、(−3)²−{6−(2×3−7)}）

const MB12_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−2)³＋3²",           type:"exp",
        step1:"−8＋9",   ans:1,
        hint:"(−2)³＝−8、3²＝9 → −8＋9" },
      { id:"Q2", expr:"−5²＋(−1)³",          type:"exp",
        step1:"−25−1",   ans:-26,
        hint:"−5²＝−25、(−1)³＝−1 → −25＋(−1)＝−25−1" },
      { id:"Q3", expr:"2³−(−2)²＋1",         type:"exp",
        step1:"8−4＋1",  ans:5,
        hint:"2³＝8、(−2)²＝4 → 8−4＋1" },
      { id:"Q4", expr:"(−2)²−{5−(3×2−8)}",  type:"brace",
        step1_inner:"3×2−8＝6−8＝−2",
        step1_brace:"5−(−2)＝5＋2＝7",
        step1_exp:"(−2)²＝4",
        step1:"4−7",     ans:-3,
        hint:"① (−2)²＝4　② 3×2−8＝−2 → 5−(−2)＝7　③ 4−7" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"−3²＋(−2)³",          type:"exp",
        step1:"−9−8",    ans:-17,
        hint:"−3²＝−9、(−2)³＝−8 → −9＋(−8)＝−9−8" },
      { id:"Q2", expr:"(−4)²−2³",            type:"exp",
        step1:"16−8",    ans:8,
        hint:"(−4)²＝16、2³＝8 → 16−8" },
      { id:"Q3", expr:"−2²＋(−3)²",          type:"exp",
        step1:"−4＋9",   ans:5,
        hint:"−2²＝−4、(−3)²＝9 → −4＋9" },
      { id:"Q4", expr:"(−3)²−{8−(3×2−4)}",  type:"brace",
        step1_inner:"3×2−4＝6−4＝2",
        step1_brace:"8−2＝6",
        step1_exp:"(−3)²＝9",
        step1:"9−6",     ans:3,
        hint:"① (−3)²＝9　② 3×2−4＝2 → 8−2＝6　③ 9−6" }
    ]
  }
];

const MB12_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", expr:"(−2)³＋3²",           type:"exp",
        step1:"−8＋9",   ans:1,
        hint:"(−2)³＝−8、3²＝9 → −8＋9" },
      { id:"Q2", expr:"−3²＋(−2)³",          type:"exp",
        step1:"−9−8",    ans:-17,
        hint:"−3²＝−9、(−2)³＝−8 → −9−8" },
      { id:"Q3", expr:"(−2)²−{5−(3×2−8)}",  type:"brace",
        step1_inner:"3×2−8＝6−8＝−2",
        step1_brace:"5−(−2)＝5＋2＝7",
        step1_exp:"(−2)²＝4",
        step1:"4−7",     ans:-3,
        hint:"① (−2)²＝4　② 3×2−8＝−2 → 5−(−2)＝7　③ 4−7" },
      { id:"Q4", expr:"(−4)²−2³",            type:"exp",
        step1:"16−8",    ans:8,
        hint:"(−4)²＝16、2³＝8 → 16−8" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", expr:"−5²＋(−1)³",          type:"exp",
        step1:"−25−1",   ans:-26,
        hint:"−5²＝−25、(−1)³＝−1 → −25−1" },
      { id:"Q2", expr:"−2²＋(−3)²",          type:"exp",
        step1:"−4＋9",   ans:5,
        hint:"−2²＝−4、(−3)²＝9 → −4＋9" },
      { id:"Q3", expr:"(−3)²−{8−(3×2−4)}",  type:"brace",
        step1_inner:"3×2−4＝6−4＝2",
        step1_brace:"8−2＝6",
        step1_exp:"(−3)²＝9",
        step1:"9−6",     ans:3,
        hint:"① (−3)²＝9　② 3×2−4＝2 → 8−2＝6　③ 9−6" },
      { id:"Q4", expr:"2³−(−2)²＋1",         type:"exp",
        step1:"8−4＋1",  ans:5,
        hint:"2³＝8、(−2)²＝4 → 8−4＋1" }
    ]
  }
];
