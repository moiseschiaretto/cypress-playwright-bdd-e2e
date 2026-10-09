import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import EnterVehicleData from '../pages/C001_EnterVehicleData';

const pagina = new EnterVehicleData();

Given('acessar o frame Enter Vehicle Data igual a doze campos', () => {
  pagina.acessarAba();
});

When('permitir preencher ou selecionar os dados dos campos do veículo', () => {
  pagina.preencherCampos();
});

When('clicar o frame Enter Vehicle Data igual a zero campos', () => {
  pagina.validarAbaCompleta();
});

Then('clicar no botao Next para o sistema redirecionar para o frame Enter Insurant Data', () => {
  pagina.irParaEnterInsurantData();
});
