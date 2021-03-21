<template>
  <div>
    <div>
      <div class="login_section text-right">
        <div v-if="!isAuth">
          <router-link style="text-decoration: none" to="/login"
            >Login </router-link
          >|
          <router-link style="text-decoration: none" to="/registracija"
            >Registracija</router-link
          >
        </div>
        <div v-if="isAuth">
          <router-link
            v-if="!isAdmin"
            style="text-decoration: none"
            to="/korpa"
          >
            Korpa
            <b-badge pill variant="primary">{{ productCount }}</b-badge>
          </router-link>
          |
          <span @click="logout">Logout</span>
        </div>
      </div>
      <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="logo" to="/">Furniture Store</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item to="/">Početna</b-nav-item>

              <!-- Navbar dropdowns -->
              <b-nav-item-dropdown text="Proizvodi" right>
                <b-dropdown-item to="/proizvodi/dnevna-soba"
                  >Dnevna soba</b-dropdown-item
                >
                <b-dropdown-item to="/proizvodi/spavaća-soba"
                  >Spavaća soba</b-dropdown-item
                >
                <b-dropdown-item to="/proizvodi/kuhinje"
                  >Kuhinja</b-dropdown-item
                >
                <b-dropdown-item to="/proizvodi/trpezarija"
                  >Trpezarija</b-dropdown-item
                >
                <b-dropdown-item to="/proizvodi/kancelarija"
                  >Kancelarija</b-dropdown-item
                >
              </b-nav-item-dropdown>

              <b-nav-item to="/o-nama">O nama</b-nav-item>
              <b-nav-item to="/nameštaj-po-meri">Nameštaj po meri</b-nav-item>
              <b-nav-item to="/kontakt">Kontakt</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["admin/isAuth"];
    },
    productCount() {
      return this.$store.state.cart.count;
    },
    isAdmin() {
      return this.$store.state.admin.isAdmin;
    },
  },
  methods: {
    logout() {
      this.$store.commit("admin/logout");
    },
  },
};
</script>

<style scoped>
div {
  font-family: "Kodchasan", sans-serif;
  font-size: 16px;
}

span {
  cursor: pointer;
}

.login_section {
  color: rgb(66, 134, 254);
}

@media (min-width: 320px) and (max-width: 425px) {
  .logo {
    font-size: 17px;
  }
}
</style>