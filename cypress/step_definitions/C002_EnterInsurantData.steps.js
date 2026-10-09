import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import EnterInsurantData from '../pages/C002_EnterInsurantData';

const pagina = new EnterInsurantData();

Given('acessar o frame Enter Insurant Data igual a sete campos', () => {
  pagina.acessarAba();
});

When('permitir preencher ou selecionar os dados dos campos do seguro', () => {
  pagina.preencherCampos();
});

Then('clicar o frame Enter Insurant Data igual a zero campos', () => {
  pagina.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Enter Produt Data', () => {
  pagina.irParaEnterProductData();
});
