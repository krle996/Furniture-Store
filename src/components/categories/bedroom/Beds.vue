<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>Kreveti</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
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
                    alt="Kreveti"
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
              <div v-if="isAdmin">
                <b-button
                  block
                  squared
                  variant="danger"
                  size="sm"
                  @click="deleteBed(item.id)"
                  >Obriši</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isAdmin">
        <div class="insert">
          <b-button
            squared
            variant="success"
            size="sm"
            @click="$bvModal.show('insert')"
            >Dodaj novi proizvod</b-button
          >
        </div>
        <b-modal id="insert" hide-footer>
          <div class="d-block text-left">
            <form>
              <div class="form-group">
                <h5>Podaci o proizvodu</h5>

                <div class="form-group">
                  <label for="image">Slika:</label>
                  <div v-if="imageUpload">
                    <img class="show_image" :src="imageUpload" />
                  </div>
                  <b-form-file
                    class="mt-3"
                    plain
                    @change="processFile($event)"
                  ></b-form-file>
                </div>

                <div class="form-group">
                  <label for="id">Id:</label>
                  <b-form-input
                    v-model.trim="formData.id"
                    @blur="$v.formData.id.$touch()"
                    type="number"
                    placeholder="Unesite Id"
                  ></b-form-input>
                </div>

                <div class="form-group">
                  <label for="title">Naziv:</label>
                  <b-form-input
                    v-model.trim="formData.title"
                    @blur="$v.formData.title.$touch()"
                    type="text"
                    placeholder="Unesite naziv"
                  ></b-form-input>
                </div>

                <div class="form-group">
                  <label for="price">Cena:</label>
                  <b-form-input
                    v-model.trim="formData.price"
                    @blur="$v.formData.price.$touch()"
                    type="number"
                    placeholder="Unesite cenu"
                  ></b-form-input>
                </div>
                <p class="error_label" v-if="error">
                  Morate ispravno popuniti sva polja
                </p>
              </div>
            </form>
          </div>
          <b-button class="mt-3" block variant="success" @click="insertBed"
            >Dodaj</b-button
          >
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formData: {
        img: "",
        id: "",
        title: "",
        price: "",
      },
      error: false,
    };
  },
  validations: {
    formData: {
      id: {
        required,
      },
      title: {
        required,
      },
      price: {
        required,
      },
    },
  },
  computed: {
    beds() {
      return this.$store.getters["bedroom/getBeds"];
    },
    isAdmin() {
      return this.$store.state.admin.isAdmin;
    },
    imageUpload() {
      let imgUrl = this.$store.getters["image/imageUpload"];
      this.formData.img = imgUrl; // eslint-disable-line
      return imgUrl;
    },
  },
  created() {
    this.$store.dispatch("bedroom/getBeds", {
      limit: 30,
    });
  },
  methods: {
    processFile(event) {
      let file = event.target.files[0];
      this.$store.dispatch("image/imageUpload", file);
    },
    insertBed() {
      if (!this.$v.$invalid) {
        this.$bvModal.hide("insert");
        this.$store.dispatch("bedroom/insertBed", this.formData);
        this.clearModal();
        this.clearImageUpload();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    deleteBed(id) {
      this.$store.dispatch("bedroom/deleteBed", id);
    },
    clearImageUpload() {
      return this.$store.commit("image/clearImageUpload");
    },
    clearModal() {
      this.formData = {
        img: "",
        id: "",
        title: "",
        price: "",
      };
    },
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
  background-color: rgb(95, 95, 95);
}

.category {
  font-size: 40px;
  text-align: left;
  color: white;
}

.article {
  background-color: rgb(138, 138, 138);
  margin: 24px;
  padding: 48px;
}

.col {
  font-size: 30px;
  text-align: left;
  color: rgb(0, 0, 0);
}

.button {
  margin-top: 5px;
}

.link {
  cursor: pointer;
}

span {
  background-color: rgb(49, 49, 49);
}

.update {
  margin-top: 5px;
}

.show_image {
  width: 250px;
  height: 200px;
}

.insert {
  text-align: center;
}

.form-group.invalid input {
  border: 1px solid red;
}

.error_label {
  color: red;
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
    padding: 25px;
  }

  .col {
    font-size: 15px;
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
    padding: 30px;
  }

  .col {
    font-size: 20px;
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
    padding: 35px;
  }

  .col {
    font-size: 25px;
  }
}

@media (min-width: 1025px) {
  .main {
    margin: 45px;
    padding: 45px;
  }
}
</style>