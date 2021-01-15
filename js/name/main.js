// CMS接続

function InitialSearch(){    
}
function nameSearch (Initial){
    
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30&fields=id,name,img", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {
        contents = json.contents;
        
        var str = [];
        for(let i  = 0;i <contents.length;i++){
            // InitialSearch();
            // 動物の名前をstrに代入
            str.push(contents[i].name);
            
        }
        // 名前順に並び替え
        str.sort(function (a, b) {
           if(a<b) return -1;
            if(b>a) return 1;
            return 0;
        });
        // for(let i  = 0;i <str.length;i++){
        //     console.log(str.length);
            // //カタカナをひらがなに変更
            // var str = Initial;
            // hiraToKana(str); //アイウ
            // console.log(str);
            // function hiraToKana(str) {
            //     return str.replace(/[\u3041-\u3096]/g, function(match) {
            //         var chr = match.charCodeAt(0) + 0x60;
            //         return String.fromCharCode(chr);
            //     });
            // }
            let i = 0;
            var a = str[i].slice(0,1);
            if(Initial== a ){
                // console.log(a);
            } else if( Initial === "あ" ) 
            {
                //あいうえおのものだけを抽出
                // if (str[i].match(/^ア|^イ|^ウ|^エ|^オ/)) 
                // {                    
                    for(let i  = 0;i <str.length;i++){
                        
                        for( let j = 0;j<contents.length;j++)
                        {                           
                            if(contents[j].name == str[i] )
                            {
                                if (str[i].match(/^ア/))
                                {
                                    $('.main__line--name').empty();
                                    // $('.main__each').empty();
                                    
                                    $('.main').append('<ul class="main__each"></ul>');
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p>'+ contents[j].name +'</p></li>');    
                                    console.log(contents[j].name);
                                    console.log(str[i]);
                                    console.log('aaaa');
                                }
                                if (str[i].match(/^イ|^ウ|^エ|^オ/))
                                {
                                    $('.main__line--name').empty();
                                    // $('.main__each').empty();
                                    
                                    $('.main').append('<ul class="main__line--name"></ul>');
                                    $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p>'+ contents[j].name +'</p></li>');    
                                    console.log(contents[j].name);
                                    console.log(str[i]);
                                    console.log('aaaa');
                                }
                            }
                        }
                    };                    
                // }
            // } 
            // else if( Initial === "か" ) 
            // {
            //     //あいうえおのものだけを抽出
            //     if (str[i].match(/^カ|^キ|^ク|^ケ|^コ/)) 
            //     {                    
            //         for(let i  = 0;i <str.length;i++){
                        
            //             for( let j = 0;j<contents.length;j++)
            //             {                           
            //                 if(contents[j].name == str[i] )
            //                 {
            //                     if (str[i].match(/^カ|^キ|^ク|^ケ|^コ/))
            //                     {
            //                         $('.main__line--name').empty();
                
            //                         $('.main').append('<ul class="main__each"></ul>');
            //                         $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p>'+ contents[j].name +'</p></li>');     

            //                     }
            //                 }
            //             }
            //         };                    
            //     }
            // }
        };

        // $('.main__line--name').empty();
        // $('.main').append('<ul class="main__each"></ul>');

        // //strのidとcontentsのidを照合

        // for(let i  = 0;i <str.length;i++){
            
        //     for( let j = 0;j<contents.length;j++){
                
        //         if(contents[j].name == str[i] ){
        //             $('.main__each').append('<li><img src="'+ contents[j].img.url +'"><p>'+ contents[j].name +'</p></li>');    
        //         }
        //     }
        // };
        
        // for( let i = 0; contents.length > i; i++ ){
        //     for( let j = 0; checkI.length > j; j++ ){
        //         if( contents[i].name == checkI[j] ){
       
        //         }
        //     }
        // }

      
    });
}