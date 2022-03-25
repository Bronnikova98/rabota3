<template>
  <div>
    <div>
      <nuxt-link to="/">
        <img class="brend_logo" src="@/assets/Лого.png"
      /></nuxt-link>
    </div>
    <div class="navigation">
      <ul class="navigation_bar">
        <li class="navigation_bar_portfolio">
          <nuxt-link to="bum">Портфолио</nuxt-link>
        </li>

        <li class="navigation_bar_price">
          <nuxt-link to="price">Стоимость</nuxt-link>
        </li>

        <li class="navigation_bar_about">
          <nuxt-link to="about">Обо мне</nuxt-link>
        </li>

        <li class="navigation_bar_contacts">
          <nuxt-link to="contacts">Контакты</nuxt-link>
        </li>

        <v-card>
          <li class="navigation_bar_icon">
            <nav>
              <transition name="fade" mode="out-in">
                <i
                  class="material-icons navigation_bar_icon_menu"
                  v-if="!show"
                  @click="show = !show"
                  key="menu"
                  >menu</i
                >

                <i
                  class="material-icons navigation_bar_icon_clear"
                  v-else
                  @click="show = !show"
                  key="clear"
                  >clear</i
                >
              </transition>
              <transition name="fade">
                <ul class="navigation_bar_icon_panel" v-if="show">
                  <li
                    class="navigation_bar_icon_panel_items"
                    v-for="item in items"
                    :key="item"
                  >
                    <a :href="item.path">{{ item.src }}</a>
                  </li>
                </ul>
              </transition>
            </nav>
          </li>
        </v-card>
      </ul>
    </div>
    <div class="divide"></div>
  </div>
</template>


<script>
export default {
  name: "Navbar",
  data: () => ({
    items: [
      { src: "Портфолио", path: "/portfolio" },
      { src: "Стоимость", path: "/price" },
      { src: "Обо мне", path: "/about" },
      { src: "Контакты", path: "/contacts" },
    ],

    show: false,
  }),
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

/* .navigation_bar_image_right {
  display: inline-block;
}

.navigation_bar_image_left {
  display: inline-block;
} */

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

/* .navigation_bar_delimiter {
  display: inline-block;
  vertical-align: top;
} */

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

/* .navigation_bar_image_left_branch1 {
  width: 40px;
}

.navigation_image_right_branch2 {
  width: 40px;
  transform: scale(-1, 1);
} */

/* .navigation_bar_delimiter_dot_circle {
  width: 6px;
}

.navigation_bar_delimiter_dot {
  display: table-cell;
} */

@media screen and (min-width: 950px) {
  .navigation_bar_icon {
    display: none;
  }
}

@media screen and (max-width: 950px) {
  /* .navigation_bar_image_right {
    display: none;
  }

  .navigation_bar_image_left {
    display: none;
  } */

  .navigation_bar_portfolio {
    display: none;
  }

  /* .navigation_bar_delimiter {
    display: none;
  } */

  .navigation_bar_price {
    display: none;
  }

  .navigation_bar_about {
    display: none;
  }

  .navigation_bar_contacts {
    display: none;
  }

  /* .navigation_bar_image_left_branch1 {
    display: none;
  }

  .navigation_bar_image_right_branch2 {
    display: none;
  }

  .navigation_bar_delimiter_dot {
    display: none;
  } */

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

/* @media screen and (max-width: 1200px) {
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

  
} */
</style>