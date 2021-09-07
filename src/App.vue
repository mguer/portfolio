<template>
  <v-app>
    <Menue></Menue>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menue from "./components/Menue";
export default {
  name: "App",
  components: { Menue },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,600;1,100&display=swap");

$title-font: "Poppins";
$under-title-font: "Poppins";
$body-font: "Poppins";

.v-application {
  h1 {
    font-family: $title-font, sans-serif !important;
    font-weight: bold;
    font-size: 2.5rem;
  }
  h2,
  h3,
  h4 {
    font-family: $title-font, sans-serif !important;
    font-weight: bold;
    font-size: 2rem;
  }
  p,
  a {
    font-family: $body-font, sans-serif !important;
  }
  .card-title {
    font-family: $title-font, sans-serif !important;
    font-size: 2rem;
  }
}
// Classes for casuals overrides fonts -------------------------------
.font-title {
  font-family: $title-font, cursive !important;
  font-weight: bold;
  text-transform: none !important;
  font-size: 3rem;
}

.font-body {
  font-family: $title-font !important;
}

.font-under-title {
  font-family: $under-title-font !important;
  font-style: italic;
}

//Gradient

.gradient {
  background: linear-gradient(
  to right,
    var(--v-primary-base),
    var(--v-primary-darken1),
    var(--v-secondary-base)
  );
}

html {
  overflow-y: auto !important;
}

.h-100{
  height: 100vh;
}
.w-100{
  width: 100vw;
}
</style>
