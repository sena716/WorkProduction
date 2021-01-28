$(function(){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=100", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        let animalName = sessionStorage.getItem('thisAnimalInfo');
        let animalInfo = sessionStorage.getItem('animalInfo');
        contents = json.contents;

        for( let i = 0; contents.length > i; i++ ){
            if( contents[i].name == animalName ){

                let bodyWeight = contents[i].bodyWeight.replace(/[^0-9.]/g, '');
                let bodyLength = contents[i].bodyLength.replace(/[^0-9.]/g, '');
                // 重さが1kg未満の場合gで表記
                if( bodyWeight < 1 ){
                    bodyWeight *= 1000;
                    $('.bodyWeight').append(bodyWeight + "g");
                } else {
                    $('.bodyWeight').append(contents[i].bodyWeight);
                }

                // 全長が100cm以上の場合mで表記
                if( bodyLength >= 100 ){
                    bodyLength *= 0.01;
                    $('.bodyLength').append(bodyLength + "m");
                } else {
                    $('.bodyLength').append(contents[i].bodyLength);
                }
                $('.name').append(contents[i].name);
                $('.img').attr('src', contents[i].img.url );
                $('.prefecturejp').append(contents[i].prefecturejp);
                $('.type').append(contents[i].type);
                $('.population > img').attr('src', contents[i].population.url );
                $('.animalInfo').append(contents[i].animalInfo);
            }
        }

        sessionStorage.setItem('animalInfo', animalInfo);
    });
});