<template>
  <div>
    <div class="row" v-if="chair">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <img
            class="card-img-top embed-responsive-item"
            :src="chair.img"
            alt
          />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>{{ chair.title }}</b>
          </div>
          <div class="id">Šifra proizvoda: {{ chair.id }}</div>
          <div class="desc">
            Savršena lumbalna potpora je osnova zdravih leđa. Ukoliko provodite
            vreme sedeći više od osam časova u toku dana, potrebno je da
            obratite pažnju na to. Naše kancelarijske stolice su tu da Vam
            pomognu da dobijete preko potrebnu potporu. Blago zakrviljene linije
            ovih stolica prilagodiće se položaju u kom sedite i učiniti da ne
            osećate pritisak ni na jedan deo tela. Ove stolice postaće Vaši
            verni saputnici do zdravlja.
          </div>
          <div class="price">{{ numberWithCommas(chair.price) }} RSD</div>
          <div class="button" v-if="isAuth">
            <div v-if="!isAdmin">
              <button-add-to-cart
                :id="chair.id"
                :img="chair.img"
                :title="chair.title"
                :price="chair.price"
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
      category: "stolice",
    };
  },
  computed: {
    chair() {
      return this.$store.getters["office/getChairPost"];
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
    this.$store.dispatch("office/getChairPost", id);
  },
  destroyed() {
    this.$store.commit("office/clearPost");
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