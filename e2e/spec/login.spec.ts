import { UserModel } from "../models/user.model";
import { ComponentsPage } from "../page/components";
import { getTestData } from "../support/utils";

describe('User successfully log in with valid credentials', () => {
  beforeEach( () => {
    cy.visit('/login');
  });

  const componentsPage = new ComponentsPage();
  const data: UserModel = getTestData('user');
  const username: string = data.username;
  const password: string = Cypress.env('CYPRESS_PASSWORD');

  it('Successful login', () => {

    componentsPage.inputText('Username').type(username);
    componentsPage.inputText('Password').type(password);
    componentsPage.buttonText('Login').click();

    cy.contains('Welcome to the Secure Area. When you are done click logout below.').should('be.visible');

  });
});