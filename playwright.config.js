const fs = require('fs');
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig, cucumberReporter } = require('playwright-bdd');

// Gera os testes do Playwright a partir dos mesmos arquivos .feature usados pelo Cypress
const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: ['playwright/fixtures.js', 'playwright/steps/*.steps.js'],
  outputDir: '.features-gen',
  // Passo sem implementação falha na execução (cenário INDEFINIDO), sem bloquear os demais
  missingSteps: 'fail-on-run',
});

// Nome da execução (ex.: 01-sem-falha), definido nos scripts do package.json.
// Cada feature gera os próprios relatórios, em pastas separadas.
const execucao = process.env.REPORT_NAME || 'todas';
const pastaAllure = `allure-results/playwright/${execucao}`;

// Apaga os resultados Allure da execução anterior (só no processo principal)
if (!process.env.TEST_WORKER_INDEX) {
  fs.rmSync(pastaAllure, { recursive: true, force: true });
}

module.exports = defineConfig({
  testDir,
  // Execução sequencial: os cenários seguem as abas do wizard em ordem
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 60000,
  expect: { timeout: 10000 },
  reporter: [
    ['list'],
    // Relatórios padrão
    ['html', { outputFolder: `reports/playwright/${execucao}/html`, open: 'never' }],
    cucumberReporter('html', { outputFile: `reports/playwright/${execucao}/cucumber-report.html` }),
    // Relatório Allure
    ['allure-playwright', { resultsDir: pastaAllure }],
  ],
  use: {
    ...devices['Desktop Chrome'],
    viewport: { width: 1024, height: 768 },
    trace: 'retain-on-failure',
  },
});
