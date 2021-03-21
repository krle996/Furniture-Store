<template>
  <div>
    <div class="row" v-if="armchair">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <img
            class="card-img-top embed-responsive-item"
            :src="armchair.img"
            alt
          />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>{{ armchair.title }}</b>
          </div>
          <div class="id">Šifra proizvoda: {{ armchair.id }}</div>
          <div class="desc">
            Fotelje su neprevaziđeni dodaci dnevnim sobama koji Vam dopuštaju da
            se ušuškate i uživate gledajući omiljenu seriju ili film. One,
            takođe, služe kao funkcionalan nameštaj koji će stilski upotpuniti
            enterijer Vaše dnevne sobe. Želeći da zadovoljimo sve Vaše potrebe,
            Vitorog je za Vas pripremio različite dizajne fotelja, koji će Vam
            pružiti kombinaciju udobnosti i stila.
          </div>
          <div class="price">{{ numberWithCommas(armchair.price) }} RSD</div>
          <div class="button" v-if="isAuth">
            <div v-if="!isAdmin">
              <button-add-to-cart
                :id="armchair.id"
                :img="armchair.img"
                :title="armchair.title"
                :price="armchair.price"
                :category="category"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "fotelje",
    };
  },
  computed: {
    armchair() {
      return this.$store.getters["livingRoom/getArmchairPost"];
    },
    isAuth() {
      return this.$store.getters["admin/isAuth"];
    },
    isAdmin() {
      return this.$store.state.admin.isAdmin;
    },
  },
  created() {
    let id = this.$route.params.id;
    this.$store.dispatch("livingRoom/getArmchairPost", id);
  },
  destroyed() {
    this.$store.commit("livingRoom/clearPost");
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

.article {
  background-color: rgb(187, 187, 187);
  margin: 30px 0px 30px;
  padding: 30px;
}

.image {
  margin: 20px 0px 20px 0px;
}
.title {
  font-size: 35px;
  margin-bottom: 20px;
}
.id {
  font-size: 20px;
  margin-bottom: 20px;
}
.price {
  font-size: 35px;
  margin-bottom: 20px;
}
.desc {
  margin-bottom: 20px;
  text-align: justify;
  font-family: "Kumbh Sans", sans-serif;
}

@media (min-width: 320px) and (max-width: 425px) {
  .article {
    margin: 20px 0px 20px;
    padding: 15px;
  }

  .title {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .id {
    font-size: 8px;
    margin-bottom: 10px;
  }
  .price {
    font-size: 15px;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 8px;
    margin-bottom: 10px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .article {
    margin: 20px 0px 20px;
    padding: 20px;
  }

  .title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .id {
    font-size: 10px;
    margin-bottom: 15px;
  }
  .price {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .desc {
    font-size: 8px;
    margin-bottom: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .article {
    margin: 20px 0px 20px;
    padding: 25px;
  }

  .title {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .id {
    font-size: 15px;
    margin-bottom: 15px;
  }
  .price {
    font-size: 30px;
    margin-bottom: 15px;
  }
  .desc {
    font-size: 12px;
    margin-bottom: 15px;
  }
}
</style>