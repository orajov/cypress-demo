const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.spec.*',
    chromeWebSecurity: false
  },
});
