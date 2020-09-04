// micro cms 設定
fetch("https://cardezasample.microcms.io/api/v1/sample", {
headers: {
    "X-API-KEY": "0360e61a-c834-46ec-b5dd-2842c877d1e0"
}
})
.then(res => res.json())
.then(json => {
    document.getElementById("name").innerHTML = json.contents[0].name;
})



// -1-1-1
// -東西-地方-県

// 北海道地方 click イベント
function hokkaidouAllCheck(){
    if( $('input[name="map-1-1"]').prop('checked')){
        $('input[name="map-1-1-1"]').prop('checked', true );    
    } else {
        $('[name="map-1-1-1"]').prop('checked', false );
    }
}

// 