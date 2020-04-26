// タイトル：コールバック関数を使用してフィルター機能を実装
class ListUtil {
    static filter(list, conditionFunc) {
        let retList = new Array();
        for (let i = 0; i < list.length; i++) {
            let data = list[i];
            let resultFlg = conditionFunc(data);
            if (resultFlg) {
                retList.push(data);
            }
        }
        return retList;
    }
}
const persons = [
    {name:'若手エンジニア', age:20},
    {name:'中堅エンジニア', age:30},
    {name:'ベテランエンジニア', age:40}];
let resultList = ListUtil.filter(persons, (data) => {
    return data.age >= 30;
});
console.log(resultList);
