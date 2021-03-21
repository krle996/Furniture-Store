<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <b-card
            :img-src="`${homeImage}`"
            img-alt="Card image"
            bg-variant="dark"
            text-variant="white"
          >
            <b-card-title class="title"> O nama </b-card-title>
            <b-card-text class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum nisi non lacus sodales lacinia. Integer in massa sit
              amet purus varius rhoncus. Maecenas auctor feugiat convallis. In
              quis nunc ullamcorper lorem tempor lacinia.
              <router-link to="/o-nama"
                ><span>Više o ovome ovde..</span>.</router-link
              >
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../../assets/pictures/home/o_nama.jpg";

export default {
  data() {
    return {
      homeImage: Image,
    };
  },
};
</script>

<style scoped>
.main {
  background-color: rgb(25, 103, 134);
  font-family: "Kumbh Sans", sans-serif;
}

@media (min-width: 320px) and (max-width: 425px) {
  .main {
    margin: 14px;
    padding: 14px;
  }

  .title {
    font-size: 12px;
  }

  .content {
    font-size: 10px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .main {
    margin: 24px;
    padding: 24px;
  }

  .title {
    font-size: 16px;
  }

  .content {
    font-size: 12px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main {
    margin: 34px;
    padding: 34px;
  }

  .title {
    font-size: 20px;
  }

  .content {
    font-size: 14px;
  }
}

@media (min-width: 1025px) {
  .main {
    margin: 48px;
    padding: 48px;
  }

  .title {
    font-size: 24px;
  }

  .content {
    font-size: 16px;
  }
}
</style>