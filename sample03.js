// タイトル コールバック関数
// 処理の前後にログ出力
function showLog(func) {
    console.log("処理を開始します");
    func();
    console.log("処理を終了します");   
}
// showLog実行中に引数の関数が実行される
showLog(() => {
    console.log("処理を実行します");
});

