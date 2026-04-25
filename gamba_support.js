/* ══════════════════════════════════════════
   GAMBA 共通サポートスクリプト  gamba_support.js
   - 合格登録（markPassed）
   - 進捗の取得・保存
   - 各単元ページから読み込まれる
   ══════════════════════════════════════════ */

/* ── ストレージキー ── */
function gambaStorageKey(unitCode){
  return 'gamba_prog_' + unitCode;
}

/* ── 状態の取得 ── */
function getStatus(unitCode){
  return localStorage.getItem(gambaStorageKey(unitCode)) || 'none';
}

/* ── 状態の保存 ── */
function setStatus(unitCode, status){
  localStorage.setItem(gambaStorageKey(unitCode), status);
}

/* ── 合格登録（check.htmlの満点時に呼ばれる） ── */
function markPassed(unitCode){
  setStatus(unitCode, 'pass');
  console.log('[GAMBA] ' + unitCode + ' 合格登録しました');
}

/* ── 復習中に切り替え ── */
function markReview(unitCode){
  setStatus(unitCode, 'review');
}

/* ── 学習者名の取得 ── */
function getStudentName(){
  return localStorage.getItem('studentName') || 'ゲスト';
}

/* ── 学習者IDの取得 ── */
function getStudentId(){
  return localStorage.getItem('studentId') || 'stu_guest';
}
