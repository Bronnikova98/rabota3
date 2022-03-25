<template>
  <div>
    <div class="banner_carousel">
      <VueSlickCarousel
        :slidesToShow="1"
        :dots="true"
        :arrows="true"
        :infinite="true"
        :autoplay="true"
        :autoplaySpeed="3000"
        :pauseOnDotsHover="true"
        :centerMode="true"
        :variableWidth="true"
      >
        <div>
          <img class="banner_carousel_img" src="@/assets/фото3.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото1.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото2.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото3.jpg" />
        </div>
        <div>
          <img class="banner_carousel_img" src="@/assets/фото1.jpg" />
        </div>
      </VueSlickCarousel>
    </div>
    <v-container class="welcome">
      <v-row>
        <v-col
          ><p class="welcome_title">
            Мои фотографии запечатлевают те драгоценные моменты, которые
            запечатлевает сердце, ту атмосферу, которую сердце помнит спустя
            десятилетия...
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="12" xl="4" lg="4" md="4" sm="4">
          <div>
            <img class="welcome_image" src="@/assets/фото4.jpg" />
          </div>
        </v-col>
        <v-col cols="12" xl="7" lg="7" md="7" sm="7"
          ><p class="welcome_text">
            Здравствуйте! Меня зовут Виктория Бронникова, я - профессиональный
            фотограф, уже 6 лет фотографирую для Вас
          </p></v-col
        >
      </v-row>
    </v-container>
    <div class="welcome_request">
      <v-row>
        <v-col
          ><p class="welcome_title">
            Напишите мне, и мы воплотим ваши идеи в реальность
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><p class="welcome_text_form">
            Заполните форму для записи, чтобы наша встреча состоялась
          </p></v-col
        >
      </v-row>
      <div class="welcome_form_input">
        <input class="text welcome_input" v-model="name" placeholder="Имя" />
      </div>
      <div class="welcome_form_input">
        <input class="text welcome_input" v-model="mail" placeholder="Email" />
      </div>
      <div class="welcome_form_input">
        <input
          class="text welcome_input_massage"
          v-model="text"
          placeholder="Сообщение для меня"
        />
      </div>
      <div class="welcome_form_button">
        <button class="welcome_form_button_send" @click="formpost()">
          Отправить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: { VueSlickCarousel },

  data: () => ({
    name: "",
    mail: "",
    text: "",
  }),
  methods: {
    formpost() {
      this.$axios.post("/server/post", {
        name: this.name,
        mail: this.mail,
        text: this.text,
      });
    },
  },
  mounted() {
    this.formpost();
  },
};
</script>

<style scoped>
.brend {
  width: 100%;
}

.brend_logo {
  width: 130px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.navigation {
  margin: 0;
  width: 100%;
}

.navigation_bar {
  list-style-type: none;
  overflow: hidden;
  background-color: white;
  text-align: center;
}

.navigation_bar_image_right {
  display: inline-block;
}

.navigation_bar_image_left {
  display: inline-block;
}

.navigation_bar_portfolio {
  display: inline-block;
  vertical-align: top;
}

.navigation_bar_portfolio a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-right: 60px;
  padding-left: 60px;
}

.navigation_bar_delimiter {
  display: inline-block;
  vertical-align: top;
}

.navigation_bar_price {
  display: inline-block;
  vertical-align: top;
}

.navigation_bar_price a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-left: 60px;
  padding-right: 200px;
}

.navigation_bar_about {
  display: inline-block;
  vertical-align: top;
}

.navigation_bar_about a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-right: 85px;
}

.navigation_bar_contacts {
  display: inline-block;
  vertical-align: top;
}

.navigation_bar_contacts a {
  text-align: center;
  color: black;
  text-decoration: none;
  font-size: 18px;
  font-family: Gothic A1;
  padding-left: 85px;
  padding-right: 60px;
}

.navigation_bar_image_left_branch1 {
  width: 40px;
}

.navigation_image_right_branch2 {
  width: 40px;
  transform: scale(-1, 1);
}

.navigation_bar_delimiter_dot_circle {
  width: 6px;
}

.navigation_bar_delimiter_dot {
  display: table-cell;
}

.slick-slider {
  max-height: 400px;
}

.banner_carousel {
  padding-top: 20px;
}

.banner_carousel_img {
  max-width: auto;
  max-height: 400px;
  border: 4px solid #fff;
}

.welcome {
  padding-top: 60px;
}

.welcome_title {
  font-family: Raleway;
  font-size: 28px;
  text-align: center;
}

.welcome_image {
  display: block;
  margin: 0 auto;
  max-width: 100%;

  padding-left: 20px;
}

.welcome_text {
  font-family: Raleway;
  font-size: 24px;
  padding-left: 20px;
}

.welcome_text_form {
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
}

.welcome_request {
  padding-top: 60px;
  background-color: #f5ecff;
}

.welcome_form_input {
  padding-top: 20px;
}

.welcome_input {
  height: 60px;
  display: block;
  border-radius: 6px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-family: Raleway;
  border: 2px solid black;
  background-color: white;
  width: 40%;
  padding-left: 10px;
}

.welcome_input_massage {
  display: block;
  border-radius: 6px;
  color: black;
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  font-family: Raleway;
  border: 2px solid black;
  height: 200px;
  background-color: white;
  width: 40%;
  padding-bottom: 120px;
  padding-left: 10px;
}

.welcome_form_button {
  display: block;
  padding-top: 40px;
  padding-bottom: 60px;
}

.welcome_form_button_send {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid black;
  background-color: white;
  border-radius: 30px;
  font-size: 24px;
  font-family: Raleway;
  width: auto;
  padding: 10px;
}

@media screen and (min-width: 950px) {
  .navigation_bar_icon {
    display: none;
  }
}

@media screen and (max-width: 950px) {
  .navigation_bar_image_right {
    display: none;
  }

  .navigation_bar_image_left {
    display: none;
  }

  .navigation_bar_portfolio {
    display: none;
  }

  .navigation_bar_delimiter {
    display: none;
  }

  .navigation_bar_price {
    display: none;
  }

  .navigation_bar_about {
    display: none;
  }

  .navigation_bar_contacts {
    display: none;
  }

  .navigation_bar_image_left_branch1 {
    display: none;
  }

  .navigation_bar_image_right_branch2 {
    display: none;
  }

  .navigation_bar_delimiter_dot {
    display: none;
  }

  .navigation_bar_icon {
    float: left;
    list-style-type: none;
    background-color: rgb(240, 238, 238);
    padding: 10px;
  }

  .navigation_bar_icon_panel {
    display: block;
    float: right;
    padding-top: 10px;
    padding-right: 40px;
    padding-bottom: 10px;
  }

  .navigation_bar_icon_panel_items {
    list-style-type: none;
    text-align: left;
  }

  .navigation_bar_icon_panel_items a {
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: Gothic A1;
  }
}

@media screen and (max-width: 1200px) {
  .navigation_bar_image_left_branch1 {
    display: none;
  }

  .navigation_bar_image_right_branch2 {
    display: none;
  }
}

@media screen and (max-width: 1000px) {
  .navigation_bar_delimiter_dot {
    display: none;
  }

  .slick-slider {
    max-height: 300px;
  }

  .banner_carousel_img {
    max-width: auto;
    max-height: 300px;
    border: 3px solid #fff;
  }
}

@media screen and (max-width: 400px) {
  .slick-slider {
    max-height: 200px;
  }

  .banner_carousel_img {
    max-width: auto;
    max-height: 200px;
    border: 2px solid #fff;
  }
}
</style>

