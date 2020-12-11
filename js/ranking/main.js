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
    
    // $('.main--rank__S1').style.backgroundImage = contents[0].img.url;
    $('.main--rank__S1').css('background-image',contents[0].img.url);
    console.log(contents[0].img.url);
    // $('.main--rank__S1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
    $('.main--rank__S2').append('<img src="'+ contents[1].img.url +'"><p>'+ contents[1].name +'</p><p>'+ contents[1].bodyWeight +'</p>');
    $('.main--rank__S3').append('<img src="'+ contents[2].img.url +'"><p>'+ contents[2].name +'</p><p>'+ contents[2].bodyWeight +'</p>');



    for( let i = 0; contents.length > i; i++ ){
        for( let j = 0; contents.length > j; j++ ){
            if( contents[i].bodyWeight > contents[j].bodyWeight ){
                a=contents[j];
                contents[j] = contents[i];
                contents[i] = a;
            }
        }
    }
    $('.main--rank__L1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
    $('.main--rank__L2').append('<img src="'+ contents[1].img.url +'"><p>'+ contents[1].name +'</p><p>'+ contents[1].bodyWeight +'</p>');
    $('.main--rank__L3').append('<img src="'+ contents[2].img.url +'"><p>'+ contents[2].name +'</p><p>'+ contents[2].bodyWeight +'</p>');

});
}