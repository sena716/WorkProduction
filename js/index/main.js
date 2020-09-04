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

img = new Array("common/images/rakko.svg","common/images/kuma_before.svg");
count = -1;
ingTimer();

function imgTimer(){
    count++;
    if(count == img.length) count = 0;
    document.rakko_.src = img[count];
    serTimeout("imgTimer()",1000);
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
  
