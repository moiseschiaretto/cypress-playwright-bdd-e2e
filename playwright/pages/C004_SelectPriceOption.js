const Base = require('./Base');
const { selectPriceOption: el } = require('../../shared/elements');
const { camposObrigatorios } = require('../../shared/massa');

class SelectPriceOption extends Base {
  async acessarAba() {
    await this.abrirAba('selectPriceOption');
    await this.validarContador('selectPriceOption', camposObrigatorios.selectPriceOption);
  }

  async selecionarPreco() {
    await this.marcarOpcao(el.gold);
  }

  async validarAbaCompleta() {
    await this.abrirAba('selectPriceOption');
    await this.validarContadorZerado('selectPriceOption');
  }

  async irParaSendQuote() {
    await this.abrirAba('sendQuote');
    await this.validarContador('sendQuote', camposObrigatorios.sendQuote);
  }
}

module.exports = SelectPriceOption;
