<template>
  <v-app-bar
    app
    color="transparent"
    absolute
    flat
    class="gradient borderBottom"
  >
    <v-spacer></v-spacer>

    <router-link to="/home">
      <v-btn class="font-title" target="_blank" text>
        <span class="mr-2">Accueil</span>
        <!--      <v-icon>fas fa-external-link-alt</v-icon>-->
      </v-btn>
    </router-link>
    <router-link to="/about">
      <v-btn class="font-title" target="_blank" text>
        <span class="mr-2">À propos</span>
        <!--      <v-icon>fas fa-external-link-alt</v-icon>-->
      </v-btn>
    </router-link>

    <router-link to="/projet">
    <v-btn class="font-title" text>
      <span class="mr-2">Mes projets</span>
      <!--      <v-icon>fas fa-heart</v-icon>-->
    </v-btn>
    </router-link>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<script>
export default {
  name: "Menue",
};
</script>

<style scoped lang="scss">
.borderBottom {
  border-bottom: 8px solid;
  background: linear-gradient(
      to left,
      var(--v-primary-base),
      var(--v-accent-lighten1),
      var(--v-secondary-base)
    )
    left bottom no-repeat;
  background-size: 100% 5px; /* if linear-gradient, we need to resize it */
}

a {
  text-decoration: none;
}
</style>
