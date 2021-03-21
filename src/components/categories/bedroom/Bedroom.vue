<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>Spavaća soba</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <b>Kreveti</b>
      <div class="row">
        <div
          v-for="(item, index) in beds"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/spavaća-soba/kreveti/${item.id}`"
                class="link"
                tag="div"
              >
                <div class="embed-responsive embed-responsive-4by3">
                  <img
                    :src="item.img"
                    alt="Bed"
                    class="card-img-top embed-responsive-item"
                  />
                </div>
                <div class="card-block">
                  <div class="card-title">
                    <b>{{ item.title }}</b>
                  </div>
                  <div class="card-text">
                    {{ numberWithCommas(item.price) }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <b-button
          squared
          variant="primary"
          size="sm"
          to="/proizvodi/spavaća-soba/kreveti"
          >Pogledajte više</b-button
        >
      </div>
    </div>
    <div class="article">
      <b>Ormari</b>
      <div class="row">
        <div
          v-for="(item, index) in wardrobes"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/spavaća-soba/ormari/${item.id}`"
                class="link"
                tag="div"
              >
                <div class="embed-responsive embed-responsive-4by3">
                  <img
                    :src="item.img"
                    alt="Bed"
                    class="card-img-top embed-responsive-item"
                  />
                </div>
                <div class="card-block">
                  <div class="card-title">
                    <b>{{ item.title }}</b>
                  </div>
                  <div class="card-text">
                    {{ numberWithCommas(item.price) }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <b-button
          squared
          variant="primary"
          size="sm"
          to="/proizvodi/spavaća-soba/ormari"
          >Pogledajte više</b-button
        >
      </div>
    </div>
    <div class="article">
      <b>Komode</b>
      <div class="row">
        <div
          v-for="(item, index) in cabinets"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/spavaća-soba/komode/${item.id}`"
                class="link"
                tag="div"
              >
                <div class="embed-responsive embed-responsive-4by3">
                  <img
                    :src="item.img"
                    alt="Bed"
                    class="card-img-top embed-responsive-item"
                  />
                </div>
                <div class="card-block">
                  <div class="card-title">
                    <b>{{ item.title }}</b>
                  </div>
                  <div class="card-text">
                    {{ numberWithCommas(item.price) }}
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <b-button
          squared
          variant="primary"
          size="sm"
          to="/proizvodi/spavaća-soba/komode"
          >Pogledajte više</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    beds() {
      return this.$store.getters["bedroom/getBeds"];
    },
    wardrobes() {
      return this.$store.getters["bedroom/getWardrobes"];
    },
    cabinets() {
      return this.$store.getters["bedroom/getCabinets"];
    },
  },
  created() {
    this.$store.dispatch("bedroom/getBeds", {
      limit: 3,
    });
    this.$store.dispatch("bedroom/getWardrobes", {
      limit: 3,
    });
    this.$store.dispatch("bedroom/getCabinets", {
      limit: 3,
    });
  },
  methods: {
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.embed-responsive .card-img-top {
  object-fit: cover;
}

.main {
  background-image: url("https://www.ilovewallpaper.co.uk/images/products/1566299302-94217200.jpg");
  background-size: cover;
}

.category {
  font-size: 40px;
  text-align: left;
  color: white;
}

.article {
  background-image: url("https://www.ilovewallpaper.co.uk/images/products/1566299302-94217200.jpg");
  background-size: cover;
  margin: 24px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 15px;
  font-size: 30px;
  color: rgb(0, 0, 0);
}

.card {
  font-size: 25px;
  color: black;
  text-align: center;
}

.button {
  padding-top: 8px;
  text-align: center;
}

.link {
  cursor: pointer;
}

span {
  background-color: rgb(49, 49, 49);
}

@media (min-width: 320px) and (max-width: 425px) {
  .main {
    margin: 14px;
    padding: 14px;
  }

  .category {
    font-size: 20px;
    text-align: center;
  }

  .article {
    margin: 20px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
  }

  .card {
    font-size: 13px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .main {
    margin: 20px;
    padding: 20px;
  }

  .category {
    font-size: 25px;
    text-align: center;
  }

  .article {
    margin: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
  }

  .card {
    font-size: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main {
    margin: 30px;
    padding: 30px;
  }

  .category {
    font-size: 35px;
  }

  .article {
    margin: 20px;
    padding-left: 35px;
    padding-right: 35px;
    font-size: 25px;
  }

  .card {
    font-size: 20px;
  }
}

@media (min-width: 1025px) {
  .main {
    margin: 45px;
    padding: 45px;
  }
}
</style>