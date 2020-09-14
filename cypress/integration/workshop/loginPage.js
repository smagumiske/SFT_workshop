/// <reference types="cypress" />

import LoginPage from "../../pageObjects/loginPage/LoginPage.js"
import HomePage from "../../pageObjects/homePage/HomePage.js"

var loginPage = new LoginPage();
var homePage = new HomePage();

before('Visit URL and login as a user',() => {
    it('should be able to visit login page', () => {
        cy.visit('/login-password');
        cy.url().should('include', '-password');
    });

    it.only('should login as a user', () => {
        loginPage.getEmailInputField().type(Cypress.env('email'));
        loginPage.getPasswordInputField().type(Cypress.env('password'));
        loginPage.getButton().click();
        homePage.getRegisteredUserSubhead().should('contain', 'Beatrice');

        homePage.checkIfPopUpWindowIsVisible().then($element => {
            if ($element.is(':visible')){
              homePage.closePopUpWindow().click();
            }
        });

    });
});

describe('Make an order as user', () => {
    it.only('should choose a day and a provider', () => {
        homePage.chooseADay(4).click();       //thursday = 4
        homePage.chooseAProvider(3).click(); // gimtadienis
        cy.url().should('include', 'dishes/thursday/gimtadienis');
    });

    it('should order one soup and one main dish', () => {
        cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text').click();
        var soup = cy.get(':nth-child(2) > .layout > :nth-child(1) > .v-card__text > div').invoke('text');
        cy.get(':nth-child(4) > .layout > :nth-child(2) > .v-card__text').click();
        var main = cy.get(':nth-child(4) > .layout > :nth-child(2) > .v-card__text > div').invoke('text');
       // cy.get(':nth-child(2) > :nth-child(1) > .v-chip > .v-chip__content').then(($element) => {
        //    expect($element.text()).to.include('main');
       // });//.invoke('text').should('contain.text', main);
    });
    
});