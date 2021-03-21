<template>
  <div>
    <div class="row" v-if="sofa">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <img class="card-img-top embed-responsive-item" :src="sofa.img" alt />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>{{ sofa.title }}</b>
          </div>
          <div class="id">Šifra proizvoda: {{ sofa.id }}</div>
          <div class="desc">
            Ležajevi su česta mesta okupljanja Vaših članova porodica. Zasta,
            ovi komadi nameštaja su neizostavni delovi svih dnevnih soba punih
            ljubavi i porodične atmosfere. To su modeli na kojima možete
            odremati, pričati sa prijateljima ili uživati u mirnoj večeri
            provedenoj uz najnovija holivudska ostvarenja. Koju god aktivnost da
            odaberete, predlažemo Vam da pogledate koje smo ležajeve uvrstili u
            naš asortiman.
          </div>
          <div class="price">{{ numberWithCommas(sofa.price) }} RSD</div>
          <div class="button" v-if="isAuth">
            <div v-if="!isAdmin">
              <button-add-to-cart
                :id="sofa.id"
                :img="sofa.img"
                :title="sofa.title"
                :price="sofa.price"
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
      category: "ležajevi",
    };
  },
  computed: {
    sofa() {
      return this.$store.getters["livingRoom/getSofaPost"];
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
    this.$store.dispatch("livingRoom/getSofaPost", id);
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