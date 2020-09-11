//マウスオーバー時の処理
function mouseOn(){
    var obj = document.getElementById("bear_hand");
    obj.src = "common/images/kuma_before.svg";
}

//マウスアウト時の処理
function mouseOff(){
    var obj = document.getElementById("bear_hand");
    obj.src = "common/images/kuma_after.svg";
}
//マウスオーバー時の処理
function mouseOn_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "common/images/kuma_before.svg";
}

//マウスアウト時の処理
function mouseOff_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "common/images/kuma_after.svg";
}

//鳥の目
var pics_tori_src = new Array("common/images/tori.svg","common/images/tori_eye.svg");
var num = -1; 

slideshow_timer_tori();

function slideshow_timer_tori(){
    if (num == 1){ 
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("tori_eye_move").src=pics_tori_src[num];
    setTimeout("slideshow_timer_tori()",500); 
}

// //ラッコ動作
// var pics_rakko_src = new Array("common/images/rakko.svg","common/images/kuma_before.svg");
// var num = -1; 

// slideshow_timer_rakko();

// function slideshow_timer_rakko(){
//     if (num == 1){ 
//         num = 0;
//     }
//     else {
//         num ++;
//     }
//     document.getElementById("rakko_move").src=pics_rakko_src[num];
//     setTimeout("slideshow_timer_rakko()",2000); 
// }

// かめ歩き
var pics_kame_work_src = new Array("common/images/kame_before.svg","common/images/kame_after.svg");
var num = -1; 

slideshow_timer_kame();

function slideshow_timer_kame(){
    if (num == 1){ 
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("kame_work").src=pics_kame_work_src[num];
    setTimeout("slideshow_timer_kame()",300); 
}

// }
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
  
