export const state = () => ({
  list: [],
  ip: '',
  testH3: '',
  number: 0,
  setResult: "",
  allPost: [],
  userState: ""
})

export const mutations = {
  upDateSingle(state, [key, value]) {
    this._vm.$set(state, key, value);
  }
}

export const actions = {
  async getMta({ commit, dispatch }) {
    const data = await this.$axios.$get('https://www.json-generator.com/api/json/get/cpgerLqgrS')
    return data;
  },
  async GET_STARS({ commit, dispatch }) {
    const data = await this.$axios.$get('https://api.nuxtjs.dev/rivers')
    commit("upDateSingle", ["list", data[0].image]);
    dispatch('getIP');
    // 可以回傳值給下一個階段用
    return data[0].length;
  },
  async getIP({ commit }) {
    const beers = await this.$axios.$get('https://api.nuxtjs.dev/beers')
    commit("upDateSingle", ["ip", beers[0].product_id]);
  },
  alertInfo({ commit }, text) {
    let h2_text = $('.test_h2').text();
    let testH3Html = '<h3>' + h2_text + text + '<h3>';
    commit("upDateSingle", ["testH3", testH3Html]);
  },
  async fetchAllPosts({ commit }) {
    let posts = await this.$axios.$get('https://api.nuxtjs.dev/posts')
    commit('upDateSingle', ["allPost", posts])
  },
}