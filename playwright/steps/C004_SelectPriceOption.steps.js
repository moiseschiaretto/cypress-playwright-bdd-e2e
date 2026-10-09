const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');

const { Given, When, Then } = createBdd(test);

Given('acessar o frame Select Price Option igual a um campo', async ({ wizard }) => {
  await wizard.preco.acessarAba();
});

When('selecionar a opcao de preco do produto', async ({ wizard }) => {
  await wizard.preco.selecionarPreco();
});

When('clicar o frame Select Price Option igual a zero campos', async ({ wizard }) => {
  await wizard.preco.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Send Quote', async ({ wizard }) => {
  await wizard.preco.irParaSendQuote();
});
