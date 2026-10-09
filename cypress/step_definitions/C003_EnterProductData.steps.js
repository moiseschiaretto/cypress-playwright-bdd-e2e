import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import EnterProductData from '../pages/C003_EnterProductData';

const pagina = new EnterProductData();

Given('acessar o frame Enter Product Data igual a seis campos', () => {
  pagina.acessarAba();
});

When('preencher ou selecionar os dados dos campos do produto', () => {
  pagina.preencherCampos();
});

When('clicar o frame Enter Product Data igual a zero campos', () => {
  pagina.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Select Price Option', () => {
  pagina.irParaSelectPriceOption();
});
