const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "./cypress/tests/**.*",
    // baseUrl: "https://the-internet.herokuapp.com"
    // baseUrl: "https://www.amazon.sg"
    baseUrl: "https://simplyrecipes.com"
  },
  defaultCommandTimeout: 4000
});
