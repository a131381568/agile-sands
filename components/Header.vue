<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <nuxt-link class="navbar-brand" to="/">Design</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/inside">Inside</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/cards">Cards</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >AD</a
            >
            <div class="dropdown-menu">
              <nuxt-link class="dropdown-item" to="/grid">Grid</nuxt-link>
              <nuxt-link class="dropdown-item" to="/slide">Slide</nuxt-link>
            </div>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/slug">Slug</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Nuxt.js</a
            >
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href="https://www.nuxtjs.cn/api/context"
                target="_blank"
                >API Context</a
              >
              <a
                class="dropdown-item"
                href="https://www.nuxtjs.cn/guide/vuex-store"
                target="_blank"
                >Vuex 狀態樹</a
              >
              <a
                class="dropdown-item"
                href="https://axios.nuxtjs.org/usage/"
                target="_blank"
                >Nuxt / axios</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    let vm = this;
    // console.log(vm.$router);
  },
  watch: {
    thisUrl(value) {
      // console.log(value);
    },
  },
  computed: {
    thisUrl() {
      let vm = this;
      return vm.$router;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
