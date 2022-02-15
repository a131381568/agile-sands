<template>
  <div class="container" placeholder="Loading...">
    <nuxt-link class="nav-link" to="/portfolio/137004"
      >連去單一portfolio(137004)</nuxt-link
    >
    <button @click="weChatHandler($event)">分享唯信</button>
    <!----------- <client-only>  client-only 只會在客戶端被渲染 ------------->
    <h1 class="mt-5 mb-5" style="font-weight: 900">藉由 Store 抓取資料</h1>
    <!----------- </client-only> ------------->
    <hr />
    <h2 class="test_h2 mt-2">原本的 TEST</h2>
    <hr />
    <h2 class="mt-2">Store - Number : {{ number }}</h2>
    <hr />
    <h2>{{ starsData }}</h2>
    <h3 v-html="testH3"></h3>
    <hr />
    <div class="list_a">
      <h4>List A</h4>
      <ul>
        <li v-for="(value, key) in listA" :key="key">
          {{ value.title }}
        </li>
      </ul>
    </div>
    <hr />
    <div class="list_b">
      <h4>List B</h4>
      <ul>
        <li v-for="(value, key) in listB" :key="key">
          {{ value.product_id }}
        </li>
      </ul>
    </div>
    <hr />
    <div class="list_c">登入狀態: {{ listC.message }}</div>
    <hr />
    <div class="row mt-5">
      <div class="links col-md-12" v-if="allPost.length > 0">
        <h4>Store 文章</h4>
        <div
          v-for="post in allPost"
          :key="post.id"
          class="button--grey col-md-2"
          style="padding: 10px"
        >
          {{ post.title }}
        </div>
      </div>
      <!------- 第一層 ------->
      <h4 class="col-md-12 mt-5">Card 區塊</h4>
      <div
        class="col-md-4 mb-5 card-block"
        v-for="(value, key) in data"
        :key="key"
      >
        <div class="card" style="width: 18rem">
          <img :src="value.picture" />
          <div class="card-body">
            <h5 class="card-title">{{ value.name }}</h5>
            <div class="accordion" :id="value._id + '_' + key">
              <!------- 第二層 ------->
              <div
                class="card"
                v-for="(value_2, key_2) in value.friends"
                :key="key_2"
              >
                <div
                  class="card-header"
                  :id="'#' + value._id + '_' + value_2.id"
                >
                  <h2 class="mb-0">
                    <button
                      class="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      :data-target="
                        '#' + value._id + '_' + value_2.id + '_' + key_2
                      "
                      aria-expanded="true"
                      :aria-controls="
                        value._id + '_' + value_2.id + '_' + key_2
                      "
                    >
                      {{ value_2.name }}
                    </button>
                  </h2>
                </div>
                <div
                  :id="value._id + '_' + value_2.id + '_' + key_2"
                  class="collapse"
                  :aria-labelledby="'#' + value._id + '_' + value_2.id"
                  :data-parent="'#' + value._id + '_' + key"
                >
                  <div class="card-body">
                    <!------- 第三層 ------->
                    <ol>
                      <li v-for="(value_3, key_3) in value_2.tags" :key="key_3">
                        {{ value_3 }}
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <p class="card-text">
              {{ value.about }}
            </p>
            <a href="#" class="btn btn-primary">{{ value.gender }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "API 測試小首頁",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "Express 可以說是 Node.js 底下的一個前端 + 後端的框架，也是被官方所認同推薦入門的套件之一，其中包含 MVC Framework( Model–View–Controller)，簡單來說 View 就是前端畫面呈現 HTML + CSS，Model、Controller 為後端 API 搭建資料庫與控制流程。",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "API 測試小首頁",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Express 可以說是 Node.js 底下的一個前端 + 後端的框架，也是被官方所認同推薦入門的套件之一，其中包含 MVC Framework( Model–View–Controller)，簡單來說 View 就是前端畫面呈現 HTML + CSS，Model、Controller 為後端 API 搭建資料庫與控制流程。",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "/cards",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://agile-sands-07060.herokuapp.com/img/picture/og-image-202012211006-expressapi.gif",
        },
        { hid: "og:type", property: "og:type", content: "website" },
      ],
    };
  },
  data() {
    return {
      title: "這是從 json-generator 取得的資訊",
      data: [],
      data_2: [],
      hexschoolLogin: {
        email: "lovef2e@hexschool.com",
        password: "12345678",
      },
      userInfo: {},
      starsData: "",
      listA: "",
      listB: "",
      listC: "",
    };
  },
  async asyncData({ store, $axios }) {
    /*
    const ip = await $axios.$get("https://icanhazip.com");
    console.log("IP: " + ip);
    return { ip };
    */
    let vm = this;

    await store.dispatch("fetchAllPosts");
    await store.dispatch("GET_STARS").then((data) => {
      store.commit("upDateSingle", ["number", data]);
    });

    // store 呼叫 actions
    let mountainsData = await store.dispatch("getMta");
    // 當頁呼叫 axios
    let [listA, listB, listC] = await Promise.all([
      $axios.$get("https://api.nuxtjs.dev/rivers"),
      $axios.$get("https://api.nuxtjs.dev/beers"),
      $axios.$post("https://hexschool-tutorial.herokuapp.com/api/signin", {
        email: "lovef2e@hexschool.com",
        password: "12345678",
      }),
    ]);
    // console.log("listA", listA);
    // console.log("listB", listB);
    // console.log("listC", listC);
    return {
      listA: listA,
      listB: listB,
      listC: listC,
      data: mountainsData,
    };

    /* 
    return axios({
      method: "post",
      url: "https://hexschool-tutorial.herokuapp.com/api/signin",
      data: {
        email: "lovef2e@hexschool.com",
        password: "12345678",
      },
    })
      .then(function (response) {
        // console.log(response.data);
        return {
          userInfo: response.data,
        };
      })
      .catch(function (error) {
        console.log(error);
      });
    */
  },
  /*
  async asyncData({ params }) {
    // 方法三 - await 此為仿同步語法 - 會讓 SEO 看不到
    let { data } = await axios({
      method: "get",
      url: "https://www.json-generator.com/api/json/get/cpgerLqgrS",
    });
    return { data: data };
  },
  asyncData({ params }) {
    // 方法二
    return axios({
      method: "get",
      url: "https://www.json-generator.com/api/json/get/cpgerLqgrS",
    }).then(function (response) {
      return { data: response.data };
      error(params);
    });
  },
  // 方法一
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      "https://www.json-generator.com/api/json/get/cpgerLqgrS"
    );
    // console.log(JSON.stringify(res));
    return {
      data: data,
    };
  },
  */
  created() {
    let vm = this;

    // console.log(route);
    // console.log(params);
  },
  async fetch({ store }) {
    /* 
    await store.dispatch("fetchAllPosts");
    await store.dispatch("GET_STARS").then((data) => {
      store.commit("upDateSingle", ["number", data]);
    });
    */
  },
  mounted() {
    let vm = this;
    let ooo = {
      title: "分享标题", // 分享标题
      desc: "分享描述", // 分享描述
      link: "https://agile-sands-07060.herokuapp.com/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "分享图标", // 分享图标
      type: "", // 分享类型,music、video或link，不填默认为link
      dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
    };
    vm.shareWeChat(ooo);

    this.initUrl();
    // this.weChatHandler();
  },
  methods: {
    // 抓取 store 的 actions
    ...mapActions(["alertInfo", "getMta"]),
    weChatHandler() {
      // this.wxShare({
      //   title: "分享的标题",
      //   desc: "分享的摘要",
      //   link: window.location.href,
      //   imgUrl:
      //     "http://design.kyart.tw/2021/hbr/html/assets/img/LatestPublication.png",
      //   success: function () {
      //     // 调用成功的回调
      //     console.log("success");
      //   },
      // });
    },
    initUrl() {
      this.$reqSignByUrl("http://m.ciyigou.com", this.sayHello);
    },
    sayHello(url) {
      console.log("Hello", url);
    },
  },
  computed: {
    // 抓取 store 的 state
    ...mapState(["list", "ip", "testH3", "number", "allPost"]),
  },
};
</script>
<style>
.card-block .card-body > .accordion {
  min-height: 260px;
}
.card-title {
  font-size: 1.8rem;
  font-weight: 700;
}
.card-body {
  text-align: left;
}
.card-body > ul {
  padding-left: 1.1rem;
}
.card-text {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
</style>