<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>O nama</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <img
            class="card-img-top embed-responsive-item"
            :src="image"
            alt="O nama"
          />
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>O nama</b>
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum nisi non lacus sodales lacinia. Integer in massa sit amet
            purus varius rhoncus. Maecenas auctor feugiat convallis. In quis
            nunc ullamcorper lorem tempor lacinia. Proin ornare quis ligula
            fringilla blandit. Integer id consequat velit. Proin tincidunt nec
            nulla non efficitur. Nunc consequat tortor eu nulla fringilla, sit
            amet malesuada ipsum tempor. Nunc neque eros, suscipit sed consequat
            at, viverra ut augue. Phasellus vel enim sem. Donec aliquet felis
            justo, a lobortis erat condimentum in.
          </div>
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