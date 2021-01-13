// プロミスチェーン。Promiseを使って非同期処理を順番に実行。
function sleep(){
    console.log("hello");
    // Promiseを返却することで、sleepの呼び出し下で.thenが使える
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(); // thenを実行する then2を実行。
            console.log("3秒後");
        },3000)
    })
}


//非同期チェーン。
const promise = sleep(0);
console.log(promise);

promise.then(() => {
    console.log("then"); 
    return sleep();  // さらに非同期処理を実行するには もう一度 sleepの実行。
}).then(() => {
    console.log("then2");
    return sleep();
})
