// 一般的に、サーバーへリクエストすると、jsonが返ってくる。
// jsonは受け取ったデータである。

const fe = fetch('user.json').then(function(response){
    //responseオブジェクトはサーバーから帰ってきたデータをまとめて保管している。

    // responseの__proto__を見ると json形式のデータがある
    console.log(response);

    //jsonの中身を次のthenに渡す
    return response.json();
}).then(function(json){
    console.log(json);

    for(const user of json){
        console.log(user);
    }
});

console.log(fe);