import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import fr from "vuetify/lib/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#C191FF",
        secondary: "#03FF9E",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { fr },
    current: "fr",
  },
  icons: {
    iconfont: "fa",
  },
});
