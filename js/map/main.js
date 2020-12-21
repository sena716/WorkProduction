// cookie削除
$.removeCookie('cookieDate');
$.cookie("cookieDate", null );
console.log( $.cookie("cookieDate") );

let checkInspection;
let checkI = [];
let contents;

// // 日本地図
// // https://rmtmhome.com/html5-canvas-japanmap-custom5-451
// $(function(){
//     var areaLinks = {
//         1:"https://github.com/takemaru-hirai/japan-map",
//         2:"https://github.com/takemaru-hirai/japan-map",
//         3:"https://github.com/takemaru-hirai/japan-map",
//         4:"https://github.com/takemaru-hirai/japan-map",
//         5:"https://github.com/takemaru-hirai/japan-map",
//         6:"https://github.com/takemaru-hirai/japan-map",
//         7:"https://github.com/takemaru-hirai/japan-map",
//         8:"https://github.com/takemaru-hirai/japan-map",
//         9:"https://github.com/takemaru-hirai/japan-map",
//         10:"https://github.com/takemaru-hirai/japan-map",
//         11:"https://github.com/takemaru-hirai/japan-map",
//         12:"https://github.com/takemaru-hirai/japan-map",
//         13:"https://github.com/takemaru-hirai/japan-map",
//         14:"https://github.com/takemaru-hirai/japan-map",
//         15:"https://github.com/takemaru-hirai/japan-map",
//         16:"https://github.com/takemaru-hirai/japan-map",
//         17:"https://github.com/takemaru-hirai/japan-map",
//         18:"https://github.com/takemaru-hirai/japan-map",
//         19:"https://github.com/takemaru-hirai/japan-map",
//         20:"https://github.com/takemaru-hirai/japan-map",
//         21:"https://github.com/takemaru-hirai/japan-map",
//         22:"https://github.com/takemaru-hirai/japan-map",
//         23:"https://github.com/takemaru-hirai/japan-map",
//         24:"https://github.com/takemaru-hirai/japan-map",
//         25:"https://github.com/takemaru-hirai/japan-map",
//         26:"https://github.com/takemaru-hirai/japan-map",
//         27:"https://github.com/takemaru-hirai/japan-map",
//         28:"https://github.com/takemaru-hirai/japan-map",
//         29:"https://github.com/takemaru-hirai/japan-map",
//         30:"https://github.com/takemaru-hirai/japan-map",
//         31:"https://github.com/takemaru-hirai/japan-map",
//         32:"https://github.com/takemaru-hirai/japan-map",
//         33:"https://github.com/takemaru-hirai/japan-map",
//         34:"https://github.com/takemaru-hirai/japan-map",
//         35:"https://github.com/takemaru-hirai/japan-map",
//         36:"https://github.com/takemaru-hirai/japan-map",
//         37:"https://github.com/takemaru-hirai/japan-map",
//         38:"https://github.com/takemaru-hirai/japan-map",
//         39:"https://github.com/takemaru-hirai/japan-map",
//         40:"https://github.com/takemaru-hirai/japan-map",
//         41:"https://github.com/takemaru-hirai/japan-map",
//         42:"https://github.com/takemaru-hirai/japan-map",
//         43:"https://github.com/takemaru-hirai/japan-map",
//         44:"https://github.com/takemaru-hirai/japan-map",
//         45:"https://github.com/takemaru-hirai/japan-map",
//         46:"https://github.com/takemaru-hirai/japan-map",
//         47:"https://github.com/takemaru-hirai/japan-map"
//     };

