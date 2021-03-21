<template>
  <div>
    <div class="container">
      <div class="row justify-content-center mt-5" style="height:79vh">
        <div class="col-xl-6 col-lg-6 col-md-7 col-sm-8 col-10">
          <h2 class="text-center">Login</h2>
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
                  </div>
                  <p class="error_label" v-if="error">Morate ispravno popuniti sva polja</p>
                  <p class="error_label" v-if="authFailed">Pogrešna e-adresa ili lozinka</p>
                </div>
                <b-button class="btn-sm" block variant="primary mt-4" type="submit">Login</b-button>
              </form>
            </div>
          </div>
          <div class="text-center">
          Nemate nalog?
            <router-link to="/registracija">Registrujte se ovde</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      error: false,
    };
  },
  computed: {
    authFailed() {
      return this.$store.state.admin.authFailed;
    },
  },
  destroyed() {
    this.$store.commit("admin/authFailed", "reset");
  },
  validations: {
    formData: {
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        this.$store.dispatch("admin/login", this.formData);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    isAdmin() {
      this.$store.commit("admin/isAdmin", this.formData);
    },
    resetPassword() {

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