const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');

const { Given, When, Then } = createBdd(test);

Given('acessar o frame Enter Product Data igual a seis campos', async ({ wizard }) => {
  await wizard.produto.acessarAba();
});

When('preencher ou selecionar os dados dos campos do produto', async ({ wizard }) => {
  await wizard.produto.preencherCampos();
});

When('clicar o frame Enter Product Data igual a zero campos', async ({ wizard }) => {
  await wizard.produto.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Select Price Option', async ({ wizard }) => {
  await wizard.produto.irParaSelectPriceOption();
});
