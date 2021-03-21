<template>
  <div class="container-fluid">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Header from './components/header-footer/Header';
import Footer from './components/header-footer/Footer';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
  created() {
    this.$store.dispatch('admin/refreshToken');
  }
}
</script>
