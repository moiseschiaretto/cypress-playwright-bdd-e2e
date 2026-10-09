const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');

const { Given, When, Then } = createBdd(test);

Given('acessar o frame Enter Vehicle Data igual a doze campos', async ({ wizard }) => {
  await wizard.veiculo.acessarAba();
});

When('permitir preencher ou selecionar os dados dos campos do veículo', async ({ wizard }) => {
  await wizard.veiculo.preencherCampos();
});

When('clicar o frame Enter Vehicle Data igual a zero campos', async ({ wizard }) => {
  await wizard.veiculo.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Enter Insurant Data', async ({ wizard }) => {
  await wizard.veiculo.irParaEnterInsurantData();
});
