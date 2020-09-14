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
    chooseADay(dayNumber){
        return cy.get(`:nth-child(${dayNumber}) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title > span`);
    }
    chooseAProvider(id){
        return cy.get(`#app > div.application--wrap > div > aside > div.v-list.drawer-days.v-list--dense.theme--light > div.v-list__group.v-list__group--active.drawer-days-parent > div.v-list__group__items.v-list__group__items--no-action > div:nth-child(${id})`);
    }
}

export default HomePage;