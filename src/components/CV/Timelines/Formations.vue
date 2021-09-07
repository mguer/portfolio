<template>
  <v-card>
    <v-card-title class="mt-5">
      <h2 class="ml-3">
        Formations
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
            <div><p> <strong> {{ experience.business }} </strong> | {{ experience.location }}</p></div>
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Formations",
  data: () => ({
    experiences: [
      {
        title: "Mastère développement web (RNCP niveau 1)",
        business: "Ynov",
        location: "Lyon",
        resume: `Formation assez polyvalente entre frontend et backend, cours pratiques et consolidation des technologies vues antérieurement.`,
        skills: ["VueJs", "Vuefify", "PWA", "Api platform", "Symfony", "Bootstrap", "PWA", "Illustrator", "Adobe XD"],
        softSkills: ["Design pattern", "Intégration web", "UI/UX", "SEO", "Maquettes"],
        date: "2020-2021",
        color: "secondary",
      },
      {
        title: "Licence professionnelle métiers du numérique",
        business: "IUT",
        location: "Puy-en-Velay",
        resume: `Licence polyvalente entre développement web et graphisme`,
        skills: ["Symfony", "Leaflet", "Photoshop", "Indesign", "Sylius"],
        softSkills: ["Intégration web", "Deign d'affiche", "UI/UX", "SEO", "Maquettes"],
        date: "2018-2021",
        color: "secondary",
      },
      {
        title: "BTS SIO option SLAM",
        business: "La Martinière Duchre",
        location: "Lyon",
        resume: `Apprentissage des bases de la programmtion objet, algorithmie, réseau`,
        skills: ["PHP", "C#", "Laravel", "SQL", "Python"],
        date: "2017/2018",
        color: "secondary",
      },
      {
        title: "MANAA (Mise à niveau en arts appliqués)",
        business: "Lycée Léonard de Vinci",
        location: "Villefontaine",
        resume: `Base de la conception graphique, histoire de l'art`,
        skills: ["Indesign", "Photoshop", "Illustrator"],
        softSkills: ["Création de logo", "Création d'affiche", "Peinture", "Modèle vivant", "Dessin", "Maquettage"],
        date: "2016",
        color: "secondary",
      },
      {
      title: "BAC ES option arts plastiques",
        business: "Lycée Ella Fitzgerald",
        location: "Saint-Romain-en-Gal",
        date: "2015",
        color: "secondary",
      },
    ],
  }),
}
</script>

<style scoped>

</style>
