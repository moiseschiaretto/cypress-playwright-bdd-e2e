const { abas } = require('../../shared/elements');

// Ações comuns a todas as abas do wizard
class Base {
  preencherCampo(seletor, valor) {
    cy.get(seletor).clear().type(valor);
    cy.get(seletor).should('have.value', valor);
  }

  selecionarOpcao(seletor, texto, valorEsperado = texto) {
    cy.get(seletor).select(texto).should('have.value', valorEsperado);
  }

  // Radio e checkbox da aplicação ficam escondidos dentro de um <label>:
  // o clique é feito no label, e a verificação no próprio input.
  marcarOpcao(seletor) {
    cy.get(seletor).parent('label').click();
    cy.get(seletor).should('be.checked');
  }

  abrirAba(nomeAba) {
    cy.get(abas[nomeAba].aba).click();
  }

  validarContador(nomeAba, quantidade) {
    cy.get(abas[nomeAba].contador).should('have.text', quantidade);
  }

  validarContadorZerado(nomeAba) {
    cy.get(abas[nomeAba].contador).should('have.text', '0').and('have.class', 'zero');
  }
}

module.exports = Base;
