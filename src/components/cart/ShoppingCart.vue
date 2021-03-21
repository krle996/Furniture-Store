<template>
  <div>
    <div style="height:300vh">
      <div class="cart-fill" v-if="isEmpty">
        Vaša korpa
        <b-icon icon="basket-fill"></b-icon>
      </div>
      <div class="cart-empty" v-if="!isEmpty">
        Vaša korpa je prazna
        <b-icon icon="basket"></b-icon>
      </div>
      <div class="msg" v-if="welcomeMsg">
        <b-alert variant="success" show>Dobro došli! Od sada možete da kupujete online</b-alert>
      </div>
      <div class="msg" v-if="buyMsg">
        <b-alert variant="success" show>Kupovina uspešno izvršena!</b-alert>
      </div>
      <div class="table-responsive">
        <table v-if="isEmpty" class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ukloni</th>
              <th scope="col">Šifra</th>
              <th scope="col">Slika</th>
              <th scope="col">Kategorija</th>
              <th scope="col">Naziv</th>
              <th scope="col">Količina</th>
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(product, index) in cart" :key="index">
              <td data-label="#">{{ index+1 }}</td>
              <td data-label="Ukloni">
                <b-button squared variant="primary" size="sm" @click="removeProduct(product)">
                  <b-icon icon="trash"></b-icon>
                </b-button>
              </td>
              <td data-label="Šifra">{{ product.productId }}</td>
              <td data-label="Slika">
                <img class="img" :src="product.productImg" />
              </td>
              <td data-label="Kategorija">{{ product.productCategory }}</td>
              <td data-label="Naziv">{{ product.productTitle }}</td>
              <td data-label="Količina">
                <b-button
                  pill
                  :disabled="product.productQuantity <=1"
                  squared
                  variant="primary"
                  size="sm"
                  @click="decrementQuantity(product.productId)"
                >
                  <b-icon icon="dash"></b-icon>
                </b-button>
                {{ product.productQuantity }}
                <b-button
                  pill
                  squared
                  variant="primary"
                  size="sm"
                  @click="incrementQuantity(product.productId)"
                >
                  <b-icon icon="plus"></b-icon>
                </b-button>
              </td>
              <td
                data-label="Cena"
              >{{ numberWithCommas(product.productPrice * product.productQuantity) }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="isEmpty" class="total">
          <h5>Ukupna cena:</h5>
        </div>
        <div v-if="isEmpty" class="total">
          <h5>{{ numberWithCommas(totalPrice) }} RSD</h5>
        </div>
      </div>
      <b-button
        v-if="isEmpty"
        class="clear"
        squared
        variant="primary"
        size="sm"
        @click="cleanCart"
      >Isprazni korpu</b-button>
      <b-button
        v-if="isEmpty"
        class="buy"
        squared
        variant="primary"
        size="sm"
        @click="$bvModal.show('buy')"
      >Potvrdi kupovinu</b-button>
      <b-modal id="buy" hide-footer>
        <div class="d-block text-left">
          <form>
            <div class="form-group">
              <h5>Podaci o kupcu</h5>
              <div class="form-group" :class="{invalid: $v.formData.name.$error}">
                <label for="name">Ime:</label>
                <b-form-input
                  v-model.trim="formData.name"
                  @blur="$v.formData.name.$touch()"
                  type="text"
                  placeholder="Unesite ime"
                ></b-form-input>
                <div v-if="$v.formData.name.$error">
                  <p class="error_label" v-if="!$v.formData.name.required">Morate popuniti ovo polje</p>
                </div>
              </div>

              <div class="form-group" :class="{invalid: $v.formData.lastname.$error}">
                <label for="lastname">Prezime:</label>
                <b-form-input
                  v-model.trim="formData.lastname"
                  @blur="$v.formData.lastname.$touch()"
                  type="text"
                  placeholder="Unesite prezime"
                ></b-form-input>
                <div v-if="$v.formData.lastname.$error">
                  <p
                    class="error_label"
                    v-if="!$v.formData.lastname.required"
                  >Morate popuniti ovo polje</p>
                </div>
              </div>

              <div class="form-group" :class="{invalid: $v.formData.phone.$error}">
                <label for="phone">Broj telefona:</label>
                <b-form-input
                  v-model.trim="formData.phone"
                  @blur="$v.formData.phone.$touch()"
                  type="text"
                  placeholder="Unesite broj telefona"
                ></b-form-input>
                <div v-if="$v.formData.phone.$error">
                  <p
                    class="error_label"
                    v-if="!$v.formData.phone.required"
                  >Morate popuniti ovo polje</p>
                </div>
              </div>

              <div class="form-group" :class="{invalid: $v.formData.address.$error}">
                <label for="address">Adresa:</label>
                <b-form-input
                  v-model.trim="formData.address"
                  @blur="$v.formData.address.$touch()"
                  type="text"
                  placeholder="Unesite adresu"
                ></b-form-input>
                <p>* Pored adrese unesite i naziv grada</p>
                <div v-if="$v.formData.address.$error">
                  <p
                    class="error_label"
                    v-if="!$v.formData.address.required"
                  >Morate popuniti ovo polje</p>
                </div>
              </div>
              <p class="error_label" v-if="error">Morate ispravno popuniti sva polja</p>
            </div>
          </form>
          <hr />
          <h5>Proizvodi</h5>
          <ul v-for="(product, index) in cart" :key="index">
            <li>Naziv: {{ product.productTitle }}</li>
            <li>Kategorija: {{ product.productCategory }}</li>
            <li>Količina: {{ product.productQuantity }}</li>
            <li>Cena: {{ numberWithCommas(product.productPrice) }} RSD</li>
            <hr />
          </ul>
          <ul>
            <li>Ukupna cena: {{ numberWithCommas(totalPrice) }} RSD</li>
          </ul>
        </div>
        <b-button class="mt-3" block variant="primary" @click="orderProducts">Potvrdite kupovinu</b-button>
        <b-button class="mt-3" block variant="danger" @click="closeModal">Odustani</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      formData: {
        name: "",
        lastname: "",
        phone: "",
        address: "",
        date: new Date()
      },
      error: false,
    };
  },
  validations: {
    formData: {
      name: {
        required,
      },
      lastname: {
        required,
      },
      phone: {
        required,
      },
      address: {
        required,
      },
    },
  },
  computed: {
    cart() {
      return this.$store.getters["cart/addToCart"];
    },
    isEmpty() {
      return this.$store.getters["cart/isEmpty"];
    },
    totalPrice() {
      return this.$store.getters["cart/totalPrice"];
    },
    welcomeMsg() {
      return this.$store.state.admin.msg;
    },
    buyMsg() {
      return this.$store.state.cart.msg;
    },
  },
  methods: {
    cleanCart() {
      this.$store.commit("cart/cleanCart");
    },
    removeProduct(product) {
      this.$store.commit("cart/removeProduct", product);
    },
    incrementQuantity(id) {
      this.$store.commit("cart/incrementQuantity", id);
    },
    decrementQuantity(id) {
      this.$store.commit("cart/decrementQuantity", id);
    },
    orderProducts() {
      if (!this.$v.$invalid) {
        this.$bvModal.hide("buy");
        this.$store.dispatch("cart/orderProducts", this.formData);
      } else {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    },
    closeModal() {
      this.$bvModal.hide("buy");
      this.$v.$reset();
    },
    numberWithCommas(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  },
};
</script>

<style scoped>
.img {
  width: 80px;
  height: 70px;
}

.form-group.invalid input {
  border: 1px solid red;
}

.error_label {
  color: red;
}

.total {
  text-align: right;
  padding-right: 10px;
}

.buy {
  float: right;
}

.clear {
  float: left;
}

.cart-fill {
  font-size: 24px;
  text-align: center;
  margin: 15px;
}

.cart-empty {
  font-size: 24px;
  text-align: center;
  margin: 15px;
}

.msg {
  font-size: 20px;
  text-align: center;
}

th,
td {
  text-align: center;
}

thead th {
  background-color: #999;
  color: white;
}

.table {
  width: 100%;
  border-collapse: collapse;
}

/*responsive*/

@media (min-width: 320px) and (max-width: 425px) {
  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }
  .table tr {
    margin-bottom: 15px;
  }
  .table td {
    text-align: center;
    padding-left: 50%;
    text-align: center;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }

  .cart-fill {
    font-size: 16px;
  }

  .cart-empty {
    font-size: 16px;
  }

  .msg {
    font-size: 12px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .table thead {
    display: none;
  }

  .table,
  .table tbody,
  .table tr,
  .table td {
    display: block;
    width: 100%;
  }
  .table tr {
    margin-bottom: 15px;
  }
  .table td {
    text-align: center;
    padding-left: 50%;
    text-align: center;
    position: relative;
  }
  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 50%;
    padding-left: 15px;
    font-size: 15px;
    font-weight: bold;
    text-align: left;
  }

  .cart-fill {
    font-size: 16px;
  }

  .cart-empty {
    font-size: 16px;
  }

  .msg {
    font-size: 14px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .cart-fill {
    font-size: 20px;
  }

  .cart-empty {
    font-size: 20px;
  }

  .msg {
    font-size: 18px;
  }
}
</style>