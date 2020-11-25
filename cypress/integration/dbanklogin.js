/// <reference types="cypress" />
export class dbanklogin{
    email(userEmail){
        return cy.get('#username')
        
    }

    password(){
        return cy.get('#password')
    }

    loginButton(){
        return cy.get('#submit')
    }
}
export const login = new dbanklogin();