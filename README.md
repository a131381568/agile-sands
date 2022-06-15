# agile-sands
此為最初 Nuxt 2 測試其 SSR 與框架功能的範例，能夠佈署至 Heroku。

## Nuxt 相關

```bash
# 安裝 NPM 依賴
$ npm install

# 本機起開發環境
$ npm run dev

# 打包成 .nuxt 檔
$ npm run build
```

## Docker 相關

```bash
# 製作映像檔
$ docker build -t agile-sands .
# 啟動容器
$ docker run -p 8080:3000 agile-sands
```
