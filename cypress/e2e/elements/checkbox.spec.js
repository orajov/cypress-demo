describe('Check Box Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/checkbox');
  });

  it('Selects a checkbox and verifies it', () => {
    // Open the 'Home' tree if it's not already expanded
    cy.get('.rct-icon-expand-close').click();
    cy.get('.rct-title').contains('Home').click();

    // Select the 'Desktop' checkbox and verify
    cy.get('.rct-title').contains('Desktop').click();
    cy.get('.rct-checkbox').contains('Desktop').parent().find('.rct-icon-check').should('be.visible');

    // Assert the output box contains the selected item
    cy.get('#result').should('contain', 'You have selected : desktop');
  });
});
