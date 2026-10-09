const Base = require('./Base');
const { sendQuote: el } = require('../../shared/elements');
const { camposObrigatorios, cotacao } = require('../../shared/massa');

class SendQuote extends Base {
  acessarAba(quantidadeEsperada = camposObrigatorios.sendQuote) {
    this.abrirAba('sendQuote');
    this.validarContador('sendQuote', quantidadeEsperada);
  }

  preencherCampos() {
    this.preencherCampo(el.email, cotacao.email);
    this.preencherCampo(el.phone, cotacao.phone);
    this.preencherCampo(el.username, cotacao.username);
    this.preencherCampo(el.password, cotacao.password);
    this.preencherCampo(el.confirmPassword, cotacao.password);
    this.preencherCampo(el.comments, cotacao.comments);
  }

  validarAbaCompleta() {
    this.abrirAba('sendQuote');
    this.validarContadorZerado('sendQuote');
  }

  enviarCotacao() {
    // Espera condicional: aguarda o botão habilitar e a mensagem aparecer,
    // em vez de pausas fixas (cy.wait).
    cy.get(el.botaoSend).should('be.enabled').click();
    cy.get(el.mensagemAlerta, { timeout: 30000 }).should('contain', el.textoMensagemSucesso);
    cy.get(el.botaoOkAlerta).click();
  }
}

module.exports = SendQuote;
