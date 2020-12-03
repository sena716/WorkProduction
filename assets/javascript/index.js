
export default {

 mounted(){
     //処理

// マウスオーバー時の処理


if (process,browser) {


elem.addEventListener("mouseover", function (event) {
// マウスオーバー時の処理
    var obj = document.getElementById("bear_hand");
    obj.src = "../static/images/kuma_after.svg";
}, false);

function mouseOn(){
    var obj = document.getElementById("bear_hand");
    obj.src = "../static/images/kuma_after.svg";
}


// マウスアウト時の処理
function mouseOff(){
    var obj = document.getElementById("bear_hand");
    obj.src = "../static/images/kuma_before.svg";
}
// マウスオーバー時の処理
function mouseOn_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "../static/images/kuma_after.svg";

}

// マウスアウト時の処理
function mouseOff_minikuma(){
    var obj = document.getElementById("minibear_hand");
    obj.src = "../static/images/kuma_before.svg";
}

// 鳥の目
var pics_tori_src = new Array("../static/images/tori.svg","../static/images/tori_eye.svg");
var num_a = -1; 

slideshow_timer_tori();

function slideshow_timer_tori(){
console.log(index.VALUE);
}
}
 }
}