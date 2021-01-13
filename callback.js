//a関数 → b関数 → 非同期処理 の順で実行したい場合

// function a(){
//     setTimeout(() => {
//         //3 タスクキューはコールスタックが空にならないと実行されない。
//         console.log('task1 done');
//     },1000);
//     console.log('task a done'); // 1
// }


// function b(){
//     console.log('task b done'); // 2
// }

// a();

// b();


//a関数 → 非同期処理 → b関数 の順で実行したい場合

function a(cb){
    setTimeout(() => {
        console.log('task1 done'); // 2
        cb();
    },1000);
    console.log('task a done'); // 1
}

function b(){
    console.log('task b done'); // 3
}

a(b);


