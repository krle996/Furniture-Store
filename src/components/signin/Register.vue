<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5" style="height:79vh">
        <div class="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-10">
          <h2 class="text-center">Registracija</h2>
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="onSubmit">
                <div class="form-group" :class="{invalid: $v.formData.email.$error}">
                  <label for="email">E-adresa:</label>
                  <b-form-input
                    v-model.trim="formData.email"
                    @blur="$v.formData.email.$touch()"
                    type="email"
                    placeholder="Unesite e-adresu"
                  ></b-form-input>
                  <div v-if="$v.formData.email.$error">
                    <p
                      class="error_label"
                      v-if="!$v.formData.email.required"
                    >Morate popuniti ovo polje</p>
                    <p class="error_label" v-if="!$v.formData.email.email">Unesite ispravnu e-adresu</p>
                  </div>
                </div>
                <div class="form-group" :class="{invalid: $v.formData.password.$error}">
                  <label for="password">Lozinka:</label>
                  <b-form-input
                    v-model.trim="formData.password"
                    @blur="$v.formData.password.$touch()"
                    type="password"
                    placeholder="Unesite lozinku"
                  ></b-form-input>
                  <div v-if="$v.formData.password.$error">
                    <p
                      class="error_label"
                      v-if="!$v.formData.password.required"
                    >Morate popuniti ovo polje</p>
                    <p
                      class="error_label"
                      v-if="!$v.formData.password.minLength"
                    >Lozinka mora da sadrži najmanje 8 karaktera</p>
                  </div>
                </div>
                <div class="form-group" :class="{invalid: $v.formData.confirm.$error}">
                  <label for="password">Ponovite lozinku:</label>
                  <b-form-input
                    v-model.trim="formData.confirm"
                    @blur="$v.formData.confirm.$touch()"
                    type="password"
                    placeholder="Ponovo unesite lozinku"
                  ></b-form-input>
                  <div v-if="$v.formData.confirm.$error">
                    <p
                      class="error_label"
                      v-if="!$v.formData.confirm.required"
                    >Morate popuniti ovo polje</p>
                  </div>
                  <p class="error_label" v-if="error">Morate ispravno popuniti sva polja</p>
                  <p class="error_label" v-if="confirmError">Lozinke se ne poklapaju</p>
                </div>
                <b-button class="btn-sm" block variant="primary mt-4" type="submit">Registruj se</b-button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
        confirm: "",
      },
      error: false,
      confirmError: false,
    };
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
      confirm: {
        required,
      },
    },
  },
  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        if (this.formData.password === this.formData.confirm) {
          this.$store.dispatch("admin/register", this.formData);
        } else {
          this.confirmError = true;
          setTimeout(() => {
            this.confirmError = false;
          }, 3000);
        }
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.form-group.invalid input {
  border: 1px solid red;
}

.error_label {
  color: red;
}

@media (min-width: 320px) and (max-width: 425px) {
  .container {
    font-size: 10px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .container {
    font-size: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container {
    font-size: 14px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .container {
    font-size: 16px;
  }
}
</style>