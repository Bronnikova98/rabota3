<template>
  <div class="footer">
    <div class="footer_icon">
      <nuxt-link to="#"
        ><img class="icon" src="@/assets/телефон.png" alt=""
      /></nuxt-link>

      <nuxt-link to="#"
        ><img class="icon" src="@/assets/вк.png" alt=""
      /></nuxt-link>

      <nuxt-link to="#"
        ><img class="icon" src="@/assets/инст.png" alt=""
      /></nuxt-link>
    </div>

    <div class="footer_sign">
      <v-row>
        <v-col
          ><p class="footer_text">
            Открыта к сотрудничеству и предложениям
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col
          ><p class="footer_text">
            (с) Фотограф Бронникова Виктория. Нижний тагил
          </p></v-col
        >
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basement",
};
</script>



<style scoped>
.footer {
  display: block;
  padding-top: 60px;
}

.footer_icon {
  display: block;
  text-align: center;
}

.icon {
  width: 80px;
  padding: 10px;
}

.footer_text {
  font-family: Raleway;
  font-size: 24px;
  text-align: center;
}

.footer_sign {
  padding-top: 40px;
  padding-bottom: 200px;
}
</style>
