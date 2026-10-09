const { expect } = require('@playwright/test');
const { abas } = require('../../shared/elements');

// Ações comuns a todas as abas do wizard
class Base {
  constructor(page) {
    this.page = page;
  }

  async preencherCampo(seletor, valor) {
    const campo = this.page.locator(seletor);
    await campo.fill(valor);
    await expect(campo).toHaveValue(valor);
  }

  async selecionarOpcao(seletor, texto, valorEsperado = texto) {
    const campo = this.page.locator(seletor);
    await campo.selectOption({ label: texto });
    await expect(campo).toHaveValue(valorEsperado);
  }

  // Radio e checkbox da aplicação ficam escondidos dentro de um <label>:
  // o clique é feito no label, e a verificação no próprio input.
  async marcarOpcao(seletor) {
    const input = this.page.locator(seletor);
    await this.page.locator('label', { has: input }).click();
    await expect(input).toBeChecked();
  }

  async abrirAba(nomeAba) {
    await this.page.locator(abas[nomeAba].aba).click();
  }

  async validarContador(nomeAba, quantidade) {
    await expect(this.page.locator(abas[nomeAba].contador)).toHaveText(quantidade);
  }

  async validarContadorZerado(nomeAba) {
    const contador = this.page.locator(abas[nomeAba].contador);
    await expect(contador).toHaveText('0');
    await expect(contador).toHaveClass(/zero/);
  }
}

module.exports = Base;
