import 'allure-cypress';

// Mantido do projeto original: a aplicação de exemplo dispara exceções de JavaScript
// próprias, que não fazem parte do escopo dos testes. A exceção é registrada no log
// do Cypress e não interrompe o cenário.
Cypress.on('uncaught:exception', (err) => {
  Cypress.log({ name: 'uncaught:exception', message: err.message });
  return false;
});
