describe('LOG001 - Login via credentials', () => {
  it('Successful login', () => {
    cy.visit('http://www.saucedemo.com');
    
    cy.dataTest('username').type('standard_user');  // použití custom příkazu cy.dataTest()
    cy.dataTest('password').type('secret_sauce');   // zadaní hodnot přímo do příkazu
    cy.dataTest('login-button').click();
 
    cy.url().should('include', '/inventory.html');  // kontrola skrze url
  });
});