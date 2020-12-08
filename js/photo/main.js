// CMS接続
fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
    headers: {
        "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
    }
})
.then(res => res.json())
.then(json => {
    contents = json.contents;
    for( let i = 0; contents.length > i; i++ ){
        $('.main__each').append('<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>');
    }
});