// -1-1-1
// -東西-地方-県

// 東日本
// 東日本 click イベント

function eastAllCheck(){
    if( $('input[name="map-1"]').prop('checked')){
        $('input[name="map-1-1"]').prop('checked', true );    
        $('input[name="map-1-1-1"]').prop('checked', true );    
        $('input[name="map-1-2"]').prop('checked', true );    
        $('input[name="map-1-2-1"]').prop('checked', true );    
        $('input[name="map-1-2-2"]').prop('checked', true );    
        $('input[name="map-1-2-3"]').prop('checked', true );    
        $('input[name="map-1-2-4"]').prop('checked', true );    
        $('input[name="map-1-2-5"]').prop('checked', true );    
        $('input[name="map-1-2-6"]').prop('checked', true );    
        $('input[name="map-1-3"]').prop('checked', true );    
        $('input[name="map-1-3-1"]').prop('checked', true );    
        $('input[name="map-1-3-2"]').prop('checked', true );    
        $('input[name="map-1-3-3"]').prop('checked', true );    
        $('input[name="map-1-3-4"]').prop('checked', true );    
        $('input[name="map-1-3-5"]').prop('checked', true );    
        $('input[name="map-1-3-6"]').prop('checked', true );    
        $('input[name="map-1-4"]').prop('checked', true );    
        $('input[name="map-1-4-1"]').prop('checked', true );    
        $('input[name="map-1-4-2"]').prop('checked', true );    
        $('input[name="map-1-4-3"]').prop('checked', true );    
        $('input[name="map-1-4-4"]').prop('checked', true );    
        $('input[name="map-1-4-5"]').prop('checked', true );    
        $('input[name="map-1-4-6"]').prop('checked', true );    
        $('input[name="map-1-4-7"]').prop('checked', true );    
        $('input[name="map-1-4-8"]').prop('checked', true );    
        $('input[name="map-1-4-9"]').prop('checked', true );    
    } else {
        $('input[name="map-1-1"]').prop('checked', false );    
        $('input[name="map-1-1-1"]').prop('checked', false );    
        $('input[name="map-1-2"]').prop('checked', false );    
        $('input[name="map-1-2-1"]').prop('checked', false );    
        $('input[name="map-1-2-2"]').prop('checked', false );    
        $('input[name="map-1-2-3"]').prop('checked', false );    
        $('input[name="map-1-2-4"]').prop('checked', false );    
        $('input[name="map-1-2-5"]').prop('checked', false );    
        $('input[name="map-1-2-6"]').prop('checked', false );    
        $('input[name="map-1-3"]').prop('checked', false );    
        $('input[name="map-1-3-1"]').prop('checked', false );    
        $('input[name="map-1-3-2"]').prop('checked', false );    
        $('input[name="map-1-3-3"]').prop('checked', false );    
        $('input[name="map-1-3-4"]').prop('checked', false );    
        $('input[name="map-1-3-5"]').prop('checked', false );    
        $('input[name="map-1-3-6"]').prop('checked', false );    
        $('input[name="map-1-4"]').prop('checked', false );    
        $('input[name="map-1-4-1"]').prop('checked', false );    
        $('input[name="map-1-4-2"]').prop('checked', false );    
        $('input[name="map-1-4-3"]').prop('checked', false );    
        $('input[name="map-1-4-4"]').prop('checked', false );    
        $('input[name="map-1-4-5"]').prop('checked', false );    
        $('input[name="map-1-4-6"]').prop('checked', false );    
        $('input[name="map-1-4-7"]').prop('checked', false );    
        $('input[name="map-1-4-8"]').prop('checked', false );    
        $('input[name="map-1-4-9"]').prop('checked', false );    
    }
}

// 北海道地方 click イベント
function hokkaidouAllCheck(){
    if( $('input[name="map-1-1"]').prop('checked')){
        $('input[name="map-1-1-1"]').prop('checked', true );    
    } else {
        $('[name="map-1-1-1"]').prop('checked', false );
    }
}

// 東北地方　click イベント
function touhokuAllCheck(){
    if( $('input[name="map-1-2"]').prop('checked')){
        $('input[name="map-1-2-1"]').prop('checked', true );    
        $('input[name="map-1-2-2"]').prop('checked', true );    
        $('input[name="map-1-2-3"]').prop('checked', true );    
        $('input[name="map-1-2-4"]').prop('checked', true );    
        $('input[name="map-1-2-5"]').prop('checked', true );    
        $('input[name="map-1-2-6"]').prop('checked', true );    
    } else {
        $('[name="map-1-2-1"]').prop('checked', false );
        $('[name="map-1-2-2"]').prop('checked', false );
        $('[name="map-1-2-3"]').prop('checked', false );
        $('[name="map-1-2-4"]').prop('checked', false );
        $('[name="map-1-2-5"]').prop('checked', false );
        $('[name="map-1-2-6"]').prop('checked', false );
    }  
}

