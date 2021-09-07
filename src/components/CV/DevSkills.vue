<template>
  <v-card>
    <v-card-title class="mt-5">
      <h2>Développement <br> web</h2>
    </v-card-title>
    <v-card-text>
      <div
        v-for="technology in technologies"
        :key="technology.name"
        class="d-flex justify-space-between align-center ma-1"
      >
        <v-chip>{{technology.name}}</v-chip>
        <v-progress-linear
          rounded
          :value="technology.lvl"
          style="width: 70%"
        ></v-progress-linear>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "DevSkills",
  data: () => ({
    technologies: [
      {
        name: "VueJs",
        lvl: "85",
      },
      {
        name: "Vuetify",
        lvl: "90",
      },
      {
        name: "Symfony",
        lvl: "70",
      },
      {
        name: "ApiPlatform",
        lvl: "80",
      },
    ],
  }),
};
</script>

<style scoped></style>
