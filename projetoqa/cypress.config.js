const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Adiciona o plugin do Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // Configura o esbuild
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // busca arquivos .feature
    baseUrl: "https://paciente-staging.lacreisaude.com.br", // substitua pelo endereço da sua aplicação
    chromeWebSecurity: false,
  },
});
