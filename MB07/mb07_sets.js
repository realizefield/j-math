// MB07 正負の数のかけ算・わり算
// type: 'mul' かけ算 / 'div' わり算
// a, b: 計算する2つの数
// ans: 答え
// sign_a, sign_b: '+' or '-'（符号）

const MB07_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", type:"mul", a:3,  b:7,  ans:21,  sign_a:'+', sign_b:'+', hint:"＋×＋＝＋　3×7=21" },
      { id:"Q2", type:"mul", a:4,  b:-5, ans:-20, sign_a:'+', sign_b:'-', hint:"＋×−＝−　4×5=20" },
      { id:"Q3", type:"mul", a:-6, b:3,  ans:-18, sign_a:'-', sign_b:'+', hint:"−×＋＝−　6×3=18" },
      { id:"Q4", type:"mul", a:-5, b:-4, ans:20,  sign_a:'-', sign_b:'-', hint:"−×−＝＋　5×4=20" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", type:"mul", a:6,  b:8,   ans:48,  sign_a:'+', sign_b:'+', hint:"＋×＋＝＋　6×8=48" },
      { id:"Q2", type:"mul", a:-7, b:-9,  ans:63,  sign_a:'-', sign_b:'-', hint:"−×−＝＋　7×9=63" },
      { id:"Q3", type:"div", a:20, b:-4,  ans:-5,  sign_a:'+', sign_b:'-', hint:"＋÷−＝−　20÷4=5" },
      { id:"Q4", type:"div", a:-24,b:-6,  ans:4,   sign_a:'-', sign_b:'-', hint:"−÷−＝＋　24÷6=4" }
    ]
  }
];

const MB07_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      { id:"Q1", type:"mul", a:5,   b:9,  ans:45,  sign_a:'+', sign_b:'+', hint:"＋×＋＝＋　5×9=45" },
      { id:"Q2", type:"mul", a:-8,  b:7,  ans:-56, sign_a:'-', sign_b:'+', hint:"−×＋＝−　8×7=56" },
      { id:"Q3", type:"div", a:-36, b:9,  ans:-4,  sign_a:'-', sign_b:'+', hint:"−÷＋＝−　36÷9=4" },
      { id:"Q4", type:"mul", a:-6,  b:-8, ans:48,  sign_a:'-', sign_b:'-', hint:"−×−＝＋　6×8=48" }
    ]
  },
  {
    set_id: 2,
    problems: [
      { id:"Q1", type:"mul", a:4,   b:-9,  ans:-36, sign_a:'+', sign_b:'-', hint:"＋×−＝−　4×9=36" },
      { id:"Q2", type:"div", a:30,  b:6,   ans:5,   sign_a:'+', sign_b:'+', hint:"＋÷＋＝＋　30÷6=5" },
      { id:"Q3", type:"mul", a:-7,  b:-5,  ans:35,  sign_a:'-', sign_b:'-', hint:"−×−＝＋　7×5=35" },
      { id:"Q4", type:"div", a:-42, b:-7,  ans:6,   sign_a:'-', sign_b:'-', hint:"−÷−＝＋　42÷7=6" }
    ]
  }
];
