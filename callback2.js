//cbを3秒間待機したのちに実行する処理を複数回繰り返したい場合。
function sleep(cb,val){
    setTimeout(() => {
        console.log(val++);
        cb(val);
    },3000)
}

//順番に処理したいものを記述すると多階層になってしまう。
//なのでコールバック関数は非同期チェーンには適していない。
sleep(function(val){
    console.log("コールバック実行");
    sleep(function(val){
        console.log("コールバック実行2");
        sleep(function(val){
            console.log("コールバック実行3");
        },val) 
    },val) 
},0);