const Base = require('./Base');
const { enterInsurantData: el } = require('../../shared/elements');
const { camposObrigatorios, segurado } = require('../../shared/massa');

class EnterInsurantData extends Base {
  acessarAba() {
    this.abrirAba('enterInsurantData');
    this.validarContador('enterInsurantData', camposObrigatorios.enterInsurantData);
  }

  preencherCampos() {
    this.preencherCampo(el.firstName, segurado.firstName);
    this.preencherCampo(el.lastName, segurado.lastName);
    this.preencherCampo(el.birthDate, segurado.birthDate);
    this.marcarOpcao(el.genderMale);
    this.preencherCampo(el.streetAddress, segurado.streetAddress);
    this.selecionarOpcao(el.country, segurado.country);
    this.preencherCampo(el.zipCode, segurado.zipCode);
    this.preencherCampo(el.city, segurado.city);
    this.selecionarOpcao(el.occupation, segurado.occupation);
    this.marcarOpcao(el.hobbyOther);
    this.preencherCampo(el.website, segurado.website);
  }

  validarAbaCompleta() {
    this.abrirAba('enterInsurantData');
    this.validarContadorZerado('enterInsurantData');
  }

  irParaEnterProductData() {
    this.abrirAba('enterProductData');
    this.validarContador('enterProductData', camposObrigatorios.enterProductData);
  }
}

module.exports = EnterInsurantData;
