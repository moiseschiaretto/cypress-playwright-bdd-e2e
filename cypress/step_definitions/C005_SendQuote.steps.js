import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SendQuote from '../pages/C005_SendQuote';
import { camposObrigatorios } from '../../shared/massa';

const pagina = new SendQuote();

Given('acessar o frame Send Quote igual a quatro campos', () => {
  pagina.acessarAba();
});

// Cenário COM FALHA: espera 14 campos, mas a aba tem 4 — a falha é intencional
Given('acessar o frame Send Quote igual a quatro campos - COM FALHA', () => {
  pagina.acessarAba(camposObrigatorios.sendQuoteComFalha);
});

When('preencher ou selecionar os dados dos campos de envio da cotacao', () => {
  pagina.preencherCampos();
});

When('clicar o frame Send Quote igual a zero campos', () => {
  pagina.validarAbaCompleta();
});

Then('clicar no botao Send para enviar os dados e exibir a mensagem de alerta de confirmacao de envio', () => {
  pagina.enviarCotacao();
});

// Cenário INDEFINIDO: o passo "acessar o frame Send Quote igual a quatro campos_XXXXXXXXXX"
// não tem implementação de propósito — demonstra um passo indefinido (undefined) no BDD.
