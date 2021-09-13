<template>
  <v-container>
    <v-row justify="space-between" class="pa-8">
      <v-avatar color="primary" size="30"></v-avatar>
      <v-col md="12" class="d-flex justify-center bg-line">
        <h1>
          Marianne Guerrero <br />
          développeuse web
        </h1>
        <v-avatar color="primary" size="10"></v-avatar>
      </v-col>
      <v-col md="6" class="d-flex justify-center align-center">
        <v-avatar size="250" class="mt-8">
          <img
            src="data:image/jpeg;base64,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"
            alt="Marianne Guerrero Développeuse web Lyon"
        /></v-avatar>
        <div class="d-flex mb-16">
          <v-avatar color="primary" size="20"></v-avatar>
          <v-avatar color="secondary" size="80"></v-avatar>
        </div>
      </v-col>
      <v-col
        class="
          d-flex
          justify-center
          flex-column
          col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12
        "
      >
        <p>
          Bonjour ! Je suis Marianne, développeuse web créative basée sur la
          région Lyonnaise. <br />
          N'hésitez pas à me contacter si vous avez des projets créatifs comme
          des portfolios, sites vitrines ou encore pour me proposer une
          opportunité sur Lyon ! Vous pouvez allez consulter mes projets ou mon
          instagram pour voir si mon univers vous plaît.
        </p>
        <div>
          <v-avatar color="gradient" class="mr-5">
            <v-icon dark> fab fa-instagram </v-icon>
          </v-avatar>
          <v-avatar color="gradient">
            <v-icon dark> fab fa-linkedin </v-icon>
          </v-avatar>
        </div>
      </v-col>
    </v-row>

    <v-divider light class="ma-12"></v-divider>

    <v-row>
      <v-col
        class="
          col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12
          justify-center
          d-flex
          align-center
          my-10
        "
      >
        <v-avatar color="primary" size="80"></v-avatar>
        <h2 class="titleDiag">Compétences</h2>
        <v-avatar color="secondary" size="20"></v-avatar>
      </v-col>
      <v-col class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
        <DevSkills></DevSkills>
      </v-col>
      <v-col class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
        <GraphicsSkills></GraphicsSkills>
      </v-col>
      <v-col class="col-sm-6 col-md-6 col-lg-6 col-xl-6 col-12">
        <SoftsSkillz></SoftsSkillz>
      </v-col>
    </v-row>

    <v-row justify="space-between" class="pa-8">
      <v-col md="6">
        <Experiences></Experiences>
      </v-col>
      <v-col md="6">
        <Formations></Formations>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Experiences from "../components/CV/Timelines/Experiences";
import Formations from "../components/CV/Timelines/Formations";
import DevSkills from "../components/CV/DevSkills";
import GraphicsSkills from "../components/CV/GraphicsSkills";
import SoftsSkillz from "../components/CV/SoftsSkillz";

export default {
  name: "About",
  components: {
    SoftsSkillz,
    GraphicsSkills,
    DevSkills,
    Formations,
    Experiences,
  },
};
</script>

<style scoped>


</style>
