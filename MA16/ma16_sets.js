// MA16 小数のわり算
// type: 'int_div_dec'  整数 ÷ 小数
//       'dec_div_dec'  小数 ÷ 小数
//       'dec_div_int'  小数 ÷ 整数
//
// a        : 被除数（割られる数）の文字列
// b        : 除数（割る数）の文字列
// ans      : 答え文字列
// a_int    : aを整数化した値
// b_int    : bを整数化した値
// a_shift  : aの小数点以下桁数
// b_shift  : bの小数点以下桁数
// net_shift: b_shift - a_shift（小数点を右に移動する桁数。負なら左移動）
// product_int: a_int ÷ b_int の商（整数÷整数の計算結果）

const MA16_SETS = [
  {
    set_id: 1,
    problems: [
      // 1.2 ÷ 4 = 0.3   小数÷整数
      { id:"Q1", type:"dec_div_int",
        a:"1.2", b:"4", ans:"0.3",
        a_int:12, b_int:4,
        a_shift:1, b_shift:0, net_shift:-1,
        hint:"12÷4＝3 → 小数点を左に1つ → 0.3" },
      // 3.6 ÷ 0.4 = 9   小数÷小数（同桁）
      { id:"Q2", type:"dec_div_dec",
        a:"3.6", b:"0.4", ans:"9",
        a_int:36, b_int:4,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 36÷4＝9。小数点の移動なし。" },
      // 0.6 ÷ 0.2 = 3   小数÷小数
      { id:"Q3", type:"dec_div_dec",
        a:"0.6", b:"0.2", ans:"3",
        a_int:6, b_int:2,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 6÷2＝3。" },
      // 1.5 ÷ 0.5 = 3   小数÷小数
      { id:"Q4", type:"dec_div_dec",
        a:"1.5", b:"0.5", ans:"3",
        a_int:15, b_int:5,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 15÷5＝3。" }
    ]
  },
  {
    set_id: 2,
    problems: [
      // 2.4 ÷ 6 = 0.4   小数÷整数
      { id:"Q1", type:"dec_div_int",
        a:"2.4", b:"6", ans:"0.4",
        a_int:24, b_int:6,
        a_shift:1, b_shift:0, net_shift:-1,
        hint:"24÷6＝4 → 小数点を左に1つ → 0.4" },
      // 0.8 ÷ 0.4 = 2   小数÷小数
      { id:"Q2", type:"dec_div_dec",
        a:"0.8", b:"0.4", ans:"2",
        a_int:8, b_int:4,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 8÷4＝2。" },
      // 4.5 ÷ 0.9 = 5   小数÷小数
      { id:"Q3", type:"dec_div_dec",
        a:"4.5", b:"0.9", ans:"5",
        a_int:45, b_int:9,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 45÷9＝5。" },
      // 3.6 ÷ 1.2 = 3   小数÷小数（1より大きい除数）
      { id:"Q4", type:"dec_div_dec",
        a:"3.6", b:"1.2", ans:"3",
        a_int:36, b_int:12,
        a_shift:1, b_shift:1, net_shift:0,
        hint:"両方10倍すると 36÷12＝3。" }
    ]
  }
];
