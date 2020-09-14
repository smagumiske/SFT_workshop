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
    /* const body = {
            email: "beatrice@pink.kns",
            password: "Ribbon011",
            $cityId: 1,
            $languageId: 1

        }

        cy.request({
            method: "POST",
            url: '/',
            body
        }).then((response) => {
            window.localStorage.setItem('jwt', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYXRyaWNlQHBpbmsua25zIiwiYWRtaW4iOmZhbHNlLCJpZCI6MTA2MiwiaWF0IjoxNjAwMDczOTA1LCJleHAiOjE2MDA2Nzg3MDV9.jXWOkplKeChMlKbVDVbBND2RR8Ti-HV_TmRFuvQXaJs");
        }) */

        homePage.checkIfPopUpWindowIsVisible().then($element => {
            if ($element.is(':visible')){
              homePage.closePopUpWindow().click();
            }
        });

    });
});

describe('Make an order as user', () => {
    it('should choose a day and a provider', () => {
        homePage.chooseADay(4).click();       //thursday = 4
        homePage.chooseAProvider(3).click(); // gimtadienis
        cy.url().should('include', 'dishes/thursday/gimtadienis');
    });

    it('should order one soup and one main dish', () => {
        
    });
    
});