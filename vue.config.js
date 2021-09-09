module.exports = {
  lintOnSave: false,

  transpileDependencies: ["vuetify"],

  pwa: {
    name: "Portfolio Marianne Guerrero",
    themeColor: "#03FF9E",
    msTileColor: "#C191FF",
    appleMobileWebAppCapable: "yes",
    manifestOptions: {
      name: "Portfolio Marianne Guerrero",
      short_name: "Portfolio MG",
      scope: "/",
      start_url: "/",
      display: "standalone",
      theme_color: "#03FF9E",
      background_color: "#C191FF",
      icons: [
        {
          src: "./img/icons/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    iconPaths: {
      favicon32: "./img/icons/favicon-32x32.png",
      favicon16: "./img/icons/favicon-16x16.png",
      appleTouchIcon: "./img/icons/pwa-192x192.png",
      maskIcon: "./img/icons/pwa-192x192.png",
      msTileImage: "./img/icons/pwa-192x192.png",
    },
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      // skipWaiting: true,
      swSrc: "src/service-worker.js",
      exclude: [/\.map$/],
    },
  },
};
