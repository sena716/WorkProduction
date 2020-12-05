<!-- https://microcms.io/blog/microcms-nuxt-jamstack-blog -->

<template>
<div id="app">
 <section class="top">

        <p class="top--teamLogo">
            <img src="../static/images/teamLogo.svg" alt="チームロゴ">
        </p>

        <div class="top--main">
            <!-- animatedを使うとクラスの指定ができないためキーフレームで表現 -->
            <!-- <div class="animated bounceInDown slow"> -->
                <div class="top--main__title">
                <img src="../static/images/titleLogo_N.svg" alt="絶滅危惧種図鑑">
            </div>
            <div class="top--main__pageLink">
                <ul>
                    <li>
                        <a href="map">
                            <i class="fas fa-map-marked-alt"></i>
                            <p>地図から探す</p>
                        </a>
                    </li>
                    <li>
                        <a href="photo">
                            <i class="fas fa-camera"></i>
                            <p>写真から探す</p>
                        </a>
                    </li>
                    <li>
                        <a href="condition">
                            <i class="fas fa-search-plus"></i>
                            <p>条件から探す</p>
                        </a>
                    </li>
                    <li>
                        <a href="name">
                            <i class="fas fa-signature"></i>
                            <p>名前から探す</p>
                        </a>
                    </li>
                    <li>
                        <a href="ranking">
                            <i class="fas fa-crown"></i>
                            <p>ランキング</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="top--animal">
            <p class="top--animal__tori">
                <img id = "tori_eye_move" src="../static/images/tori.svg" alt="鳥">
            </p>
            <p class="top--animal__kuma">
                <img id="bear_hand"  src="../static/images/kuma_before.svg" alt="熊" onmouseover="mouseOn();" onmouseout="mouseOff();">
            </p>
            <p class="top--animal__minikuma">
                <img id="minibear_hand"  src="../static/images/kuma_before.svg" alt="子熊" onmouseover="mouseOn_minikuma();" onmouseout="mouseOff_minikuma();">
            </p>
            <p class="top--animal__rakko">
                <img id = "rakko_move" src="../static/images/rakko.svg" alt="ラッコ">
            </p>
            <p class="top--animal__koumori">
                <img id = "komori_move" src="../static/images/koumori.svg" alt="コウモリ">
            </p>
            <div class="top--animal__kame">
                <div class="css_work_farst">
                    <div class="css_work_last">
                        <img id = "kame_work" src="../static/images/kame_before.svg" alt="亀">
                    </div>
                </div>
            </div>
        </div>
        {{name()}}
    </section>
  </div>
</template>

<style lang="scss"scoped>
@import"~assets/css/index/style.scss";
</style>

<script>

export default {
   methods: {
       name() {
           console.log('繋げました');

            // function mouseOn(){
            //     var obj = document.getElementById("bear_hand");
            //     obj.src = "../static/images/kuma_after.svg";
            // }

            // // マウスアウト時の処理
            // function mouseOff(){
            //     var obj = document.getElementById("bear_hand");
            //     obj.src = "../static/images/kuma_before.svg";
            // }

            // // マウスオーバー時の処理
            // function mouseOn_minikuma(){
            //     var obj = document.getElementById("minibear_hand");
            //     obj.src = "../static/images/kuma_after.svg";

            // }

            // // マウスアウト時の処理
            // function mouseOff_minikuma(){
            //     var obj = document.getElementById("minibear_hand");
            //     obj.src = "../static/images/kuma_before.svg";
            // }

            // // ラッコ動作
            // var pics_rakko_src = new Array("common/images/rakko.svg","common/images/rakko_other.svg");
            // var num_b = -1;

            // slideshow_timer_rakko();

            // function slideshow_timer_rakko(){
            //     if (num_b == 1){
            //         num_b = 0;
            //     }
            //     else {
            //         num_b ++;
            //     }
            //     document.getElementById("rakko_move").src=pics_rakko_src[num_b];
            //     setTimeout("slideshow_timer_rakko()",600); 
            // }

            // // かめ歩き
            // var pics_kame_work_src = new Array("common/images/kame_before.svg","common/images/kame_after.svg");
            // var num_c = -1;

            // slideshow_timer_kame();

            // function slideshow_timer_kame(){
            //     if (num_c == 1){
            //         num_c = 0;
            //     }
            //     else {
            //         num_c ++;
            //     }
            //     document.getElementById("kame_work").src=pics_kame_work_src[num_c];
            //     setTimeout("slideshow_timer_kame()",500);
            // }

            // // 蝙蝠
            // var pics_koumori_src = new Array("common/images/koumori.svg","common/images/koumori_move_1.svg","common/images/koumori_move_2.svg");
            // var num_d = -1;

            // slideshow_timer_koumori();

            // function slideshow_timer_koumori(){
            //     if (num_d== 2){
            //         num_d = 0;
            //     }
            //     else {
            //         num_d ++;
            //     }
            //     document.getElementById("komori_move").src=pics_koumori_src[num_d];
            //     setTimeout("slideshow_timer_koumori()",200);
            // }

            // // 鳥の目
            // var pics_tori_src = new Array("../static/images/tori.svg","../static/images/tori_eye.svg");
            // var num_a = -1;

            // slideshow_timer_tori();

            // // function slideshow_timer_tori(){
            // // console.log(index.VALUE);
            // // }
        }
    }
}
</script>