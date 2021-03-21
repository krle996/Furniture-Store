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
            <b-card-title class="title"> Nameštaj po meri </b-card-title>
            <b-card-text class="content">
              Mauris facilisis vel sem dignissim aliquam. Curabitur dapibus
              magna mattis arcu facilisis, congue semper justo auctor. Quisque
              tempus sollicitudin magna vel pulvinar.
              <router-link to="/nameštaj-po-meri"
                >Više o ovome ovde...</router-link
              >
            </b-card-text>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Image from "../../assets/pictures/home/custom_furniture.gif";

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