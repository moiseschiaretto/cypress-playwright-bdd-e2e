const fs = require('fs');
const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');
const cypressOnFix = require('cypress-on-fix');

// Nome da execução (ex.: 01-sem-falha), definido nos scripts do package.json.
// Cada feature gera os próprios relatórios, em pastas separadas.
const execucao = process.env.REPORT_NAME || 'todas';
const pastaAllure = `allure-results/cypress/${execucao}`;

module.exports = defineConfig({
  e2e: {
    // Mesmos arquivos .feature usados pelo Playwright
    specPattern: 'features/**/*.feature',
    supportFile: 'cypress/support/e2e.js',

    // Os cenários seguem as abas do wizard em sequência (o cenário 2 continua
    // de onde o cenário 1 parou). Por isso a sessão não é limpa entre cenários.
    testIsolation: false,

    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    video: false,
    screenshotsFolder: `reports/cypress/${execucao}/screenshots`,
    trashAssetsBeforeRuns: true,

    async setupNodeEvents(on, config) {
      // cypress-on-fix: permite que o Cucumber e o Allure usem os mesmos eventos do Cypress
      on = cypressOnFix(on);

      // BDD + relatório padrão (Cucumber HTML) — ver cypress-cucumber-preprocessor.config.js
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createBundler({ plugins: [createEsbuildPlugin(config)] }));

      // Relatório Allure, um por feature (resultados da execução anterior são apagados)
      fs.rmSync(pastaAllure, { recursive: true, force: true });
      allureCypress(on, config, { resultsDir: pastaAllure });

      return config;
    },
  },
});