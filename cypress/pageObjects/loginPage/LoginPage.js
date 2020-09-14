class LoginPage{
    getEmailInputField() {
        return cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }
    getPasswordInputField() {
        return cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input');
    }
    getButton(){
        return cy.get('.v-btn');
    }
}

export default LoginPage;