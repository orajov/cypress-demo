declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-test attribute.
       * @example cy.dataTest('button-continue')
       */

      waitForResponse(url: string): void
    }
  }
}

export{};

Cypress.Commands.add('waitForResponse', (url: string, timeout: number = 10000) => {
  const regex = new RegExp(url.replace(' ', ''), 'i');

  cy.intercept(regex).as('response').then( () => {
      cy.log('Waiting for response ' + url);
      cy.wait('@response', {timeout: 10000});
  });
});