//     var areas = [
//         {code : 1, name: "北海道", color: "#7f7eda", hoverColor: "#b3b2ee", prefectures: [1]},
//         {code : 2, name: "青森", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [2]},
//         {code : 3, name: "岩手", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [3]},
//         {code : 4, name: "宮城", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [4]},
//         {code : 5, name: "秋田", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [5]},
//         {code : 6, name: "山形", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [6]},
//         {code : 7, name: "福島",   color: "#759ef4", hoverColor: "#98b9ff", prefectures: [7]},
//         {code : 8, name: "茨城",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [8]},
//         {code : 9, name: "栃木",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [9]},
//         {code : 10, name: "群馬",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [10]},
//         {code : 11, name: "埼玉",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [11]},
//         {code : 12, name: "千葉",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [12]},
//         {code : 13, name: "東京",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [13]},
//         {code : 14, name: "神奈川",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [14]},
//         {code : 15, name: "新潟",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [15]},
//         {code : 16, name: "富山",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [16]},
//         {code : 17, name: "石川",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [17]},
//         {code : 18, name: "福井",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [18]},
//         {code : 19, name: "山梨",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [19]},
//         {code : 20, name: "長野",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [20]},
//         {code : 21, name: "岐阜",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [21]},
//         {code : 22, name: "静岡",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [22]},
//         {code : 23, name: "愛知",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [23]},
//         {code : 24, name: "三重",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [24]},
//         {code : 25, name: "滋賀",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [25]},
//         {code : 26, name: "京都",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [26]},
//         {code : 27, name: "大阪",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [27]},
//         {code : 28, name: "兵庫",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [28]},
//         {code : 29, name: "奈良",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [29]},
//         {code : 30, name: "和歌山",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [30]},
//         {code : 31, name: "鳥取",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [31]},
//         {code : 32, name: "島根",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [32]},
//         {code : 33, name: "岡山",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [33]},
//         {code : 34, name: "広島",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [34]},
//         {code : 35, name: "山口",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [35]},
//         {code : 36, name: "徳島",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [36]},
//         {code : 37, name: "香川",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [37]},
//         {code : 38, name: "愛媛",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [38]},
//         {code : 39, name: "高知",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [39]},
//         {code : 40, name: "福岡",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [40]},
//         {code : 41, name: "佐賀",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [41]},
//         {code : 42, name: "長崎",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [42]},
//         {code : 43, name: "熊本",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [43]},
//         {code : 44, name: "大分",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [44]},
//         {code : 45, name: "宮崎",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [45]},
//         {code : 46, name: "鹿児島",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [46]},
//         {code : 47, name: "沖縄",   color: "#eb98ff", hoverColor: "#f5c9ff", prefectures: [47]},
//     ];

//     $("#map-container").japanMap({
//         width: 880,
//         selection: "area",
//         areas: areas,
//         borderLineWidth : 0.25,
//         lineColor : "#EEEEEE",
//         lineWidth: 1,
//         drawsBoxLine: true,
//         showsPrefectureName: true,
//         prefectureNameType: "short",
//         movesIslands : true,
//         fontSize : 11,
//         fontShadowColor : "#fff",
//         // クリックされたら
//         onSelect : function(data){
//             location.href = areaLinks[data.area.code];
//         }
//     });
// });


// // -1-1-1
// // -東西-地方-県

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

// mapSelect選択情報取得
function mapDateSelect(click_class){
    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
        headers: {
            "X-API-KEY": "c2aa018e-aeb0-43c6-b6c2-e2bc343ab15e"
        }
    })
    .then(res => res.json())
    .then(json => {

        contents = json.contents;

        let cookie_date;

        $('.main').empty();
        $('.main').append('<h1>検索結果</h1>');
        $('.main').append('<ul class="main__each"></ul>');
        for( let i = 0; contents.length > i; i++ ){
            if( contents[i].prefectureen == click_class.className ){
                // $('.main__each').append('<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>');
                cookie_date += '<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>';
            }
        }

        $.cookie('cookieDate', cookie_date,{path: '/' });
    });
}

// mapCheckbox選択情報取得
function mapDateCheckbox(){
    checkInspection = $('input[type="checkbox"]');
    checkI = [];

    for( let i = 0; i < checkInspection.length; i++ ){
        if( checkInspection[i].checked ){
            checkI.push(checkInspection[i].id);
        }
    }

    // CMS接続
    fetch("https://workproduction.microcms.io/api/v1/date?limit=30", {
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
            for( let j = 0; checkI.length > j; j++ ){
                console.log( checkI[j] );
                if( contents[i].prefectureen == checkI[j] ){
                    $('.main__each').append('<li><img src="'+ contents[i].img.url +'"><p>'+ contents[i].name +'</p></li>');
                }
            }
        }
    });
}

$(function(){
    //地域を選択
    $('.area_btn').click(function(){
        $('.area_overlay').show();
        $('.pref_area').show();
        var area = $(this).data('area');
        $('[data-list]').hide();
        $('[data-list="' + area + '"]').show();
    });

    //レイヤーをタップ
    $('.area_overlay').click(function(){
        prefReset();
    });

    //都道府県をクリック
    $('.pref_list [data-id]').click(function(){
        if($(this).data('id')){
            var id = $(this).data('id');
            //このidを使用して行いたい操作をしてください
            //都道府県IDに応じて別ページに飛ばしたい場合はこんな風に書く↓
            //window.location.href = 'https://kinocolog.com/pref/' + id;

            prefReset();
        }
    });

    //表示リセット
    function prefReset(){
        $('[data-list]').hide();
        $('.pref_area').hide();
        $('.area_overlay').hide();
    }
});


$('.link').click(function(){
    let ma = "1ma";
    location.href = '../sm.js' + encodeURIComponent(ma);
});


// cookie
// $.removeCookie("key");
// $.cookie('key', 'abc',{expires:7, path: '/' });
// console.log( $.cookie("key") );