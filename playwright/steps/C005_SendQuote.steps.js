const { createBdd } = require('playwright-bdd');
const { test } = require('../fixtures');
const { camposObrigatorios } = require('../../shared/massa');

const { Given, When, Then } = createBdd(test);

Given('acessar o frame Send Quote igual a quatro campos', async ({ wizard }) => {
  await wizard.cotacao.acessarAba();
});

// Cenário COM FALHA: espera 14 campos, mas a aba tem 4 — a falha é intencional
Given('acessar o frame Send Quote igual a quatro campos - COM FALHA', async ({ wizard }) => {
  await wizard.cotacao.acessarAba(camposObrigatorios.sendQuoteComFalha);
});

When('preencher ou selecionar os dados dos campos de envio da cotacao', async ({ wizard }) => {
  await wizard.cotacao.preencherCampos();
});

When('clicar o frame Send Quote igual a zero campos', async ({ wizard }) => {
  await wizard.cotacao.validarAbaCompleta();
});

Then('clicar no botao Send para enviar os dados e exibir a mensagem de alerta de confirmacao de envio', async ({ wizard }) => {
  await wizard.cotacao.enviarCotacao();
});

// Cenário INDEFINIDO: o passo "acessar o frame Send Quote igual a quatro campos_XXXXXXXXXX"
// não tem implementação de propósito — demonstra um passo indefinido (undefined) no BDD.
