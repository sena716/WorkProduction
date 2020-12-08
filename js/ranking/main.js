window.onload=function(){
// CMS接続
fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
    headers: {
        "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
    }
})
.then(res => res.json())
.then(json => {
    contents = json.contents;
    let a;
    for( let i = 0; contents.length > i; i++ ){
        for( let j = 0; contents.length > j; j++ ){
            if( contents[i].bodyWeight < contents[j].bodyWeight ){
                a=contents[i];
                contents[i] = contents[j];
                contents[j] = a;
            }
        }
    }
    $('.main--rank__1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
    $('.main--rank__2').append('<img src="'+ contents[1].img.url +'"><p>'+ contents[1].name +'</p><p>'+ contents[1].bodyWeight +'</p>');
    $('.main--rank__3').append('<img src="'+ contents[2].img.url +'"><p>'+ contents[2].name +'</p><p>'+ contents[2].bodyWeight +'</p>');

    $('.main--rankL__1').append('<img src="'+ contents[contents.length].img.url +'"><p>'+ contents[contents.length].name +'</p><p>'+ contents[contents.length].bodyWeight +'</p>');
    $('.main--rankL__2').append('<img src="'+ contents[contents.length-1].img.url +'"><p>'+ contents[contents.length-1].name +'</p><p>'+ contents[contents.length-1].bodyWeight +'</p>');
    $('.main--rankL__3').append('<img src="'+ contents[contents.length-2].img.url +'"><p>'+ contents[contents.length-2].name +'</p><p>'+ contents[contents.length-2].bodyWeight +'</p>');

});
}