<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>Kancelarija</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <b>Stolovi</b>
      <div class="row">
        <div
          v-for="(item, index) in tables"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/kancelarija/stolovi/${item.id}`"
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
          to="/proizvodi/kancelarija/stolovi"
          >Pogledajte više</b-button
        >
      </div>
    </div>
    <div class="article">
      <b>Stolice</b>
      <div class="row">
        <div
          v-for="(item, index) in chairs"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/kancelarija/stolice/${item.id}`"
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
          to="/proizvodi/kancelarija/stolice"
          >Pogledajte više</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    tables() {
      return this.$store.getters["office/getTables"];
    },
    chairs() {
      return this.$store.getters["office/getChairs"];
    },
  },
  created() {
    this.$store.dispatch("office/getTables", {
      limit: 3,
    });
    this.$store.dispatch("office/getChairs", {
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
  background-image: url("https://img.wallpapersafari.com/tablet/2560/1700/38/18/Q7WOzv.jpg");
  background-size: cover;
}

.category {
  font-size: 40px;
  text-align: left;
  color: white;
}

.article {
  background-image: url("https://img.wallpapersafari.com/tablet/2560/1700/38/18/Q7WOzv.jpg");
  background-size: cover;
  margin: 24px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 15px;
  font-size: 30px;
  color: rgb(255, 255, 255);
}

.card {
  text-align: center;
  font-size: 25px;
  color: black;
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