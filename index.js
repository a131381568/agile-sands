const { Nuxt, Builder } = require('nuxt')

const express = require('express')
const app = require('express')()
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${PORT}`))

// 用指定的配置對象實體化 Nuxt.js
const config = require('./nuxt.config.js')
config.dev = !isProd
const nuxt = new Nuxt(config)

// 用 Nuxt.js 渲染每個路由
app.use(nuxt.render)

// 在開發模式下啟用編譯建構和熱加載
if (config.dev) {
  new Builder(nuxt).build().then(listen)
} else {
  listen()
}

function listen() {
  // 服務端監聽
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}