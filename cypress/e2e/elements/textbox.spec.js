describe('Text Box Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box');
  });

  it('Fills out and submits the text box form', () => {
    cy.get('#userName').type('John Doe');
    cy.get('#userEmail').type('john.doe@example.com');
    cy.get('#currentAddress').type('123 Main St');
    cy.get('#permanentAddress').type('456 Main St');
    cy.get('#submit').click();

    cy.get('#output #name').should('contain', 'John Doe');
    cy.get('#output #email').should('contain', 'john.doe@example.com');
    cy.get('#output #currentAddress').should('contain', '123 Main St');
    cy.get('#output #permanentAddress').should('contain', '456 Main St');
  });
});
