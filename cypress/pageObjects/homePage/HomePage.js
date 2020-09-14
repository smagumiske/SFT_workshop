class HomePage{
    getRegisteredUserSubhead() {
        return cy.get('.d-flex > .v-subheader');
    }
    checkIfPopUpWindowIsVisible() {
        return cy.get('.v-dialog > .v-card > .v-card__title > div');
    }
    closePopUpWindow(){
        return cy.get('.gray--text > .v-btn__content > span');
    }
}

export default HomePage;