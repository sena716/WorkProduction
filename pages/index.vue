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
    </section>
  </div>
</template>

<script src="../assets/javascript/index.js" type="text/javascript">
import axios from 'axios'
export default {
if (process,browser) {
}
 }
</script>

<style lang="scss"scoped>
@import"~assets/css/index/style.scss";
</style>
