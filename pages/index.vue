<template>
  <div class="home">
    <div
      class="container-fluid bg-accent bg-position-center bg-size-cover py-3 py-sm-5"
      style="background-image: url(img/picture/bg-001.jpg)"
    >
      <!-- Three columns of text below the carousel -->
      <div class="container">
        <div class="row">
          <div class="col align-self-center">
            <h2>{{ title }}</h2>
            <h1 class="display-3">{{ keyView.title }}</h1>
            <p class="lead">{{ keyView.des }}</p>
            <p>
              <a
                class="btn btn-secondary"
                :href="keyView.btnLink"
                role="button"
                >{{ keyView.btn }}</a
              >
            </p>
          </div>
        </div>

        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->
    </div>
    <div class="container marketing">
      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div
        class="row featurette"
        v-for="(value, index) in featurette"
        :key="index"
      >
        <div
          class="col-md-7"
          :class="{ 'order-md-last': index % 2, 'order-md-first': !index % 2 }"
        >
          <h2 class="featurette-heading">{{ value.title }}</h2>
          <p class="lead">{{ value.des }}</p>
        </div>
        <div
          class="col-md-5"
          :class="{ 'order-md-first': index % 2, 'order-md-last': !index % 2 }"
        >
          <img class="img-fluid" :src="value.picUrl" :alt="value.title" />
        </div>
      </div>

      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  asyncData({ req }) {
    console.log(req.body.abc);
  },
  data() {
    return {
      title: "這是給爬蟲爬的資訊-20210604",
      keyView: {},
      featurette: [],
    };
  },
  async asyncData({ $axios }) {
    const data = await $axios.$get("data/home.json");
    //console.log(data);
    return {
      keyView: data.keyView,
      featurette: data.featurette,
    };
  },
  created() {
    //線上url前綴 - /project-vue/dist/data/
    //本機url前綴 - /data/
    /*
    const onlineUrl = "/data/";
    //宣告 ajax 物件
    let meal_home = {
      name: "home-data",
      url: `${onlineUrl}home.json`,
      data: "",
      type: "get"
    };
    //將首頁的資料存入data
    this.ajaxMix(meal_home).then(data => {
      this.keyView = data.keyView;
      this.featurette = data.featurette;
    });
    */
  },
  methods: {
    //promise 封裝 ajax
    ajaxMix(item) {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: item.type,
          url: item.url,
          data: item.data,
          dataType: "json",
          success: function (data) {
            //console.log("ajaxMix-計數");
            resolve(data);
          },
          error: function (err) {
            reject(err);
          },
        });
      });
    },
  },
  mounted() {
    //
  },
};
</script>
<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

/* first section bg
-------------------------------------------------- */
.container-fluid.bg-accent {
  background-size: cover;
}
.container-fluid.bg-accent > .container > .row {
  min-height: 500px;
}
h1.display-3 {
  font-weight: 700;
  color: #00384f;
}
.container-fluid.bg-accent .btn.btn-secondary {
  background: #00384f;
}
.container-fluid.bg-accent .lead {
  font-weight: 400;
}

/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */

body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}

/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: 0.75rem;
  margin-left: 0.75rem;
}

/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  letter-spacing: -0.05rem;
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}
</style>
