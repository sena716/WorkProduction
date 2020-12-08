// CMS接続
function InitialSearch(){
    console.log("a");
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
        console.log(contents[0].name);
        for(let i  = 0;i <contents.length;i++){
            console.log(contents[i].name);
            InitialSearch();
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