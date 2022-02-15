<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  async asyncData() {
    // console.log(context.app.$axios);
  },
  created() {
    //////////////////////////////////////////
    if (process.client) {
      let vm = this;
      // 滾動事件
      window.addEventListener("scroll", vm.onScroll);
      /////////////////////////////////////////////
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      document.cookie = "_ga=000000";
      gtag("js", new Date());
      gtag("config", "UA-172024654-1");
      /* 
      // 判斷是否啟用第三方 COOKIE
      new Promise(
        (
          rs,
          rj,
          m = new MessageChannel(),
          d = document,
          i = d.createElement("iframe")
        ) => {
          i.src =
            "https://httpbin.org/base64/PHNjcmlwdD5vbm1lc3NhZ2UgPSBlID0+IGUuZGF0YS5wb3N0TWVzc2FnZShuYXZpZ2F0b3IuY29va2llRW5hYmxlZCk8L3NjcmlwdD4=";
          i.onload = (_) =>
            i.contentWindow.postMessage(
              m.port1,
              "*",
              [m.port1],
              (m.port2.onmessage = (e) => i.remove(rs(e.data)))
            );
          i.hidden = 1;
          d.body.append(i);
        }
      ).then((thirdPartyCookieEabled) => {
        console.log("啟用第三方 Cookie:", thirdPartyCookieEabled);
        $(".home .btn-secondary").text(
          "是否啟用第三方 Cookie => " + thirdPartyCookieEabled
        );
      });
      */
    }
    //////////////////////////////////////////

    let vm = this;
    if (process.client) {
      // localStorage 設置與讀取
      if (!localStorage.getItem("local")) {
        console.log("沒有登入過，所以初始化");
        localStorage.setItem("local", 0);
      } else {
        console.log("已登入過，所以顯示");
        let num = Number(localStorage.getItem("local")) + 1;
        localStorage.setItem("local", num);
      }

      // 在頁面載入時讀取sessionStorage裡的狀態資訊
      if (sessionStorage.getItem("store")) {
        vm.$store.replaceState(
          Object.assign(
            {},
            vm.$store.state,
            JSON.parse(sessionStorage.getItem("store"))
          )
        );
      }
      // 在頁面重新整理時將vuex裡的資訊儲存到sessionStorage裡
      window.addEventListener("beforeunload", () => {
        sessionStorage.setItem("store", JSON.stringify(vm.$store.state));
      });
    }

    /*
    // 判斷瀏覽器是否為無痕
    function browserIsHide() {
      if (process.client) {
        let fs = window.RequestFileSystem || window.webkitRequestFileSystem;
        console.log(window.RequestFileSystem);
        console.log(window.webkitRequestFileSystem);
        if (!fs) {
          console.log("檢查失敗，查無瀏覽器資訊。");
        } else {
          fs(
            window.TEMPORARY,
            100,
            function () {
              console.log("非無痕模式");
            },
            function () {
              alert("您已開啟無痕模式，為了不影響正常功能使用，請立即關閉。");
            }
          );
        }
      }
    }
    browserIsHide();
    // 以下判斷在無痕 localstorage 依舊可以使用
    if (typeof localStorage === "object") {
      try {
        localStorage.setItem("localStorage", 1);
        localStorage.removeItem("localStorage");
      } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function () {};
        alert("请关闭无痕模式!");
      }
    }
    */
    /////////////////////////////////////////
  },
  methods: {
    onScroll(e) {
      // 頁首滾動切換樣式
      let vm = this;
      let innerH = window.innerHeight; // 裝置視窗的高度（不會變）
      // let scrollY = window.scrollTop; // 當前滾動條位置
      let scrollnow = e.target.documentElement.scrollTop;
      let totScrollH = document.body.scrollHeight; // 滾動條總高度
      // vm.windowTop = e.target.documentElement.scrollY;
      if (innerH + scrollnow >= totScrollH) {
        console.log("scrollDown");
      }
      /*
      if (this.windowTop > 50) {
        this.headerState.fixedHeader = true;
      } else {
        this.headerState.fixedHeader = false;
      }
      */
    },
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
