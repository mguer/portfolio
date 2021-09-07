<template>
  <v-card>
    <v-card-title class="mt-5">
      <h2>Outils</h2>
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
  name: "SoftsSkillz",
  data: () => ({
    technologies: [
      {
        name: "Jira",
        lvl: "75",
      },
      {
        name: "Trello",
        lvl: "80",
      },
      {
        name: "Git",
        lvl: "90",
      },
      {
        name: "PHP Storm",
        lvl: "70",
      },
      {
        name: "BitBucket",
        lvl: "70",
      },
    ],
  }),
}
</script>

<style scoped>

</style>
