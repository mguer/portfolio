<template>
  <v-container>
    <v-row justify="space-between" class="pa-8">
      <v-avatar color="primary" size="30"></v-avatar>
      <v-col class="d-flex justify-center bg-line">
        <h1>
          {{ project.title }}
        </h1>
        <v-avatar color="primary" size="10"></v-avatar>
      </v-col>
    </v-row>

    <v-row justify="center" class="pa-8">
      <h3 class="font-under-title">{{ project.resume }}</h3>
    </v-row>

    <v-row justify="center mb-10">
      <v-chip
        color="primary"
        size="30"
        class="ma-1"
        v-for="technology in project.technologies"
        :key="technology + project.id"
      >
        {{ technology }}
      </v-chip>
    </v-row>

    <v-row>
      <v-col
        class="
          col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12
          d-flex
          justify-center
          align-center
          pa-8
        "
      >
        <p>{{ project.details }}</p>
      </v-col>
      <v-col
        class="
          col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12
          d-flex
          justify-center
          align-center
        "
      >
        <div class="scale gradient"></div>
        <v-img
          :lazy-src="
            require(`../../public/img/ProjectImg/${project.mockupImg}`)
          "
          :src="require(`../../public/img/ProjectImg/${project.mockupImg}`)"
          aspect-ratio="1"
          max-width="300"
          max-height="200"
          :alt="`Mockups projet ${project.title} ${project.year} maquettes`"
        ></v-img>
      </v-col>
    </v-row>

    <v-row class="mt-10" v-if="project.links">
      <v-col class="d-flex justify-center bg-line">
        <h2>
         Les liens du projet
        </h2>
        <v-avatar color="primary" size="10"></v-avatar>
      </v-col>
      <v-col class="col-12 d-flex justify-space-around">
        <v-btn
          v-for="(value, link) in project.links"
          :key="link"
          rounded
          :href="value"
          color="primary"
          class="ma-1 font-title"
        >
          {{ link }}
          <v-icon class="ma-1"> fas fa-external-link-alt </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mt-10">
      <v-col
        class="col-12 d-flex justify-center align-center"
        v-if="project.bigImg"
      >
        <v-img
          :lazy-src="require(`../../public/img/ProjectImg/${project.bigImg}`)"
          :src="require(`../../public/img/ProjectImg/${project.bigImg}`)"
          contain
        ></v-img>
      </v-col>
      <v-col
        class="
          col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12
          d-flex
          justify-center
          align-center
          pa-8
        "
      >
        <p>{{ project.goal }}</p>
      </v-col>
      <v-col
        class="
          col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12
          d-flex
          justify-center
          align-center
          pa-8
        "
      >
        <p>{{ project.realisation }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="img in project.imgs"
        :key="img"
        class="d-flex child-flex col-sm-4 col-md-4 col-lg-4 col-xl-4 col-6"
      >
        <v-img
          :src="require(`../../public/img/ProjectImg/${img}`)"
          :lazy-src="require(`../../public/img/ProjectImg/${img}`)"
          aspect-ratio="1"
        >
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import data from "../assets/db/projects.json";

export default {
  name: "Projet",
  data() {
    return {
      project: data.projects[this.$route.params.id - 1],
    };
  },
};
</script>

<style scoped>
.scale {
  height: 120px;
  width: 40%;
  position: absolute;
}

@media screen and (max-width: 600px) {
  .scale {
    width: 100%;
  }
}
</style>
