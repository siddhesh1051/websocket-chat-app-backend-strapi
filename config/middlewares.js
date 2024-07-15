module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000",
        "https://ayna-full-stack-assignment-websocket.vercel.app/",
      ], // Adjust with your frontend URL
    },
  },
  "strapi::security",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
