const { expect } = require('@playwright/test');
const Base = require('./Base');
const { URL_APP, comum, enterVehicleData: el } = require('../../shared/elements');
const { camposObrigatorios, veiculo } = require('../../shared/massa');

class EnterVehicleData extends Base {
  async acessarAba() {
    await this.page.context().clearCookies();
    await this.page.goto(URL_APP);
    await expect(this.page.locator(comum.tituloDaPagina)).toContainText(comum.textoTituloDaPagina);
    await this.abrirAba('enterVehicleData');
    await this.validarContador('enterVehicleData', camposObrigatorios.enterVehicleData);
  }

  async preencherCampos() {
    await this.selecionarOpcao(el.make, veiculo.make);
    await this.selecionarOpcao(el.model, veiculo.model);
    await this.preencherCampo(el.cylinderCapacity, veiculo.cylinderCapacity);
    await this.preencherCampo(el.enginePerformance, veiculo.enginePerformance);
    await this.preencherCampo(el.dateOfManufacture, veiculo.dateOfManufacture);
    await this.selecionarOpcao(el.numberOfSeats, veiculo.numberOfSeats);
    await this.marcarOpcao(el.rightHandDriveYes);
    await this.selecionarOpcao(el.numberOfSeatsMotorcycle, veiculo.numberOfSeatsMotorcycle);
    await this.selecionarOpcao(el.fuel, veiculo.fuel);
    await this.preencherCampo(el.payload, veiculo.payload);
    await this.preencherCampo(el.totalWeight, veiculo.totalWeight);
    await this.preencherCampo(el.listPrice, veiculo.listPrice);
    await this.preencherCampo(el.licensePlateNumber, veiculo.licensePlateNumber);
    await this.preencherCampo(el.annualMileage, veiculo.annualMileage);
  }

  async validarAbaCompleta() {
    await this.abrirAba('enterVehicleData');
    await this.validarContadorZerado('enterVehicleData');
  }

  async irParaEnterInsurantData() {
    await this.abrirAba('enterInsurantData');
    await this.validarContador('enterInsurantData', camposObrigatorios.enterInsurantData);
  }
}

module.exports = EnterVehicleData;
