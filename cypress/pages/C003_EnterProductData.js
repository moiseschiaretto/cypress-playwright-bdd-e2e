const Base = require('./Base');
const { enterProductData: el } = require('../../shared/elements');
const { camposObrigatorios, produto } = require('../../shared/massa');

class EnterProductData extends Base {
  acessarAba() {
    this.abrirAba('enterProductData');
    this.validarContador('enterProductData', camposObrigatorios.enterProductData);
  }

  preencherCampos() {
    this.preencherCampo(el.startDate, produto.startDate);
    this.selecionarOpcao(el.insuranceSum, produto.insuranceSumTexto, produto.insuranceSumValor);
    this.selecionarOpcao(el.meritRating, produto.meritRating);
    this.selecionarOpcao(el.damageInsurance, produto.damageInsurance);
    this.marcarOpcao(el.legalDefenseInsurance);
    this.selecionarOpcao(el.courtesyCar, produto.courtesyCar);
  }

  validarAbaCompleta() {
    this.abrirAba('enterProductData');
    this.validarContadorZerado('enterProductData');
  }

  irParaSelectPriceOption() {
    this.abrirAba('selectPriceOption');
    this.validarContador('selectPriceOption', camposObrigatorios.selectPriceOption);
  }
}

module.exports = EnterProductData;
