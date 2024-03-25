export class ComponentsPage {

    inputText(text) {
        return cy.get(`input[placeholder="${text}"]`);
    }

    buttonText(text) {
        return cy.get(`input[value="${text}"]`);
    }

}