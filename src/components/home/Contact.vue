<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col">
          <div class="category">
            <span>
              <b>Kontakt</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
        <div class="image embed-responsive embed-responsive-4by3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4876.658832301526!2d20.926377031366503!3d44.66765488534445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475093915a383051%3A0xdbd92a0041b0e5b6!2sAURORA!5e0!3m2!1ssr!2srs!4v1599420326355!5m2!1ssr!2srs"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="article">
          <div class="title">
            <b>Kontakt</b>
          </div>
          <div class="text">
            <b>Adresa:</b>
            <br />Save Nemanjića 6, 11300 Smederevo
          </div>
          <div class="text">
            <b>Broj telefona:</b>
            <br />026 65 02 055 <br />+381 (64) 4 616 398
          </div>
          <div class="text">
            <b>Radno vreme:</b>
            <br />Radnim danima od 08:00h do 21:00h
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
    font-family: "Kumbh Sans", sans-serif;
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