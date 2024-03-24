describe('Radio Button Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/radio-button');
  });

  it('Selects a radio button and verifies the selection', () => {
    cy.get('#yesRadio').click().should('be.checked');
    cy.get('.text-success').should('contain', 'Yes');

    // Attempt to select 'Impressive' and verify
    cy.get('#impressiveRadio').click().should('be.checked');
    cy.get('.text-success').should('contain', 'Impressive');

    // 'No' radio button is disabled, verify it's not selectable
    cy.get('#noRadio').should('be.disabled');
  });
});
