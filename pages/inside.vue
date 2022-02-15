<template>
  <div class="inside container">
    <div>
      <Logo />
      <h3>8080/inside</h3>
      <h2 style="text-align: left">{{ title }}</h2>
      <div class="media inside-media">
        <img
          :src="randomuser.results[0].picture.large"
          class="mr-3"
          alt="IVS-Inventor"
        />
        <div class="media-body">
          <h5 class="mt-0">
            {{ randomuser.results[0].name.title }}
            {{ randomuser.results[0].name.first }}
            {{ randomuser.results[0].name.last }}
          </h5>
          <ul>
            <li>
              Location: {{ randomuser.results[0].location.country }},{{
                randomuser.results[0].location.state
              }},{{ randomuser.results[0].location.city }},{{
                randomuser.results[0].location.street.number
              }},{{ randomuser.results[0].location.street.name }}
            </li>

            <li>Email: {{ randomuser.results[0].email }}</li>
            <li>Phone: {{ randomuser.results[0].phone }}</li>
            <li>Age: {{ randomuser.results[0].dob.age }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Elegant 的和風情感 | 介紹 |",
      meta: [
        { charset: "utf-8" },
        {
          hid: "description",
          name: "description",
          content:
            "wabi-sabi適用於各種人造的物體、空間和設計，是對中國在十六世紀或更早，所追求之完美或壯麗美學的反動。wabi-sabi可說是一種抽象的、非再現之美。",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Elegant 的和風情感 | 介紹 |",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "wabi-sabi適用於各種人造的物體、空間和設計，是對中國在十六世紀或更早，所追求之完美或壯麗美學的反動。wabi-sabi可說是一種抽象的、非再現之美。",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://ken551113.github.io/",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://agile-sands-07060.herokuapp.com/img/picture/grid-002.jpg",
        },
        { hid: "og:type", property: "og:type", content: "website" },
      ],
    };
  },
  data() {
    return {
      title: "這是 API 取得的資訊",
      randomuser: {},
    };
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get(
      "https://randomuser.me/api/?nat=us&randomapi"
    );
    //console.log(JSON.stringify(data));
    return {
      randomuser: data,
    };
  },
};
</script>

<style>
.inside.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inside .title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.inside .subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.inside .links {
  padding-top: 15px;
}
.inside-media {
  border: 1px solid #ccc;
  text-align: left;
}
.inside-media .media-body,
.inside-media > img {
  margin: 20px;
}
.inside-media .media-body ul {
  margin: 0;
  padding-left: 20px;
}
</style>
