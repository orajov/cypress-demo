export class ComponentsPage {

    inputText(text: string) {
        return cy.contains('label', text).parent().find('input');
    }

    buttonText(text: string) {
        return cy.contains('button', text);
    }

    linkText(text: string) {
        return cy.contains('a', text)
    }

    checkboxText(text: string) {
        return cy.contains('input[type="checkbox"]', text);
    }

}