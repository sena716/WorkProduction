// $(function(){
//     var lists = [
//         {name: 'メロン', price: 500},
//         {name: 'バナナ', price: 100},
//         {name: 'スイカ', price: 280},
//         {name: 'イチゴ', price: 300}
//     ];
//     lists.sort(function(a, b) {
//         console.log( a,b );
//         if (a.name > b.name) {
//             return 1;
//         } else {
//             return -1;
//         }
//     })
    
//     console.log(lists);
// });

// CMS接続
function InitialSearch(){
    
}
function nameSearch (Initial){
    
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {
        contents = json.contents;
        for(let i  = 0;i <contents.length;i++){
            InitialSearch();
            // 動物の名前をstrに代入
            var str= contents[i].name;
            // strから名前の頭文字
            var a =  str.slice(0,1);
            // 並び替え途中
            var list = [
                { str },
                
            ];

            console.log( list );
            list.sort(function(a, b) {
                    if (a.str > b.str) {
                        return 1;
                    } else {
                        return -1;
                    }
                })
            }

        /*$('.main').empty();
        $('.main').append('<h1>検索結果</h1>');
        $('.main').append('<ul class="main__each"></ul>');
        */
        // for( let i = 0; contents.length > i; i++ ){
        //     for( let j = 0; checkI.length > j; j++ ){
        //         if( contents[i].name == checkI[j] ){
        //             $('.main__each').append('<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>');
        //         }
        //     }
        // }
    });
}