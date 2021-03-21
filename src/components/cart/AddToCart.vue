<template>
  <div>
    <b-button
      squared
      variant="primary"
      size="sm"
      @click="addToCart"
    >Dodaj u korpu
    </b-button>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    price: Number,
    category: String,
    img: String
  },
  data() {
    return {
      product: {
        productId: this.id,
        productCategory: this.category,
        productTitle: this.title,
        productPrice: this.price,
        productQuantity: 1,
        productImg: this.img
      },
    };
  },
  methods: {
    addToCart() {
      this.$store.commit("cart/addToCart", this.product);
      window.alert("Proizvod je dodat u korpu");
    },
  },
};
</script>
