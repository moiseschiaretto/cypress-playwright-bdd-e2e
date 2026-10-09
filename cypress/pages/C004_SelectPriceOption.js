const Base = require('./Base');
const { selectPriceOption: el } = require('../../shared/elements');
const { camposObrigatorios } = require('../../shared/massa');

class SelectPriceOption extends Base {
  acessarAba() {
    this.abrirAba('selectPriceOption');
    this.validarContador('selectPriceOption', camposObrigatorios.selectPriceOption);
  }

  selecionarPreco() {
    this.marcarOpcao(el.gold);
  }

  validarAbaCompleta() {
    this.abrirAba('selectPriceOption');
    this.validarContadorZerado('selectPriceOption');
  }

  irParaSendQuote() {
    this.abrirAba('sendQuote');
    this.validarContador('sendQuote', camposObrigatorios.sendQuote);
  }
}

module.exports = SelectPriceOption;
