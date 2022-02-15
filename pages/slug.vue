<template>
  <div style="background: #ccc">
    <div style="text-align: center">
      <h1 style="margin-bottom: 40px">Slug 外圍共用區塊</h1>
      <button v-for="(value, key) in allPost.slice(0, 6)" :key="key">
        {{ value.title }}
      </button>
    </div>
    <!----------------->
    <div class="container">
      <button @click="loginUser">登入</button>
      <button @click="logoutUser">登出</button>
      <h6>{{ userState }}</h6>
    </div>
    <!----------------->
    <div class="container">
      <h2 class="push_form_title">新增資料</h2>
      <div class="row push_form_outer">
        <div class="col-md-5 push_form">
          <div class="col">
            <h4>信箱:</h4>
            <input type="text" name="mail" id="mail" v-model="formObj.mail" />
          </div>
          <div class="col">
            <h4 for="post_date">日期:</h4>
            <input
              type="text"
              name="post_date"
              id="post_date"
              v-model="formObj.post_date"
            />
          </div>
          <div class="col">
            <h4>姓名:</h4>
            <input
              type="text"
              name="post_name"
              id="post_name"
              v-model="formObj.post_name"
            />
          </div>
          <div class="col">
            <h4>ID:</h4>
            <input
              type="number"
              name="post_id"
              id="post_id"
              v-model="formObj.post_id"
            />
          </div>
          <div class="col">
            <h4>簡述:</h4>
            <textarea
              name="text"
              id="post_des"
              v-model="formObj.post_des"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button @click="sendForm">送出</button>
        </div>
        <div class="col-md-7 push_img"></div>
      </div>
    </div>
    <!----------------->
    <nuxt-child> </nuxt-child>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
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
      titleApi: "Slug Index",
      lqgrJson: [],
      todos: [],
      formObj: {
        mail: "",
        post_date: "",
        post_name: "",
        post_id: "",
        post_des: "",
      },
    };
  },
  head() {
    return {
      title: "Slug 外圍共用區塊",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content: "Slug 外圍共用區塊 des",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Slug 外圍共用區塊",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "Slug 外圍共用區塊 des",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "/slug",
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
  methods: {
    sendForm({ $axios }) {
      let vm = this;
      let oBjTest = vm.formObj;
      vm.$axios({
        method: "post",
        url: "/api/test",
        headers: {
          "Content-Type": "application/json",
        },
        data: oBjTest,
      })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loginUser() {
      let isState = ["userState", "isLogin"];
      this.$store.commit("upDateSingle", isState);
    },
    logoutUser() {
      let isState = ["userState", ""];
      this.$store.commit("upDateSingle", isState);
    },
    ...mapState(["upDateSingle"]),
  },
  computed: {
    ...mapState(["allPost", "userState"]),
    /*
    storeAllpost(){
      return this.$store.state.allPost;
    }
    */
  },
};
</script>
<style>
.push_form input,
.push_form textarea {
  width: 100%;
}
.push_img {
  background: #656565;
}
.push_form_outer {
  margin: 40px auto;
}
.push_form_title {
  margin: 40px auto;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
}
</style>