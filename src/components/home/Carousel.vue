<template>
  <div>
    <b-carousel
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333"
    >
      <b-carousel-slide
        v-for="(slide, index) in slides"
        :key="index"
        :img-src="`${slide.bck}`"
        :caption="`${slide.text}`"
      >
        <b-button :to="`${slide.link}`" squared variant="primary" size="sm"
          >Pogledajte više</b-button
        >
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import Image1 from "../../assets/pictures/carousel/1.jpg";
import Image2 from "../../assets/pictures/carousel/2.jpg";
import Image3 from "../../assets/pictures/carousel/3.jpg";

export default {
  data() {
    return {
      slides: [
        {
          bck: Image1,
          text: "Dnevna soba",
          link: "/proizvodi/dnevna-soba",
        },
        {
          bck: Image2,
          text: "Kuhinja",
          link: "/proizvodi/kuhinje",
        },
        {
          bck: Image3,
          text: "Spavaća soba",
          link: "/proizvodi/spavaća-soba",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 70em;
}
</style>