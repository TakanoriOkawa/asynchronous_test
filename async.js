// asyncで関数として実行する
async function fetchUser(){
    //awaitで完了を待ちます responseはpromiseオブジェクト が返ってくる
    const response = await fetch('user.json');

    //json取得
    const json = await response.json();

    for(const user of json){
        console.log(`I'm ${user.name}`);
    }
}
fetchUser();