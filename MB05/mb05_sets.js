// MB05 分数の正負の計算
// type A: 負の分数 ＋ 正の分数
// type B: 負の分数 − 正の分数
// type C: 負の分数 − (負の分数)  → まずマイナスマイナスをプラスに変換
//
// a_n/a_d: 左の分数（負）  b_n/b_d: 右の分数
// lcm: 最小公倍数（通分後の分母）
// ans_n/ans_d: 答えの分子・分母（約分済み）
// ans_neg: 答えがマイナスかどうか

const MB05_DRILL_SETS = [
  {
    set_id: 1,
    problems: [
      // (1) -2/5 + 1/3 = -6/15 + 5/15 = -1/15
      { id:"Q1", type:"A",
        a_neg:true,  a_n:2, a_d:5,
        b_neg:false, b_n:1, b_d:3,
        lcm:15,
        a_num:-6, b_num:5,
        ans_neg:true, ans_n:1, ans_d:15,
        hint:"-2/5 = -6/15、1/3 = 5/15 → -6+5 = -1 → -1/15" },
      // (2) -3/4 - 1/3 = -9/12 - 4/12 = -13/12
      { id:"Q2", type:"B",
        a_neg:true,  a_n:3, a_d:4,
        b_neg:false, b_n:1, b_d:3,
        lcm:12,
        a_num:-9, b_num:4,
        ans_neg:true, ans_n:13, ans_d:12,
        hint:"-3/4 = -9/12、1/3 = 4/12 → -9-4 = -13 → -13/12" },
      // (3) -5/6 - (-3/4) = -5/6 + 3/4 = -10/12 + 9/12 = -1/12
      { id:"Q3", type:"C",
        a_neg:true,  a_n:5, a_d:6,
        b_neg:true,  b_n:3, b_d:4,
        lcm:12,
        a_num:-10, b_num:9,
        ans_neg:true, ans_n:1, ans_d:12,
        hint:"-5/6-(−3/4)=-5/6+3/4 → -10/12+9/12 = -1/12" },
      // (4) -1/2 + 2/3 = -3/6 + 4/6 = 1/6
      { id:"Q4", type:"A",
        a_neg:true,  a_n:1, a_d:2,
        b_neg:false, b_n:2, b_d:3,
        lcm:6,
        a_num:-3, b_num:4,
        ans_neg:false, ans_n:1, ans_d:6,
        hint:"-1/2 = -3/6、2/3 = 4/6 → -3+4 = 1 → 1/6" }
    ]
  },
  {
    set_id: 2,
    problems: [
      // (1) -1/3 + 1/4 = -4/12 + 3/12 = -1/12
      { id:"Q1", type:"A",
        a_neg:true,  a_n:1, a_d:3,
        b_neg:false, b_n:1, b_d:4,
        lcm:12,
        a_num:-4, b_num:3,
        ans_neg:true, ans_n:1, ans_d:12,
        hint:"-1/3 = -4/12、1/4 = 3/12 → -4+3 = -1 → -1/12" },
      // (2) -2/3 - 1/4 = -8/12 - 3/12 = -11/12
      { id:"Q2", type:"B",
        a_neg:true,  a_n:2, a_d:3,
        b_neg:false, b_n:1, b_d:4,
        lcm:12,
        a_num:-8, b_num:3,
        ans_neg:true, ans_n:11, ans_d:12,
        hint:"-2/3 = -8/12、1/4 = 3/12 → -8-3 = -11 → -11/12" },
      // (3) -3/4 - (-1/2) = -3/4 + 1/2 = -3/4 + 2/4 = -1/4
      { id:"Q3", type:"C",
        a_neg:true,  a_n:3, a_d:4,
        b_neg:true,  b_n:1, b_d:2,
        lcm:4,
        a_num:-3, b_num:2,
        ans_neg:true, ans_n:1, ans_d:4,
        hint:"-3/4-(−1/2)=-3/4+1/2 → -3/4+2/4 = -1/4" },
      // (4) -1/6 + 1/2 = -1/6 + 3/6 = 2/6 = 1/3
      { id:"Q4", type:"A",
        a_neg:true,  a_n:1, a_d:6,
        b_neg:false, b_n:1, b_d:2,
        lcm:6,
        a_num:-1, b_num:3,
        ans_neg:false, ans_n:1, ans_d:3,
        hint:"-1/6 = -1/6、1/2 = 3/6 → -1+3 = 2 → 2/6 = 1/3" }
    ]
  }
];