// 関東 click イベント
function kantouAllCheck(){
    if( $('input[name="map-1-3"]').prop('checked')){
        $('input[name="map-1-3-1"]').prop('checked', true );    
        $('input[name="map-1-3-2"]').prop('checked', true );    
        $('input[name="map-1-3-3"]').prop('checked', true );    
        $('input[name="map-1-3-4"]').prop('checked', true );    
        $('input[name="map-1-3-5"]').prop('checked', true );    
        $('input[name="map-1-3-6"]').prop('checked', true );    
    } else {
        $('[name="map-1-3-1"]').prop('checked', false );
        $('[name="map-1-3-2"]').prop('checked', false );
        $('[name="map-1-3-3"]').prop('checked', false );
        $('[name="map-1-3-4"]').prop('checked', false );
        $('[name="map-1-3-5"]').prop('checked', false );
        $('[name="map-1-3-6"]').prop('checked', false );
    }  
}

// 中部 click イベント
function tyubuAllCheck(){
    if( $('input[name="map-1-4"]').prop('checked')){
        $('input[name="map-1-4-1"]').prop('checked', true );    
        $('input[name="map-1-4-2"]').prop('checked', true );    
        $('input[name="map-1-4-3"]').prop('checked', true );    
        $('input[name="map-1-4-4"]').prop('checked', true );    
        $('input[name="map-1-4-5"]').prop('checked', true );    
        $('input[name="map-1-4-6"]').prop('checked', true );    
        $('input[name="map-1-4-7"]').prop('checked', true );    
        $('input[name="map-1-4-8"]').prop('checked', true );    
        $('input[name="map-1-4-9"]').prop('checked', true );    
    } else {
        $('[name="map-1-4-1"]').prop('checked', false );
        $('[name="map-1-4-2"]').prop('checked', false );
        $('[name="map-1-4-3"]').prop('checked', false );
        $('[name="map-1-4-4"]').prop('checked', false );
        $('[name="map-1-4-5"]').prop('checked', false );
        $('[name="map-1-4-6"]').prop('checked', false );
        $('[name="map-1-4-7"]').prop('checked', false );
        $('[name="map-1-4-8"]').prop('checked', false );
        $('[name="map-1-4-9"]').prop('checked', false );
    }  
}

// 西日本
// 西日本 click イベント
function wastAllCheck(){
    if( $('input[name="map-2"]').prop('checked')){
        $('input[name="map-2-1"]').prop('checked', true );    
        $('input[name="map-2-1-1"]').prop('checked', true );    
        $('input[name="map-2-1-2"]').prop('checked', true );    
        $('input[name="map-2-1-3"]').prop('checked', true );    
        $('input[name="map-2-1-4"]').prop('checked', true );    
        $('input[name="map-2-1-5"]').prop('checked', true );    
        $('input[name="map-2-1-6"]').prop('checked', true );    
        $('input[name="map-2-1-7"]').prop('checked', true );    
        $('input[name="map-2-2"]').prop('checked', true );    
        $('input[name="map-2-2-1"]').prop('checked', true );    
        $('input[name="map-2-2-2"]').prop('checked', true );    
        $('input[name="map-2-2-3"]').prop('checked', true );    
        $('input[name="map-2-2-4"]').prop('checked', true );    
        $('input[name="map-2-2-5"]').prop('checked', true );    
        $('input[name="map-2-3"]').prop('checked', true ); 
        $('input[name="map-2-3-1"]').prop('checked', true );    
        $('input[name="map-2-3-2"]').prop('checked', true );    
        $('input[name="map-2-3-3"]').prop('checked', true );    
        $('input[name="map-2-3-4"]').prop('checked', true );    
        $('input[name="map-2-4"]').prop('checked', true );    
        $('input[name="map-2-4-1"]').prop('checked', true );    
        $('input[name="map-2-4-2"]').prop('checked', true );    
        $('input[name="map-2-4-3"]').prop('checked', true );    
        $('input[name="map-2-4-4"]').prop('checked', true );    
        $('input[name="map-2-4-5"]').prop('checked', true );    
        $('input[name="map-2-4-6"]').prop('checked', true );    
        $('input[name="map-2-4-7"]').prop('checked', true );
    } else {
        $('input[name="map-2-1"]').prop('checked', false );    
        $('input[name="map-2-1-1"]').prop('checked', false );    
        $('input[name="map-2-1-2"]').prop('checked', false );    
        $('input[name="map-2-1-3"]').prop('checked', false );    
        $('input[name="map-2-1-4"]').prop('checked', false );    
        $('input[name="map-2-1-5"]').prop('checked', false );    
        $('input[name="map-2-1-6"]').prop('checked', false );    
        $('input[name="map-2-1-7"]').prop('checked', false );    
        $('input[name="map-2-2"]').prop('checked', false );    
        $('input[name="map-2-2-1"]').prop('checked', false );    
        $('input[name="map-2-2-2"]').prop('checked', false );    
        $('input[name="map-2-2-3"]').prop('checked', false );    
        $('input[name="map-2-2-4"]').prop('checked', false );    
        $('input[name="map-2-2-5"]').prop('checked', false );    
        $('input[name="map-2-3"]').prop('checked', false ); 
        $('input[name="map-2-3-1"]').prop('checked', false );    
        $('input[name="map-2-3-2"]').prop('checked', false );    
        $('input[name="map-2-3-3"]').prop('checked', false );    
        $('input[name="map-2-3-4"]').prop('checked', false );    
        $('input[name="map-2-4"]').prop('checked', false );    
        $('input[name="map-2-4-1"]').prop('checked', false );    
        $('input[name="map-2-4-2"]').prop('checked', false );    
        $('input[name="map-2-4-3"]').prop('checked', false );    
        $('input[name="map-2-4-4"]').prop('checked', false );    
        $('input[name="map-2-4-5"]').prop('checked', false );    
        $('input[name="map-2-4-6"]').prop('checked', false );    
        $('input[name="map-2-4-7"]').prop('checked', false );
    }  
}

