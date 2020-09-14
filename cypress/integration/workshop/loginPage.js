/// <reference types="cypress" />

import LoginPage from "../../pageObjects/loginPage/LoginPage.js"
import HomePage from "../../pageObjects/homePage/HomePage.js"

var loginPage = new LoginPage();
var homePage = new HomePage();

describe('Make an order as user', () => {
    it('should be able to visit login page', () => {
        cy.visit('/');
        cy.url().should('include', '-password');
    });

    it('should login as a user', () => {
        loginPage.getEmailInputField().type('beatrice@pink.kns');
        loginPage.getPasswordInputField().type('Ribbon011');
        loginPage.getButton().click();
        homePage.getRegisteredUserSubhead().should('contain', 'Beatrice');
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

        homePage.checkIfPopUpWindowIsVisible().then($element => {
            if ($element.is(':visible')){
              homePage.closePopUpWindow().click();
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