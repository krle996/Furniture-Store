<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span class="span-title">
              <b>Kuhinje</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="article">
      <div class="row">
        <div
          v-for="(item, index) in kitchens"
          :key="index"
          class="card-group col-md-4 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <router-link
                :to="`/proizvodi/kuhinje/${item.id}`"
                class="link"
                tag="div"
              >
                <div class="embed-responsive embed-responsive-4by3">
                  <img
                    :src="item.img"
                    alt="Kitchen"
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
                  @click="deleteKitchen(item.id)"
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
          <b-button class="mt-3" block variant="success" @click="insertKitchen"
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
    kitchens() {
      return this.$store.getters["kitchen/getKitchen"];
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
    this.$store.dispatch("kitchen/getKitchen", {
      limit: 30,
    });
  },
  methods: {
    processFile(event) {
      let file = event.target.files[0];
      this.$store.dispatch("image/imageUpload", file);
    },
    insertKitchen() {
      if (!this.$v.$invalid) {
        this.$bvModal.hide("insert");
        this.$store.dispatch("kitchen/insertKitchen", this.formData);
        this.clearModal();
        this.clearImageUpload();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    deleteKitchen(id) {
      this.$store.dispatch("kitchen/deleteKitchen", id);
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

.main {
  background-image: url("https://wallpaperaccess.com/full/558476.jpg");
  background-size: cover;
}

.category {
  font-size: 40px;
  text-align: left;
  color: white;
}

.article {
  background-image: url("https://wallpaperaccess.com/full/558476.jpg");
  background-size: cover;
  margin: 24px;
  padding: 48px;
}

.button {
  margin-top: 5px;
}

.link {
  cursor: pointer;
}

.span-title {
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