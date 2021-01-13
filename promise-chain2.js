function base(val){
    return new Promise((resolve) => {
        console.log("base");
        setTimeout(() => {
            //1スタート
            val++;
            resolve(val);
        },3000)
    })
}

base(0)
    .then((val) => {
        console.log("first:" + val);
        return base(val);
    })
    .then((val) => {
        console.log("second:" + val);
        return base(val);
    })
    .then((val) => {
        console.log("third:" + val);
        return base(val);
    })