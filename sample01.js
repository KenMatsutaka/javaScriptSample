/** 
 * サンプル1：変数に関数を入れる
 */ 
const sampleVar = function () {
    console.log("サンプル1");
};
// 関数を実行する時は「()」をつける
sampleVar();

/**
 * サンプル2：連想配列に関数を入れる
 */
const sampleMap = {key1 : function () {
    console.log("サンプル2");
}};
sampleMap.key1();

/**
 * サンプル3：連想配列に関数を入れる
 */
function sampleFunc(func) {
    // 引数の関数を実行
    func();
}
sampleFunc(function() {
    console.log("サンプル3");
});
