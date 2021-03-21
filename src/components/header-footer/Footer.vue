<template>
  <footer>
    <div class="row">
      <div v-if="!isAuth" class="account col-sm-4">
        <div class="title">
          <b>Moj nalog</b>
        </div>
        <router-link to="/login" tag="span">Login</router-link>
        <br />
        <router-link to="/registracija" tag="span">Registracija</router-link>
      </div>
      <div v-if="isAuth" class="account col-sm-4">
        <div class="title">
          <b>Moj nalog</b>
        </div>
        <router-link v-if="!isAdmin" to="/korpa" tag="span">
          Korpa
        </router-link>
        <br />
        <span @click="logout">Logout</span>
      </div>
      <div class="products col-sm-4">
        <div class="title">
          <b>Proizvodi</b>
        </div>
        <router-link to="/proizvodi/dnevna-soba" tag="span"
          >Dnevna soba</router-link
        >
        <br />
        <router-link to="/proizvodi/spavaća-soba" tag="span"
          >Spavaća soba</router-link
        >
        <br />
        <router-link to="/proizvodi/kuhinje" tag="span">Kuhinja</router-link>
        <br />
        <router-link to="/proizvodi/trpezarija" tag="span"
          >Trpezarija</router-link
        >
        <br />
        <router-link to="/proizvodi/kancelarija" tag="span"
          >Kancelarija</router-link
        >
      </div>
      <div class="info col-sm-4">
        <div class="title">
          <b>Informacije</b>
        </div>
        <router-link to="/o-nama" tag="span">O nama</router-link>
        <br />
        <router-link to="/nameštaj-po-meri" tag="span"
          >Nameštaj po meri</router-link
        >
        <br />
        <router-link to="/kontakt" tag="span">Kontakt</router-link>
      </div>
      <div class="copyright col-sm-12">
        Copyright © Furniture Store 2020 Sva prava zadržana
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    isAuth() {
      return this.$store.getters["admin/isAuth"];
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
footer {
  background-color: rgb(0, 125, 250);
}

.row {
  text-align: center;
}

.info,
.products,
.account,
.cart {
  float: left;
  margin: 15px 0px 10px;
  color: white;
  font-size: 16px;
}

.title {
  font-size: 18px;
  color: rgb(0, 0, 0);
}

.copyright {
  margin: 15px 0px 15px;
  font-size: 13px;
  color: white;
}

span {
  cursor: pointer;
}

span:hover {
  opacity: 0.5;
}

@media (min-width: 320px) and (max-width: 425px) {
  .title {
    font-size: 14px;
  }

  .info,
  .products,
  .account {
    margin: 9px 0px 10px;
    color: white;
    font-size: 12px;
  }

  .copyright {
    margin: 9px 0px 15px;
    font-size: 7px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .title {
    font-size: 14px;
  }

  .info,
  .products,
  .account {
    margin: 11px 0px 10px;
    color: white;
    font-size: 12px;
  }

  .copyright {
    margin: 11px 0px 15px;
    font-size: 9px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .title {
    font-size: 16px;
  }

  .info,
  .products,
  .account {
    margin: 13px 0px 10px;
    color: white;
    font-size: 14px;
  }

  .copyright {
    margin: 13px 0px 15px;
    font-size: 11px;
  }
}
</style>