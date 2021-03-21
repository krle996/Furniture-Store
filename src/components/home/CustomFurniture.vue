<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>Nameštaj po meri</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <b-img
            class="card-img-top embed-responsive-item"
            :src="image"
            alt="404"
            fluid
          ></b-img>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>Nameštaj po meri</b>
          </div>
          <div class="text">
            Mauris facilisis vel sem dignissim aliquam. Curabitur dapibus magna
            mattis arcu facilisis, congue semper justo auctor. Quisque tempus
            sollicitudin magna vel pulvinar. Curabitur mattis ipsum sapien, eu
            facilisis tortor suscipit id. Integer at lacus sed diam viverra
            consectetur. Quisque in risus vel tortor pretium gravida vitae sed
            est. Vestibulum sit amet molestie mi, sit amet gravida elit. Morbi
            finibus arcu ut sem gravida commodo at vel risus. Etiam dapibus,
            velit a iaculis ullamcorper, velit mauris euismod augue, nec cursus
            mi ante a lectus. Nam ullamcorper tempus ullamcorper.
          </div>
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
      image: Image,
    };
  },
};
</script>

<style scoped>
.embed-responsive .card-img-top {
  object-fit: cover;
}

.main {
  background-color: rgb(95, 95, 95);
  margin: 45px;
  padding: 45px;
}

.category {
  font-size: 40px;
  text-align: left;
  color: white;
}

.article {
  background-color: rgb(187, 187, 187);
  margin: 30px 0px 30px;
  padding: 30px;
  font-family: "Kumbh Sans", sans-serif;
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.text {
  font-size: 17px;
  margin-bottom: 20px;
}

.image {
  margin: 20px 0px 20px 0px;
}

span {
  background-color: rgb(49, 49, 49);
}

@media (min-width: 320px) and (max-width: 425px) {
  .main {
    margin: 14px;
    padding: 14px;
  }

  .image {
    margin-bottom: 0px;
  }

  .category {
    font-size: 20px;
    text-align: center;
  }

  .col {
    font-size: 15px;
  }

  .article {
    margin: 20px 0px 20px;
    padding: 15px;
  }

  .title {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .text {
    font-size: 10px;
    margin-bottom: 10px;
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .main {
    margin: 20px;
    padding: 20px;
  }

  .image {
    margin-bottom: 20px;
  }

  .category {
    font-size: 25px;
    text-align: center;
  }

  .col {
    font-size: 20px;
  }

  .article {
    margin: 20px 0px 20px;
    padding: 20px;
  }

  .title {
    font-size: 19px;
    margin-bottom: 15px;
  }

  .text {
    font-size: 11px;
    margin-bottom: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main {
    margin: 30px;
    padding: 30px;
  }

  .image {
    margin-bottom: 30px;
  }

  .category {
    font-size: 35px;
  }

  .col {
    font-size: 25px;
  }

  .article {
    margin: 20px 0px 20px;
    padding: 25px;
  }

  .title {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .text {
    font-size: 14px;
    margin-bottom: 15px;
  }
}
</style>