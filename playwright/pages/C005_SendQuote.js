const { expect } = require('@playwright/test');
const Base = require('./Base');
const { sendQuote: el } = require('../../shared/elements');
const { camposObrigatorios, cotacao } = require('../../shared/massa');

class SendQuote extends Base {
  async acessarAba(quantidadeEsperada = camposObrigatorios.sendQuote) {
    await this.abrirAba('sendQuote');
    await this.validarContador('sendQuote', quantidadeEsperada);
  }

  async preencherCampos() {
    await this.preencherCampo(el.email, cotacao.email);
    await this.preencherCampo(el.phone, cotacao.phone);
    await this.preencherCampo(el.username, cotacao.username);
    await this.preencherCampo(el.password, cotacao.password);
    await this.preencherCampo(el.confirmPassword, cotacao.password);
    await this.preencherCampo(el.comments, cotacao.comments);
  }

  async validarAbaCompleta() {
    await this.abrirAba('sendQuote');
    await this.validarContadorZerado('sendQuote');
  }

  async enviarCotacao() {
    // Espera condicional (auto-waiting): sem pausas fixas
    const botaoSend = this.page.locator(el.botaoSend);
    await expect(botaoSend).toBeEnabled();
    await botaoSend.click();
    await expect(this.page.locator(el.mensagemAlerta)).toContainText(el.textoMensagemSucesso, { timeout: 30000 });
    await this.page.locator(el.botaoOkAlerta).click();
  }
}

module.exports = SendQuote;
