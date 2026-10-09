const Base = require('./Base');
const { enterProductData: el } = require('../../shared/elements');
const { camposObrigatorios, produto } = require('../../shared/massa');

class EnterProductData extends Base {
  async acessarAba() {
    await this.abrirAba('enterProductData');
    await this.validarContador('enterProductData', camposObrigatorios.enterProductData);
  }

  async preencherCampos() {
    await this.preencherCampo(el.startDate, produto.startDate);
    await this.selecionarOpcao(el.insuranceSum, produto.insuranceSumTexto, produto.insuranceSumValor);
    await this.selecionarOpcao(el.meritRating, produto.meritRating);
    await this.selecionarOpcao(el.damageInsurance, produto.damageInsurance);
    await this.marcarOpcao(el.legalDefenseInsurance);
    await this.selecionarOpcao(el.courtesyCar, produto.courtesyCar);
  }

  async validarAbaCompleta() {
    await this.abrirAba('enterProductData');
    await this.validarContadorZerado('enterProductData');
  }

  async irParaSelectPriceOption() {
    await this.abrirAba('selectPriceOption');
    await this.validarContador('selectPriceOption', camposObrigatorios.selectPriceOption);
  }
}

module.exports = EnterProductData;
