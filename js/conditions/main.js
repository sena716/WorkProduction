function conditionData(click_class){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {
        contents = json.contents;
        $('.main').empty();
        $('.main').append('<h1>検索結果</h1>');
        $('.main').append('<ul class="main__each"></ul>');
        for( let i = 0; contents.length > i; i++ ){
            if( contents[i].type == click_class.className ){
                $('.main__each').append('<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>');
            }
        }
    });
}