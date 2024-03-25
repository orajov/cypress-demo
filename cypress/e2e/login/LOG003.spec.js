import { ComponentsPage } from "../../page/components";


describe('Přihlášení na saucedemo.com s nesprávným heslem', () => {
  
  const componentsPage = new ComponentsPage();
  const password = Cypress.env('PASSWORD');

  it('zobrazí chybovou hlášku při pokusu o přihlášení s nesprávným heslem', () => {
    // chybí cy.visit viz support/e2e

    componentsPage.inputText('Username').type('standard_user');
    componentsPage.inputText('Password').type(password);
    componentsPage.buttonText('Login').click();

    cy.intercept('**/static/**').as('loginResponse');
    cy.wait('@loginResponse');
  });
});
