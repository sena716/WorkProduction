// https://microcms.io/blog/microcms-nuxt-jamstack-blog

<template>
<div id="app">
<input v-model="keyword" placeholder="Search...">
<input type="button" value="検索"  v-on:click="updateList()">
  <ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
  <ul>
    <li v-for="item in items" :key="item.id">{{item.title}}</li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://samplearimura.microcms.io/api/v1/data',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-API-KEY': '8c148f4c-3a95-4d30-b3ba-72d534fc42e7' }
      }
    )
    // const { blog } = await axios.get(
    //   // your-service-id部分は自分のサービスidに置き換えてください
    //   'https://samplearimura.microcms.io/api/v1/blog',
    //   {
    //     // your-api-key部分は自分のapi-keyに置き換えてください
    //     headers: { 'X-API-KEY': '8c148f4c-3a95-4d30-b3ba-72d534fc42e7' }
    //   }
    // )
 
    let onakasuita = {};
    
    for( let i = 0; data.contents.length > i; i++ ){
      if( data.contents[i].IdentityDocument == 1 ){
        delete data.contents[i].IdentityDocument;
      }
    }
    
    return data
    // return blog
  
  },
  data: function() {
    return {
      items: [
          { title: '領収書を準備する', isChecked: true },
          { title: 'Vue.jsハンズオンの資料を作る', isChecked: true },
          { title: '参加者の人数を確認する', isChecked: false },
          { title: 'ピザを注文する', isChecked: false },
          { title: '参加費のお釣りを準備する', isChecked: false },
          { title: '会場設営をする', isChecked: false },
      ],
      keyword:'',      
      newItemTitle: '',
      prefecture: '',
    }
  },
  methods: {
    async updateList() {
      const { data } = await axios.get(
        // your-service-id部分は自分のサービスidに置き換えてください
        'https://samplearimura.microcms.io/api/v1/data?q='+this.keyword,  //?q=+ this.newItemTitle
        {
          // your-api-key部分は自分のapi-keyに置き換えてください
          headers: { 'X-API-KEY': '8c148f4c-3a95-4d30-b3ba-72d534fc42e7' }
        }
      )
        //  const { blog } = await axios.get(
        // // your-service-id部分は自分のサービスidに置き換えてください
        // 'https://samplearimura.microcms.io/api/v1/blog?q='+this.keyword,  //?q=+ this.newItemTitle
        // {
        //   // your-api-key部分は自分のapi-keyに置き換えてください
        //   headers: { 'X-API-KEY': '8c148f4c-3a95-4d30-b3ba-72d534fc42e7' }
        // }
        //  )
      
  
      let onakasuita = {};
      this.contents=data.contents
    }
  }
}
</script>