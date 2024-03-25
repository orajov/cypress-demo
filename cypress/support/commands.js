Cypress.Commands.add('dataTest', (element) => { 
    cy.get(`[data-test="${element}"]`);
});