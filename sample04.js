// タイトル JSでクラス作成
/** メンバクラス */
class Member {
    // コンストラクタ
    constructor(name) {
        this.name = name;
    }
    // 名前を取得する
    getName() {
        return this.name;
    }
}
// インスタンス生成
let member1 = new Member("まつけん");
console.log(member1.getName());