const MB05_CHECK_SETS = [
  {
    set_id: 1,
    problems: [
      // -3/5 + 1/2 = -6/10 + 5/10 = -1/10
      { id:"Q1", type:"A",
        a_neg:true,  a_n:3, a_d:5,
        b_neg:false, b_n:1, b_d:2,
        lcm:10,
        a_num:-6, b_num:5,
        ans_neg:true, ans_n:1, ans_d:10,
        hint:"-3/5=-6/10、1/2=5/10 → -6+5=-1 → -1/10" },
      // -5/6 - 1/4 = -10/12 - 3/12 = -13/12
      { id:"Q2", type:"B",
        a_neg:true,  a_n:5, a_d:6,
        b_neg:false, b_n:1, b_d:4,
        lcm:12,
        a_num:-10, b_num:3,
        ans_neg:true, ans_n:13, ans_d:12,
        hint:"-5/6=-10/12、1/4=3/12 → -10-3=-13 → -13/12" },
      // -1/4 - (-3/8) = -1/4 + 3/8 = -2/8 + 3/8 = 1/8
      { id:"Q3", type:"C",
        a_neg:true,  a_n:1, a_d:4,
        b_neg:true,  b_n:3, b_d:8,
        lcm:8,
        a_num:-2, b_num:3,
        ans_neg:false, ans_n:1, ans_d:8,
        hint:"-1/4-(−3/8)=-1/4+3/8 → -2/8+3/8=1/8" },
      // -2/5 - 1/3 = -6/15 - 5/15 = -11/15
      { id:"Q4", type:"B",
        a_neg:true,  a_n:2, a_d:5,
        b_neg:false, b_n:1, b_d:3,
        lcm:15,
        a_num:-6, b_num:5,
        ans_neg:true, ans_n:11, ans_d:15,
        hint:"-2/5=-6/15、1/3=5/15 → -6-5=-11 → -11/15" }
    ]
  },
  {
    set_id: 2,
    problems: [
      // -1/2 - (-2/3) = -1/2 + 2/3 = -3/6 + 4/6 = 1/6
      { id:"Q1", type:"C",
        a_neg:true,  a_n:1, a_d:2,
        b_neg:true,  b_n:2, b_d:3,
        lcm:6,
        a_num:-3, b_num:4,
        ans_neg:false, ans_n:1, ans_d:6,
        hint:"-1/2-(−2/3)=-1/2+2/3 → -3/6+4/6=1/6" },
      // -3/8 + 1/4 = -3/8 + 2/8 = -1/8
      { id:"Q2", type:"A",
        a_neg:true,  a_n:3, a_d:8,
        b_neg:false, b_n:1, b_d:4,
        lcm:8,
        a_num:-3, b_num:2,
        ans_neg:true, ans_n:1, ans_d:8,
        hint:"-3/8=-3/8、1/4=2/8 → -3+2=-1 → -1/8" },
      // -5/6 - (-1/3) = -5/6 + 1/3 = -5/6 + 2/6 = -3/6 = -1/2
      { id:"Q3", type:"C",
        a_neg:true,  a_n:5, a_d:6,
        b_neg:true,  b_n:1, b_d:3,
        lcm:6,
        a_num:-5, b_num:2,
        ans_neg:true, ans_n:1, ans_d:2,
        hint:"-5/6-(−1/3)=-5/6+1/3 → -5/6+2/6=-3/6=-1/2" },
      // -1/3 - 1/6 = -2/6 - 1/6 = -3/6 = -1/2
      { id:"Q4", type:"B",
        a_neg:true,  a_n:1, a_d:3,
        b_neg:false, b_n:1, b_d:6,
        lcm:6,
        a_num:-2, b_num:1,
        ans_neg:true, ans_n:1, ans_d:2,
        hint:"-1/3=-2/6、1/6=1/6 → -2-1=-3 → -3/6=-1/2" }
    ]
  }
];
