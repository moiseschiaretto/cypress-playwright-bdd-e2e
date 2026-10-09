const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');

const { Given, When, Then } = createBdd(test);

Given('acessar o frame Enter Insurant Data igual a sete campos', async ({ wizard }) => {
  await wizard.segurado.acessarAba();
});

When('permitir preencher ou selecionar os dados dos campos do seguro', async ({ wizard }) => {
  await wizard.segurado.preencherCampos();
});

Then('clicar o frame Enter Insurant Data igual a zero campos', async ({ wizard }) => {
  await wizard.segurado.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Enter Produt Data', async ({ wizard }) => {
  await wizard.segurado.irParaEnterProductData();
});
