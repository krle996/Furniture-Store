<template>
  <div>
    <div class="article">
      <span><b>Izdvajamo</b></span>
      <div class="row">
        <div
          v-for="(item, index) in offer"
          :key="index"
          class="card-group col-md-3 col-sm-6"
        >
          <div class="card my-3">
            <div class="card-body">
              <div class="embed-responsive embed-responsive-4by3">
                <img
                  :src="item.img"
                  alt="Chairs"
                  class="card-img-top embed-responsive-item"
                />
              </div>
              <div class="card-block">
                <div class="card-title">
                  <b>{{ item.title }}</b>
                </div>
                <div class="card-text">{{ numberWithCommas(item.price) }}</div>
              </div>
              <div v-if="isAdmin">
                <b-button
                  block
                  squared
                  variant="danger"
                  size="sm"
                  @click="deleteOffer(item.id)"
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
          <b-button class="mt-3" block variant="success" @click="insertOffer"
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
    offer() {
      return this.$store.getters["offer/getOffer"];
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
    this.$store.dispatch("offer/getOffer", {
      limit: 10,
    });
  },
  methods: {
    processFile(event) {
      let file = event.target.files[0];
      this.$store.dispatch("image/imageUpload", file);
    },
    insertOffer() {
      if (!this.$v.$invalid) {
        this.$bvModal.hide("insert");
        this.$store.dispatch("offer/insertOffer", this.formData);
        this.clearModal();
        this.clearImageUpload();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    deleteOffer(id) {
      this.$store.dispatch("offer/deleteOffer", id);
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
.article {
  background-color: rgb(187, 187, 187);
  margin: 24px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 15px;
  padding-top: 15px;
  text-align: center;
  font-size: 25px;
  color: rgb(0, 0, 0);
}

.card {
  font-size: 25px;
  color: black;
}

span {
  background-color: rgb(49, 49, 49);
  color: white;
}

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

@media (min-width: 320px) and (max-width: 425px) {
  .article {
    margin: 20px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 15px;
  }

  .card {
    font-size: 15px;
    text-align: center;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .article {
    margin: 20px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 20px;
  }

  .card {
    font-size: 15px;
    text-align: center;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
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
</style>
