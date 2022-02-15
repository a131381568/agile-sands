<template>
  <div class="porfolio_content container">
    <div class="row">
      <div class="col-md-6 text-center">
        <img :src="mockUsers.image_url" />
      </div>
      <div class="media-body col-md-6">
        <h1>{{ mockUsers.name }}</h1>
        <ul>
          <li>{{ mockUsers.product_id }}</li>
          <li>{{ mockUsers.size }}</li>
          <li>{{ mockUsers.updatedAt }}</li>
          <li>{{ mockUsers.slug }}</li>
          <li>{{ mockUsers.price }}</li>
          <li>{{ mockUsers.category }}</li>
          <li>{{ mockUsers.country }}</li>
          <li>{{ mockUsers.type }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, route, from }) {
    console.log(from);
    // console.log(this.$nuxt.context.from);
    let pData = await $axios.get("/api/portfolio?num=" + route.params.id);
    return {
      mockUsers: pData.data[0],
    };
  },
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
</style>