// 近畿地方　click イベント
function kinkiAllCheck(){
    if( $('input[name="map-2-1"]').prop('checked')){
        $('input[name="map-2-1-1"]').prop('checked', true );    
        $('input[name="map-2-1-2"]').prop('checked', true );    
        $('input[name="map-2-1-3"]').prop('checked', true );    
        $('input[name="map-2-1-4"]').prop('checked', true );    
        $('input[name="map-2-1-5"]').prop('checked', true );    
        $('input[name="map-2-1-6"]').prop('checked', true );    
        $('input[name="map-2-1-7"]').prop('checked', true );    
    } else {
        $('[name="map-2-1-1"]').prop('checked', false );
        $('[name="map-2-1-2"]').prop('checked', false );
        $('[name="map-2-1-3"]').prop('checked', false );
        $('[name="map-2-1-4"]').prop('checked', false );
        $('[name="map-2-1-5"]').prop('checked', false );
        $('[name="map-2-1-6"]').prop('checked', false );
        $('[name="map-2-1-7"]').prop('checked', false );
    }  
}

// 中国地方　click イベント
function tyugokuAllCheck(){
    if( $('input[name="map-2-2"]').prop('checked')){
        $('input[name="map-2-2-1"]').prop('checked', true );    
        $('input[name="map-2-2-2"]').prop('checked', true );    
        $('input[name="map-2-2-3"]').prop('checked', true );    
        $('input[name="map-2-2-4"]').prop('checked', true );    
        $('input[name="map-2-2-5"]').prop('checked', true );    
    } else {
        $('[name="map-2-2-1"]').prop('checked', false );
        $('[name="map-2-2-2"]').prop('checked', false );
        $('[name="map-2-2-3"]').prop('checked', false );
        $('[name="map-2-2-4"]').prop('checked', false );
        $('[name="map-2-2-5"]').prop('checked', false );
    }  
}

// 四国地方　click イベント
function shikokuAllCheck(){
    if( $('input[name="map-2-3"]').prop('checked')){
        $('input[name="map-2-3-1"]').prop('checked', true );    
        $('input[name="map-2-3-2"]').prop('checked', true );    
        $('input[name="map-2-3-3"]').prop('checked', true );    
        $('input[name="map-2-3-4"]').prop('checked', true );    
    } else {
        $('[name="map-2-3-1"]').prop('checked', false );
        $('[name="map-2-3-2"]').prop('checked', false );
        $('[name="map-2-3-3"]').prop('checked', false );
        $('[name="map-2-3-4"]').prop('checked', false );
    }  
}

// 九州地方　click イベント
function kyusyuAllCheck(){
    if( $('input[name="map-2-4"]').prop('checked')){
        $('input[name="map-2-4-1"]').prop('checked', true );    
        $('input[name="map-2-4-2"]').prop('checked', true );    
        $('input[name="map-2-4-3"]').prop('checked', true );    
        $('input[name="map-2-4-4"]').prop('checked', true );    
        $('input[name="map-2-4-5"]').prop('checked', true );    
        $('input[name="map-2-4-6"]').prop('checked', true );    
        $('input[name="map-2-4-7"]').prop('checked', true );    
    } else {
        $('[name="map-2-4-1"]').prop('checked', false );
        $('[name="map-2-4-2"]').prop('checked', false );
        $('[name="map-2-4-3"]').prop('checked', false );
        $('[name="map-2-4-4"]').prop('checked', false );
        $('[name="map-2-4-5"]').prop('checked', false );
        $('[name="map-2-4-6"]').prop('checked', false );
        $('[name="map-2-4-7"]').prop('checked', false );
    }  
}

// map選択情報取得
function mapDate(){
    
}

let vals = $('input[value=checkbox]');

let j = vals.length;
for( let i = 0; j > i; i++ ){
    console.log( vals[i].id );
}