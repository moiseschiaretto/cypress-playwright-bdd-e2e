import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SelectPriceOption from '../pages/C004_SelectPriceOption';

const pagina = new SelectPriceOption();

Given('acessar o frame Select Price Option igual a um campo', () => {
  pagina.acessarAba();
});

When('selecionar a opcao de preco do produto', () => {
  pagina.selecionarPreco();
});

When('clicar o frame Select Price Option igual a zero campos', () => {
  pagina.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Send Quote', () => {
  pagina.irParaSendQuote();
});
