//Promise 非同期処理をより簡単に可読性が上がるようにしたもの
//resolveとrejectはPromiseインスタンスのコールバック関数
// new Promiseの引数に与えた処理は同期的に処理されるが
//then,catch,finallyメソッド内の処理は非同期処理として扱われる


new Promise(function(resolve,reject){
    console.log("promise");

    // resolve(10);
    // reject();
    
    // setTimeoutを組み込む
    // new Promiseの引数ないは同期処理。
    setTimeout(function(){
        resolve(10);
    },3000)
}).then(function(num){
    //thenメソッドはsetTimeoutと同じく非同期の処理を実行できる。
    //このメソッド処理は、タスクキューに追加される
    console.log("then1:" + num);
    setTimeout(function(){
        num++;
    },3000)

    return num;

}).then(function(num){
    console.log("then2:" + num);
    //途中でcatchメソッドに以降したい場合
    throw new Error;
}).catch(function(num){
    console.log("catch");
}).finally(function(){
    console.log("finally");
    //非同期処理の中で非同期の命令は出せない。
});

//thenをチェーンでつなげても、多階層にならないから便利。
//よって、Promiseは非同期チェーンを行う場合に適している。

console.log("global");