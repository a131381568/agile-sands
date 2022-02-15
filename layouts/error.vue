<template>
  <div class="container error-container">
    <h1 v-if="error.statusCode === 404">無此頁面</h1>
    <h1 v-else>發生不明的錯誤</h1>
    <nuxt-link to="/">請返回首頁</nuxt-link>
  </div>
</template>
<script>
export default {
  props: ["error"],
  // layout: "blog", // you can set a custom layout for the error page
};
</script>
<style>
.error-container {
  margin: 35vh auto;
  text-align: center;
}
</style>