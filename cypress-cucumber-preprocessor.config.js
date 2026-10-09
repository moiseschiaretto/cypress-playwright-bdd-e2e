// Configuração do BDD no Cypress (@badeball/cypress-cucumber-preprocessor)
// O relatório padrão (Cucumber HTML) é gravado numa pasta por feature,
// conforme o REPORT_NAME definido nos scripts do package.json.
const execucao = process.env.REPORT_NAME || 'todas';

module.exports = {
  stepDefinitions: 'cypress/step_definitions/**/*.steps.js',
  html: {
    enabled: true,
    output: `reports/cypress/${execucao}/cucumber-report.html`,
  },
};