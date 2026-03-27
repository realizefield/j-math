// MC05 単項式の乗除
// 導入の例：5a×3b, (－3x)×4y, 18a²b÷3a, 9x²y÷3xy×2x, (－5x)²
// 例題：    5a×3b, (－3x)×4y, 18a²b÷3a, 9x²y÷3xy×2x, (－5x)²

const MC05_DRILL_SETS = [
  { set_id:1, problems:[
    { id:'Q1', q:'7a × 2b', ans:'14ab', hint:'7×2＝14、a×b＝ab → 14ab' },
    { id:'Q2', q:'(－6x) × (－3y)', ans:'18xy', hint:'－×－＝＋、6×3＝18 → 18xy' },
    { id:'Q3', q:'15xy ÷ 5y', ans:'3x', hint:'<span class="frac"><span class="fn">15xy</span><span class="fd">5y</span></span> → 15÷5＝3、xy÷y＝x → 3x' },
    { id:'Q4', q:'(－2a)²', ans:'4a²', hint:'(－2a)×(－2a)＝(－2)²×a²＝4a²（－×－＝＋）' },
  ]},
  { set_id:2, problems:[
    { id:'Q1', q:'4x × (－3y)', ans:'－12xy', hint:'＋×－＝－、4×3＝12 → －12xy' },
    { id:'Q2', q:'20a²b ÷ 4ab', ans:'5a', hint:'<span class="frac"><span class="fn">20a²b</span><span class="fd">4ab</span></span> → 20÷4＝5、a²b÷ab＝a → 5a' },
    { id:'Q3', q:'8x²y ÷ 4x × (－2y)', ans:'－4xy²', hint:'÷後→分母、×後→分子：<span class="frac"><span class="fn">8x²y×(－2y)</span><span class="fd">4x</span></span> ＝ <span class="frac"><span class="fn">－16x²y²</span><span class="fd">4x</span></span> ＝ －4xy²' },
    { id:'Q4', q:'(3xy)²', ans:'9x²y²', hint:'(3xy)×(3xy)＝3²×x²×y²＝9x²y²' },
  ]},
];

const MC05_CHECK_SETS = [
  { set_id:1, problems:[
    { id:'Q1', q:'3a × 8b を計算しなさい', choices:['11ab','24ab','24a²b²','11a＋b'], ans:1, hint:'3×8＝24、a×b＝ab → 24ab' },
    { id:'Q2', q:'(－4x) × (－5y) を計算しなさい', choices:['－20xy','20xy','－9xy','9xy'], ans:1, hint:'－×－＝＋、4×5＝20 → 20xy' },
    { id:'Q3', q:'21x²y ÷ 7x を計算しなさい', choices:['3x²y','3xy','14xy','14x²y'], ans:1, hint:'<span class="frac"><span class="fn">21x²y</span><span class="fd">7x</span></span> → 21÷7＝3、x²y÷x＝xy → 3xy' },
    { id:'Q4', q:'(－6a)² を計算しなさい', choices:['－36a²','36a²','－12a²','12a²'], ans:1, hint:'(－6a)×(－6a)＝36a²（－×－＝＋）' },
  ]},
  { set_id:2, problems:[
    { id:'Q1', q:'(－5x) × 2y を計算しなさい', choices:['10xy','－10xy','－3xy','3xy'], ans:1, hint:'－×＋＝－、5×2＝10 → －10xy' },
    { id:'Q2', q:'24a²b ÷ 6ab を計算しなさい', choices:['4a','4b','18a','4ab'], ans:0, hint:'<span class="frac"><span class="fn">24a²b</span><span class="fd">6ab</span></span> → 24÷6＝4、a²b÷ab＝a → 4a' },
    { id:'Q3', q:'6x²y ÷ 2x × (－3y) を計算しなさい', choices:['9xy²','－9xy²','－9x²y²','9x²y²'], ans:1, hint:'÷後→分母、×後→分子：<span class="frac"><span class="fn">6x²y×(－3y)</span><span class="fd">2x</span></span> ＝ <span class="frac"><span class="fn">－18x²y²</span><span class="fd">2x</span></span> ＝ －9xy²' },
    { id:'Q4', q:'(－2xy)² を計算しなさい', choices:['－4x²y²','4x²y²','－4xy','4xy'], ans:1, hint:'(－2xy)×(－2xy)＝4x²y²（－×－＝＋）' },
  ]},
];