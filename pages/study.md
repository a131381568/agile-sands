# 驗證 Nuxt.js 和 Vue Cli 的差別

## vuex 的差別 ( nuxtServerInit )
- 預設就有 store
- vuex === 狀態樹

## 生命週期的差別
![nuxt_life_circle](https://i.imgur.com/zBpX5NM.png)
- 上圖的紅框跟黃框，都不存在 windows 對象
- asyncData / fetch 在後端執行，能夠使用 app 代替 this，
- beforeCreated / created 前後端都會執行，而且不能用 this，

## fetch 和 asyncData 差別
- asyncData 用於獲取數據後，更新於當前的組件(page)，沒辦法使用 this。
- fetch 用於設置 vuex 的 state，在 created 之後執行，不會設置組件的數據，可以使用 this，


## 動態路由可藉由資料夾自動產生
pages/index.vue -> /
pages/about.vue -> /about
pages/blog/list.vue -> /blog/list
pages/user/index.vue -> /user
pages/user/_id.vue -> /users/:id


## 驗證套入子組件和 slick 切換是否影響



### 參考來源:
- [nuxt的生命周期](https://juejin.cn/post/6856648700081799182)