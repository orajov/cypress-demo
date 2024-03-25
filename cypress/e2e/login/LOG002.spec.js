import { LoginPage } from "../../page/loginPage";

describe('LOG002 - Login in via credentials', () => {

  const loginPage = new LoginPage();

  it('Test', () => {
    cy.visit('/'); // alternativa cy.visit('/login');
    cy.fixture("../data/users.json").then( (usersData) => {

      loginPage.inputUsername().type(usersData.username);  // použití OOP
      loginPage.inputPassword().type(usersData.password);  // načtení hodnot z JSONu  
      loginPage.buttonLogin().click();
  
      loginPage.shoppingCart().should('be.visible');  // kontrola skrze přítomnost košíku (možno zaměnit za uživatel)
    });
  });
});
