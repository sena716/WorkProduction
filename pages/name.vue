<template>
  <div id="app">

    <div class="Toggle">
    　　<span></span>
    　　<span></span>
    　　<span></span>
    </div>


        

    <section class="header">

        <p class="header--titleLogo">
            <a href="../index.php"><img src="static/common/images/titlepcLogo.svg" alt="絶滅危惧種図鑑"></a>
        </p>

        <ul class="header--pageLink">
            <li><a href="static/map/map.html">地図から探す</a></li>
            <li><a href="static/photo/photo.html">写真から探す</a></li>
            <li><a href="static/conditions/conditions.html">条件から探す</a></li>
            <li><a href="name.html">名前から探す</a></li>
            <li><a href="static/ranking/ranking.html">ランキング</a></li>
        </ul>

    </section>
    
    <section class="main">
        <div class="main__select">
            <h1 class="lineSelect">名前から探す</h1>
            <h1 class="lineSearch">検索する</h1>
        </div>
        
        <div class="main__line active">
            <ul class="main__line--select">
                <li><button onclick="nameSearchA();">あ行</button></li>
                <li><button onclick="nameSearchKa();">か行</button></li>
                <li><button onclick="nameSearchSa();">さ行</button></li>
                <li><button onclick="nameSearchTa();">た行</button></li>
                <li><button onclick="nameSearchNa();">な行</button></li>
                <li><button onclick="nameSearchHa();">は行</button></li>
                <li><button onclick="nameSearchMa();">ま行</button></li>
                <li><button onclick="nameSearchYa();">や行</button></li>
                <li><button onclick="nameSearchRa();">ら行</button></li>
                <li><button onclick="nameSearchWa();">わ行</button></li>
            </ul>
    
            <div class="main__line--name">
                <ul>
                    <li><a href="">アイアイ</a></li>
                    <li><a href="">アオダイショウ</a></li>
                    <li><a href="">アカアシガメ</a></li>
                    <li><a href="">アカカンガルー</a></li>
                    <li><a href="">アカクビワラビー</a></li>
                </ul>
            </div>
        </div>

        <div class="main__search">
            <input type="text">
            <input type="button" value="検索">
        </div>

    </section>

  </div>
</template>

<script>

import axios from 'axios'
export default {
  data: function() {
    return {
    }
  },
  methods: {
  }
}
</script>
