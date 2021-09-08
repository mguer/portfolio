<template>
  <v-container>

    <v-row justify="space-between" class="pa-8">
      <v-avatar
          color="primary"
          size="30"
      ></v-avatar>
      <v-col md="12" class="d-flex justify-center bg-line">
        <h1>Projets webs <br> et graphiques</h1>
        <v-avatar
            color="primary"
            size="10"
        ></v-avatar>
      </v-col>
    </v-row>

    <v-row>
      <v-card
          col="6"
          class="mx-auto"
          max-width="344"
      >
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
        ></v-img>

        <v-card-title>
          Top western road trips
        </v-card-title>

        <v-card-subtitle>
          1,000 miles of wonder
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
              icon
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Projets"
}
</script>

<style scoped>
.bg-line {
  background-image: url("../assets/background/lignes.svg");
  background-size: contain;
  background-position: center;
}
</style>
