const webpack = require('webpack')
const cherrio = require('cheerio')
module.exports = {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Elegant 的和風情感 | 首頁 |',
    meta: [
      { charset: 'utf-8' },
      { name: 'google-site-verification', content: 'H1irpN9PunfSQEVU_xrDFeWY1WZgr5Ehp-PHnKaLvAE' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '日本人的語言文化，善於表達微妙的情感、茫然的意志與心靈的邏輯，「wabi- sabi」並不像歐美國家習慣之二分法，這個詞彙難以解釋，曖昧不清。不過，wabi - sabi的心靈狀態與對於物質主義的理解，是源自於西元九、十世紀，中國詩詞與黑白水墨畫中，蒼涼、憂鬱、極簡主義的氛圍，在現代有了最完整的實踐。' },
      { hid: 'og:title', property: 'og:title', content: 'Elegant 的和風情感 | 首頁 |' },
      { hid: 'og:description', property: 'og:description', content: '日本人的語言文化，善於表達微妙的情感、茫然的意志與心靈的邏輯，「wabi- sabi」並不像歐美國家習慣之二分法，這個詞彙難以解釋，曖昧不清。不過，wabi - sabi的心靈狀態與對於物質主義的理解，是源自於西元九、十世紀，中國詩詞與黑白水墨畫中，蒼涼、憂鬱、極簡主義的氛圍，在現代有了最完整的實踐。' },
      { hid: 'og:url', property: 'og:url', content: 'https://agile-sands-07060.herokuapp.com/' },
      { hid: 'og:image', property: 'og:image', content: 'https://agile-sands-07060.herokuapp.com/img/picture/grid-001.jpg' },
      { hid: 'og:type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", type: "text/css", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css", integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm", crossorigin: "anonymous" }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=UA-172024654-1" },
      { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js", integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN", crossorigin: "anonymous" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js", integrity: "sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q", crossorigin: "anonymous" },
      { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl", crossorigin: "anonymous" },
      // 引入 gpt
      { src: "https://www.googletagservices.com/tag/js/gpt.js", async: "async" },
      { src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js", async: "async" }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  // '~/assets/transition.css', // 載入過場效果
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css'
  ],
  loading:
  // `~/components/LoadingBar.vue` // 可設置 loading 組件 ( 載入讀取效果 )
  {
    color: '#FFC107',   //  正常的顏色
    failedColor: 'red', //  錯誤時的顏色
    height: '4px',      //  進度條粗細
    throttle: 200,      //  呈現效果前的緩衝時間
    duration: 5000,     //  呈現效果的最長時間
    rtl: false          //  進度條方向
  },
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/plugins/mock.js'
    /*
    '@/plugins/jquery',
    '@/plugins/bootstrap',
    '@/plugins/popper'
    */
    { src: '~/plugins/wx-share.js', ssr: false },
    { src: '~/plugins/vue-wechat-share.js', ssr: false },
    { src: './plugins/vue-slick-carousel.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],

  auth: {
    redirect: {
      login: '/inside',
      logout: '/',
      callback: '/inside',
      home: '/'
    }
  },

  axios: {
    proxy: true
  },
  proxy: {
    //'/api': 'https://api.parse.com/'
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: '',
    cacheTime: 1000 * 60 * 15, //佔點路由更新頻率, 僅 generate: false 有用
    gzip: true, // 生成 .xml.gz 的 sitemap
    generate: true, //允許使用 nuxt generate 生成
    // 排除不要的頁面路由
    exclude: [
      // '/xxx/admin', //後台頁面不需要加入
    ]
  },
  robots: [
    {
      UserAgent: 'Googlebot',
      Disallow: ['/user', '/admin'],
    },
    {
      UserAgent: '*',
      Disallow: '/admin',
    },

  ],
  storybook: {
    // Options
  },
  serverMiddleware: [
    { path: "/api", handler: "~/api/index.js" }
  ],
  hooks: {
    'render:route': (url, result) => {
      this.$ = cherrio.load(result.html, { decodeEntities: false });
      // 去除 body 第一行的第一個 script ( window.__nuxt__ )
      this.$(`body script`).eq(0).remove();
      result.html = this.$.html()
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
