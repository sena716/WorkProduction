window.onload=function(){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    }

    // $('.main--rank__S1').style.backgroundImage = contents[0].img.url;
    $('.main--rank__S1-img').attr('src', contents[0].img.url);
    $('.main--rank__S1-info').append('<p>' + contents[0].name + '</p><p>'+ contents[0].bodyWeight +'</p>');
    console.log( $('.main--rank__S1'));

    $('.main--rank__S2-img').attr('src', contents[1].img.url);
    $('.main--rank__S2-info').append('<p>' + contents[1].name + '</p><p>'+ contents[1].bodyWeight +'</p>');
    console.log( $('.main--rank__S2'));

    $('.main--rank__S3-img').attr('src', contents[2].img.url);
    $('.main--rank__S3-info').append('<p>' + contents[2].name + '</p><p>'+ contents[2].bodyWeight +'</p>');
    console.log( $('.main--rank__S3'));
    // $('.main--rank__S1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
    // $('.main--rank__S2').append('<img src="'+ contents[1].img.url +'"><p class="comment">'+ contents[1].name +'</p><p class="comment">'+ contents[1].bodyWeight +'</p>');
    // $('.main--rank__S3').append('<img src="'+ contents[2].img.url +'"><p class="comment">'+ contents[2].name +'</p><p class="comment">'+ contents[2].bodyWeight +'</p>');
    })
    .then(res => res.json())
    .then(json => {
        contents = json.contents;
        let a;


        //先頭の一文字しか参照していない

        for( let i = 0; contents.length > i; i++ ){
            for( let j = 0; contents.length > j; j++ ){
                if( contents[i].bodyLength < contents[j].bodyLength )
                {
                    a=contents[i];
                    contents[i] = contents[j];
                    contents[j] = a;

                }
            }
        }
        for( let i = 0; contents.length > i; i++ ){
            // if(contents[i].bodyLength.match(/[0-9]d{0,4}\/[a-z]+/i)){

                console.log(contents[i].bodyLength);
            // }
            }
        // const data = '[12.1,55-3,23～1]';
        // const res = data.replace(/[^0-9.]/g, '');

        // console.log(res); // 123

        // console.log(contents);

        // $('.main--rank__S1').style.backgroundImage = contents[0].img.url;
        $('.main--rank__S1-img').attr('src', contents[0].img.url);
        $('.main--rank__S1-info').append('<p>' + contents[0].name + '</p><p>'+ contents[0].bodyLength +'</p>');
        console.log( $('.main--rank__S1'));

        $('.main--rank__S2-img').attr('src', contents[1].img.url);
        $('.main--rank__S2-info').append('<p>' + contents[1].name + '</p><p>'+ contents[1].bodyLength +'</p>');
        console.log( $('.main--rank__S2'));

        $('.main--rank__S3-img').attr('src', contents[2].img.url);
        $('.main--rank__S3-info').append('<p>' + contents[2].name + '</p><p>'+ contents[2].bodyLength +'</p>');
        console.log( $('.main--rank__S3'));

        // $('.main--rank__S1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
        // $('.main--rank__S2').append('<img src="'+ contents[1].img.url +'"><p class="comment">'+ contents[1].name +'</p><p class="comment">'+ contents[1].bodyWeight +'</p>');
        // $('.main--rank__S3').append('<img src="'+ contents[2].img.url +'"><p class="comment">'+ contents[2].name +'</p><p class="comment">'+ contents[2].bodyWeight +'</p>');

        for( let i = 0; contents.length > i; i++ ){
            for( let j = 0; contents.length > j; j++ ){
                if( contents[i].bodyLength > contents[j].bodyLength ){
                    a=contents[j];
                    contents[j] = contents[i];
                    contents[i] = a;
                    // console.log(contents[j].bodyLength.length);
                }
            }
        }




        $('.main--rank__L1-img').attr('src', contents[0].img.url);
        $('.main--rank__L1-info').append('<p>' + contents[0].name + '</p><p>'+ contents[0].bodyLength +'</p>');
        console.log( $('.main--rank__L1'));

        $('.main--rank__L2-img').attr('src', contents[1].img.url);
        $('.main--rank__L2-info').append('<p>' + contents[1].name + '</p><p>'+ contents[1].bodyLength +'</p>');
        console.log( $('.main--rank__L2'));

        $('.main--rank__L3-img').attr('src', contents[2].img.url);
        $('.main--rank__L3-info').append('<p>' + contents[2].name + '</p><p>'+ contents[2].bodyLength +'</p>');
        console.log( $('.main--rank__L3'));

        // $('.main--rank__L1').append('<img src="'+ contents[0].img.url +'"><p>'+ contents[0].name +'</p><p>'+ contents[0].bodyWeight +'</p>');
        // $('.main--rank__L2').append('<img src="'+ contents[1].img.url +'"><p>'+ contents[1].name +'</p><p>'+ contents[1].bodyWeight +'</p>');
        // $('.main--rank__L3').append('<img src="'+ contents[2].img.url +'"><p>'+ contents[2].name +'</p><p>'+ contents[2].bodyWeight +'</p>');

    });
    }