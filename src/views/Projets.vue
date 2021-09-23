<template>
  <v-container>
    <v-row justify="space-between" class="pa-8">
      <v-avatar color="primary" size="30"></v-avatar>
      <v-col md="12" class="d-flex justify-center bg-line">
        <h1>
          Projets webs <br />
          et graphiques
        </h1>
        <v-avatar color="primary" size="10"></v-avatar>
      </v-col>
    </v-row>

    <v-row class="justify-center">
      <v-card
        v-for="project in projects"
        :key="project.id + project.title"
        col="6"
        class="ma-5"
        max-width="344"
      >
        <v-img
          :src="require(`../../public/img/ProjectImg/${project.coverSrc}`)"
          :lazy-src="require(`../../public/img/ProjectImg/${project.coverSrc}`)"
          height="200px"
        ></v-img>

        <v-card-title>
          <h3 class="mr-2">
            {{ project.title }}
          </h3>
          <br />

          <v-tooltip
            top
            v-for="(icone, value) in project.icones"
            :key="icone + project.title"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-chip v-bind="attrs" v-on="on" color="primary" class="ma-1">
                <v-icon>
                  {{ icone }}
                </v-icon>
              </v-chip>
            </template>
            <span>{{ value }}</span>
          </v-tooltip>
        </v-card-title>
        <v-card-subtitle class="mt-1">
          <p>{{ project.resume }}</p>
          <router-link :to="{ name: 'Projet', params: { id: project.id }}">
          <v-btn color="primary" rounded class="font-title">
            Voir
          </v-btn>
          </router-link>
        </v-card-subtitle>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import data from "../assets/db/projects.json";

export default {
  name: "Projets",
  data() {
    return {
      projects: data.projects,
    };
  },
};
</script>

<style scoped>
</style>
