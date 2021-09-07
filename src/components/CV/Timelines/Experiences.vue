<template>
  <v-card >
    <v-card-title class="mt-5">
      <h2 class="ml-3">
        Expériences <br />
        professionnelles
      </h2>
    </v-card-title>

    <v-card-text>
      <div class="font-weight-bold ml-8 mb-2">2021</div>

      <v-timeline align-top dense>
        <v-timeline-item
          v-for="experience in experiences"
          :key="experience.title"
          :color="experience.color"
          small
        >
          <div>
            <div class="font-weight-normal">
              <p>  {{ experience.date }} - <strong>{{ experience.title }}</strong> </p>
            </div>
            <div><p> <strong> {{ experience.business }} </strong> | <br> {{ experience.location }}</p></div>
            <div> <p> {{ experience.resume }} </p> </div>

            <div>
              <v-chip
                color="primary"
                v-for="skill in experience.skills"
                :key="skill"
                class="mr-1 mb-1"
              >
                {{ skill }}
              </v-chip>

              <v-chip
                color="primary darken-2"
                text-color="white"
                v-for="skill in experience.softSkills"
                :key="skill"
                class="mr-1 mb-1"
              >
                {{ skill }}
              </v-chip>
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
      <div class="font-weight-bold ml-8 mb-2">2015</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Experiences",
  data: () => ({
    experiences: [
      {
        title: "Alternance",
        business: "Fives Intralogistics",
        location: "Chasse-sur-Rhône",
        resume: `Création d'applications métiers cross platform pour la qualité opérationnelle, la supply chain. Application de pointage pour le service RH.`,
        skills: ["VueJs", "Vuefify", "PWA", "Api platform", "Symfony", "Bootstrap", "Postgre","Illustrator", "Adobe XD"],

        softSkills: ["Cahier des charges", "Mise en production", "Gestion de projet"],
        date: "2018-2021",
        color: "primary",
      },
      {
        title: "Travail saisonnier",
        business: "Fives Intralogistics",
        location: "Chasse-sur-Rhône",
        resume: `Aide au service IT sur le support utilisateur, installation de matériel, formation utilisateurs, résolutions de problèmes`,
        skills: ["GLPI","Active directory", "Commande windows" ],
        softSkills: ["Dépanage PC", "Gestion de droits utilisateurs", "Résolution de tickets"],
        date: "juillet/août 2018",
        color: "primary",
      },
      {
        title: "Stage",
        business: "Agence Comète",
        location: "Caluir",
        resume: `Participation au développement d'un prototype pour l'agence de cartographie des startups lyonnaises.`,
        skills: ["Javascript", "Jquery", "HTML/CSS", "PHP", "Google Map API", "Wordpress", "CMS Typo 3"],
        softSkills: ["Intégration web", "Cartographie"],
        date: "janvier 2018 - 6 semaines",
        color: "primary",
      },
      {
        title: "Stage",
        business: "Agence Gercop Digital",
        location: "Lyon",
        resume: `Participation au développement d'une platforme pour une agence immobilière dans le but de mieux préparer les visites des clients..  '`,
        skills: ["Javascript", "Jquery", "HTML/CSS", "Google Map API", "Illustrator", "Photoshop"],
        softSkills: ["Intégration web", "Refonte d'icônes", "Cartographie"],
        date: "juin 2017 - 6 semaines",
        color: "primary",
      },
    ],
  }),
};
</script>

<style scoped></style>
