const Base = require('./Base');
const { URL_APP, comum, enterVehicleData: el } = require('../../shared/elements');
const { camposObrigatorios, veiculo } = require('../../shared/massa');

class EnterVehicleData extends Base {
  acessarAba() {
    cy.clearCookies();
    cy.visit(URL_APP);
    cy.get(comum.tituloDaPagina).should('contain', comum.textoTituloDaPagina);
    this.abrirAba('enterVehicleData');
    this.validarContador('enterVehicleData', camposObrigatorios.enterVehicleData);
  }

  preencherCampos() {
    this.selecionarOpcao(el.make, veiculo.make);
    this.selecionarOpcao(el.model, veiculo.model);
    this.preencherCampo(el.cylinderCapacity, veiculo.cylinderCapacity);
    this.preencherCampo(el.enginePerformance, veiculo.enginePerformance);
    this.preencherCampo(el.dateOfManufacture, veiculo.dateOfManufacture);
    this.selecionarOpcao(el.numberOfSeats, veiculo.numberOfSeats);
    this.marcarOpcao(el.rightHandDriveYes);
    this.selecionarOpcao(el.numberOfSeatsMotorcycle, veiculo.numberOfSeatsMotorcycle);
    this.selecionarOpcao(el.fuel, veiculo.fuel);
    this.preencherCampo(el.payload, veiculo.payload);
    this.preencherCampo(el.totalWeight, veiculo.totalWeight);
    this.preencherCampo(el.listPrice, veiculo.listPrice);
    this.preencherCampo(el.licensePlateNumber, veiculo.licensePlateNumber);
    this.preencherCampo(el.annualMileage, veiculo.annualMileage);
  }

  validarAbaCompleta() {
    this.abrirAba('enterVehicleData');
    this.validarContadorZerado('enterVehicleData');
  }

  irParaEnterInsurantData() {
    this.abrirAba('enterInsurantData');
    this.validarContador('enterInsurantData', camposObrigatorios.enterInsurantData);
  }
}

module.exports = EnterVehicleData;
