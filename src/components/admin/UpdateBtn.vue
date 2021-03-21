<template>
  <div>
    <b-button class="update" block squared variant="warning" size="sm" @click="$bvModal.show('update')">Izmeni</b-button>
    <b-modal id="update" hide-footer>
      <div class="d-block text-left">
        <form>
          <div class="form-group">
            <h5>Podaci o proizvodu</h5>

            <div class="form-group">
              <label for="image">Slika:</label>
              <div v-if="imageUpload">
                <img class="show_image" :src="imageUpload" />
              </div>
              <b-form-file class="mt-3" plain @change="processFile($event)"></b-form-file>
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
            <p class="error_label" v-if="error">Morate ispravno popuniti sva polja</p>
          </div>
        </form>
      </div>
      <b-button class="mt-3" block variant="warning" @click="updateKitchen">Izmeni</b-button>
    </b-modal>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  props: {
    id: String
  },
    data() {
    return {
      formData: {
        img: "",
        id: "",
        title: "",
        price: "",
      },
      error: false,
      productId: this.id
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
        imageUpload() {
      let imgUrl = this.$store.getters["image/imageUpload"];
      this.formData.img = imgUrl; // eslint-disable-line
      return imgUrl;
    },
  },
  methods: {
    updateKitchen() {
      if (!this.$v.$invalid) {
        this.$bvModal.hide("update");
        this.$store.dispatch("kitchen/updateKitchen", this.productId, this.formData);
        this.clearModal();
        this.clearImageUpload();
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    processFile(event) {
      let file = event.target.files[0];
      this.$store.dispatch("image/imageUpload", file);
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
  },
};
</script>

<style scoped>
.update {
  margin-top: 5px;
  margin-bottom: 10px;
}
</style>