/// <reference types="cypress" />

describe('Make an order as user', () => {
    it('should be able to visit login page', () => {
        cy.visit('/');
        cy.url().should('include', '-password');
    });

    it('should login as a user', () => {
        cy.get(':nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('beatrice@pink.kns');
        cy.get(':nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input').type('Ribbon011');
        cy.get('.v-btn').click();
        cy.get('.d-flex > .v-subheader').should('contain', 'Beatrice');
        /*const body = {
            email: "beatrice@pink.kns",
            password: "Ribbon011"
        }

        cy.request({
            method: "POST",
            url: '/',
            body
        }).then((response) => {
            console.log(response);
        })*/

        cy.get('.v-dialog > .v-card > .v-card__title > div').then($element => {
            if ($element.is(':visible')){
              cy.get('.gray--text > .v-btn__content > span').click();
            }
        });

    });
    
    it('should choose a day and a provider', () => {
        cy.get(':nth-child(4) > .v-list__group__header > :nth-child(1) > .v-list__tile > .v-list__tile__content > .v-list__tile__title > span').click();
        //cy.get('.v-list__group--active > .v-list__group__items > :nth-child(3) > .v-list__tile').click();
        cy.get('#app > div.application--wrap > div > aside > div.v-list.drawer-days.v-list--dense.theme--light > div.v-list__group.v-list__group--active.drawer-days-parent > div.v-list__group__items.v-list__group__items--no-action > div:nth-child(3)').click();
        //cy.url().should('include', 'dishes/thursday/gimtadienis');
    });
   
    
});