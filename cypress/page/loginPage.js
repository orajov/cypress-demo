export class LoginPage {

    inputUsername() {
        return cy.get('#login_button_container').find('input').eq(0);    // zbytečně složitá selekce
    }

    inputPassword() {
        return cy.get('#login_button_container').find('input').eq(1);    // může se stát
    }

    buttonLogin() {
        return cy.get('#login_button_container').find('input').eq(2);    // že element lze špatne vybrat
    }

    shoppingCart() {
        return cy.get('#shopping_cart_container');
    }

}