const { test: base } = require('playwright-bdd');
const EnterVehicleData = require('./pages/C001_EnterVehicleData');
const EnterInsurantData = require('./pages/C002_EnterInsurantData');
const EnterProductData = require('./pages/C003_EnterProductData');
const SelectPriceOption = require('./pages/C004_SelectPriceOption');
const SendQuote = require('./pages/C005_SendQuote');

const test = base.extend({
  // Página compartilhada entre os cenários (escopo de worker).
  // Os cenários seguem as abas do wizard em sequência: o cenário 2 continua
  // de onde o cenário 1 parou — mesmo comportamento do testIsolation: false do Cypress.
  paginaWizard: [
    async ({ browser }, use) => {
      const context = await browser.newContext({ viewport: { width: 1024, height: 768 } });
      const page = await context.newPage();
      await use(page);
      await context.close();
    },
    { scope: 'worker' },
  ],

  // Page objects de cada aba, montados sobre a página compartilhada.
  // Em caso de falha, anexa um screenshot ao relatório.
  wizard: async ({ paginaWizard }, use, testInfo) => {
    await use({
      veiculo: new EnterVehicleData(paginaWizard),
      segurado: new EnterInsurantData(paginaWizard),
      produto: new EnterProductData(paginaWizard),
      preco: new SelectPriceOption(paginaWizard),
      cotacao: new SendQuote(paginaWizard),
    });
    if (testInfo.status !== testInfo.expectedStatus) {
      await testInfo.attach('screenshot-falha', {
        body: await paginaWizard.screenshot({ fullPage: true }),
        contentType: 'image/png',
      });
    }
  },
});

module.exports = { test };
