<template>
  <div class="porfolio_content container">
    <div class="row mb-5" v-for="(value, key) in mockBeerList" :key="key">
      <div class="col-md-6 text-center">
        <NuxtLink
          tag="img"
          :to="{ path: '/portfolio/' + value.product_id }"
          :src="value.image_url"
          class="porfolio_content_li_img"
        />
      </div>
      <div class="media-body col-md-6">
        <h1>{{ value.name }}</h1>
        <ul>
          <li>{{ value.product_id }}</li>
          <li>{{ value.size }}</li>
          <li>{{ value.updatedAt }}</li>
          <li>{{ value.slug }}</li>
          <li>{{ value.price }}</li>
          <li>{{ value.category }}</li>
          <li>{{ value.country }}</li>
          <li>{{ value.type }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route, params }) {
    let pData = await $axios.get("/api/portfolio");
    return {
      mockBeerList: pData.data,
    };
  },
  async fetch({ $axios, store }) {
    // 使用 fetch 更改 vuex 的 state
    await $axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => {
        store.commit("upDateSingle", ["allPost", res.data]);
      });
  },
  data() {
    return {
      titleApi: "這是 API 取得的資訊",
      mockBeerList: [],
      todos: [],
    };
  },
  head() {
    return {
      title: "啤酒小首頁",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "啤酒是世上歷史最悠久，普及範圍最廣的酒精飲料之一。大多數的啤酒廠家利用加入啤酒花的手段形成獨特苦味並起到防腐作用，但是品質好的啤酒花並不會苦、還會有甘醇的香味；另外，也有啤酒添加香草或水果等改變風味。",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "啤酒小首頁",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "啤酒是世上歷史最悠久，普及範圍最廣的酒精飲料之一。大多數的啤酒廠家利用加入啤酒花的手段形成獨特苦味並起到防腐作用，但是品質好的啤酒花並不會苦、還會有甘醇的香味；另外，也有啤酒添加香草或水果等改變風味。",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "/portfolio",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://agile-sands-07060.herokuapp.com/img/picture/og-image-202012211129.gif",
        },
        { hid: "og:type", property: "og:type", content: "website" },
      ],
    };
  },
};
</script>
<style>
.porfolio_content {
  margin: 20vh auto;
}
.porfolio_content ul {
  padding-left: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: 15px;
}
.porfolio_content_li_img {
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>