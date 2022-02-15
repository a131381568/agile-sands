<template>
  <div class="porfolio_content container">
    <h2 style="font-size: 2.5rem">Slug 內頁區塊</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Generator JSON</h3>
        <ul>
          <li v-for="(value, key) in lqgrJson" :key="key">{{ value.name }}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <h3>Apiary JSON</h3>
        <ul>
          <li v-for="(value, key) in apiaryJson" :key="key">
            {{ value.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route, params }) {
    let pData = await $axios.get(
      "https://www.json-generator.com/api/json/get/cpgerLqgrS"
    );

    let apiary = await $axios.post(
      "https://private-c24e62-apiaryapi2.apiary-mock.com/api/post/get_list/hot_list"
    );

    return {
      lqgrJson: pData.data,
      apiaryJson: apiary.data.article,
    };
  },
  data() {
    return {
      title: "slug-child-內頁",
    };
  },
  mounted() {
    /*
    db.collection("text")
      .add({
        text: "hello world",
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    */
  },
  /*
  head() {
    return {
      title: "啤酒-" + this.mockUsers.name,
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content: "敘述分類:" + this.mockUsers.category,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "啤酒-" + this.mockUsers.name,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "敘述分類:" + this.mockUsers.category,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "/portfolio/" + this.$route.params.id,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.mockUsers.image_url,
        },
        { hid: "og:type", property: "og:type", content: "article" },
      ],
    };
  },
  */
};
</script>
<style>
.porfolio_content {
  margin: 20vh auto;
  background: #eee;
}
.porfolio_content ul {
  padding-left: 20px;
  font-size: 1.3rem;
  line-height: 2rem;
  margin-top: 15px;
}
</style>