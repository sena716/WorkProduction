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
        $('.main--rank__1').append('<img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p><p>'+ contents[i].bodyWeight +'</p>');
        $('.main--rank__2').append('<img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p><p>'+ contents[i].bodyWeight +'</p>');
        $('.main--rank__3').append('<img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p><p>'+ contents[i].bodyWeight +'</p>');
    });
}