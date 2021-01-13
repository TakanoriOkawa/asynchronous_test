/*
メインスレッドのみの、同期処理だけだと、重たい処理がある場合、次の処理が止まってしまう。

非同期処理は、そんな重たい処理がある場合、その結果を待たずに、次の処理（非同期処理）を実行することが
できる。

なので非同期処理は便利なのだが、「複数の非同期処理を順番に実行したい場合」。
コールバック関数を使うのは相応しくなく。その場合 ES6からのPromiseを使うと良い。
 */

// コールバックで非同期チェーン
function sleep(cb,data){
    setTimeout(() => {
        cb(data);
    },2000)
}


function getDate(){
    //コールバック関数と日付データを渡す
    const data = new Date;

    sleep(function(){
        console.log("取得:" + data.getFullYear() + "年");
        sleep(function(){
            console.log("取得;" + parseInt(data.getMonth() + 1) + "月");
            sleep(function(){
                console.log("取得;" + data.getDate() + "日");
            })
        })
    });

}

getDate();
console.log("first");
