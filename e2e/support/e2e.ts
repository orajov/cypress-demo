import './commands';

const resolution = Cypress.env('CYPRESS_RESOLUTION');

before(() => {
    if(resolution) cy.viewport(resolution);
});