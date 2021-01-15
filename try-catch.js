//ユーザーデータを取るだけの関数
async function fetchUsers(){
    const response = await fetch('user.json');
    //通信が完了したら。
    if(response.ok){
        //jsonメソッドでjsonデータ取得
        const json = await response.json();

        //jsonの中身が空だった場合はエラー 0がfalseなので
        if(!json.length){
            throw new CustomError('no data');
        }

        //jsonデータを返す。
        return json;
    }
}

// カスタムエラー
class CustomError extends Error{
    constructor(message){
        //親クラスのErrorに値を渡すとエラーメッセージを出力してくれる
        super(message);
        //カスタムエラーの名前を表記するにはnameプロパティに追加
        this.name = 'CustomError'
    }
}

async function init(){
    try{
        //エラーがあるかのチェック
        const users = await fetchUsers();
        for(const user of users){
            console.log(`I'm ${user.name}, ${user.age} years old`)
        }
    }catch(e){
        //カスタムエラーを作ると、エラー出力にも条件分岐を作ることができる。
        if(e instanceof CustomError){
            console.error(e);
        }else{
            console.error('normal error');
        }
    }finally{
        console.log('bye');
    }

    //エラーが発生し、throwされた時に、try-catchが無いと下の処理は行われない。
    console.log('end');
}

init();