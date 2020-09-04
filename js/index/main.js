//マウスオーバー時の処理
function mouseOn(){
    var obj = document.getElementById("bear_hand");
    obj.src = "../../common/images/kuma_before.svg";
}

//マウスアウト時の処理
function mouseOff(){
    var obj = document.getElementById("bear_hand");
    obj.src = "../../common/images/kuma_after.svg";
}
//マウスオーバー時の処理
function mouseOn_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "../../common/images/kuma_before.svg";
}

//マウスアウト時の処理
function mouseOff_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "../../common/images/kuma_after.svg";
}

var pics_src = new Array("common/images/rakko.svg","common/images/kuma_before.svg");
var num = -1; 

slideshow_timer();

function slideshow_timer(){
    if (num == 2){ 
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("rakko_move").src=pics_src[num];
    setTimeout("slideshow_timer()",200); 
}

// //マウスオーバー時の処理
// function mouseOn_mini(){
//     var obj = document.getElementById("mini_bear_hand");
//     obj.src = "../../common/images/before.svg";
// }

// //マウスアウト時の処理
// function mouseOff_mini(){
//     var obj = document.getElementById("mini_bear_hand");
//     obj.src = "../../common/images/after.svg";
// }
  
