<template>
  <v-card>
    <v-card-title class="mt-5">
      <h2>Infographie</h2>
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
  name: "GraphicsSkills",
  data: () => ({
    technologies: [
      {
        name: "Figma",
        lvl: "75",
      },
      {
        name: "Illustrator",
        lvl: "80",
      },
      {
        name: "Indesign",
        lvl: "90",
      },
      {
        name: "Adobe XD",
        lvl: "70",
      },
      {
        name: "Photoshop",
        lvl: "70",
      },
    ],
  }),
}
</script>

<style scoped>

</style>
