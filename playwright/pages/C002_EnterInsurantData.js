const Base = require('./Base');
const { enterInsurantData: el } = require('../../shared/elements');
const { camposObrigatorios, segurado } = require('../../shared/massa');

class EnterInsurantData extends Base {
  async acessarAba() {
    await this.abrirAba('enterInsurantData');
    await this.validarContador('enterInsurantData', camposObrigatorios.enterInsurantData);
  }

  async preencherCampos() {
    await this.preencherCampo(el.firstName, segurado.firstName);
    await this.preencherCampo(el.lastName, segurado.lastName);
    await this.preencherCampo(el.birthDate, segurado.birthDate);
    await this.marcarOpcao(el.genderMale);
    await this.preencherCampo(el.streetAddress, segurado.streetAddress);
    await this.selecionarOpcao(el.country, segurado.country);
    await this.preencherCampo(el.zipCode, segurado.zipCode);
    await this.preencherCampo(el.city, segurado.city);
    await this.selecionarOpcao(el.occupation, segurado.occupation);
    await this.marcarOpcao(el.hobbyOther);
    await this.preencherCampo(el.website, segurado.website);
  }

  async validarAbaCompleta() {
    await this.abrirAba('enterInsurantData');
    await this.validarContadorZerado('enterInsurantData');
  }

  async irParaEnterProductData() {
    await this.abrirAba('enterProductData');
    await this.validarContador('enterProductData', camposObrigatorios.enterProductData);
  }
}

module.exports = EnterInsurantData;
