const promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 300);
});

const promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 2000);
});

const promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve();
    }, 500);
});

// Promise.allを使って、3つのpromiseを同時に実行している
Promise.all([promise1,promise2,promise3]).then(function(){
    console.log("Forth");
});

console.log("First");

setTimeout(function(){
    console.log("Third");
}, 600);

console.log("Second");

const btn = document.querySelector('.btn');
btn.addEventListener('click',function(){
    console.log("ボタンを押す");
});