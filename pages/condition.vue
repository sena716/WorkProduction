<template>
    <div id="app">
<div class="Toggle">
    　　<span></span>
    　　<span></span>
    　　<span></span>
    </div>

    <section class="header">

        <p class="header--titleLogo">
            <a href="index.vue"><img src="common/images/titlepcLogo.svg" alt="絶滅危惧種図鑑"></a>
        </p>

        <ul class="header--pageLink">
            <li><a href="map.vue">地図から探す</a></li>
            <li><a href="photo.vue">写真から探す</a></li>
            <li><a href="conditions.vue">条件から探す</a></li>
            <li><a href="name.vue">名前から探す</a></li>
            <li><a href="ranking.vue">ランキング</a></li>
        </ul>

    </section>    

    <section class="main">
        <h1>条件から探す</h1>

        <div class="main__type">
            <ul>
                <li>
                    <a href="">
                        <img src="common/images/conditions/kuma.svg" alt="">
                        <p>哺乳類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/hiyoko.svg" alt="">
                        <p>鳥類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/hebi.svg" alt="">
                        <p>爬虫類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/kaeru.svg" alt="">
                        <p>両生類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/sakana.svg" alt="">
                        <p>魚類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/tyoutyou.svg" alt="">
                        <p>昆虫</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/kai.svg" alt="">
                        <p>貝類</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="common/images/conditions/sonota.svg" alt="">
                        <p>その他</p>
                    </a>
                </li>
            </ul>
        </div>        
        <div class="length">

        </div>
        <div class="weight">

        </div>
    </section>
    </div>
</template>