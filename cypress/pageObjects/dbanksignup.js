/// <reference types="cypress" />
export class dbanksignup{
    title(){
        return cy.get('#title')
        
    }
    name(){
        return cy.get('#firstName')
    }
    lastname(){
        return cy.get('#lastName')
    }
    malegender(){
        return cy.get('[for="male"] > #gender')
    }
    femalegender(){
        return cy.get('[for="female"] > #gender')
    }
    birthday(){
        return cy.get('#dob')
    }
    securitynumber(){
        return cy.get('#ssn')
    }
    email(){
        return cy.get('#emailAddress')
    }
    password(){
        return cy.get('#password')
    }
    confirmpassword(){
        return cy.get('#confirmPassword')
    }
    nextButton(){
        return cy.get('.btn')
    }
    address(){
        return cy.get('#address')
    }
    locality(){
        return cy.get('#locality')
    }
    region(){
        return cy.get('#region')
    }
    postalCode(){
        return cy.get('#postalCode')
    }
    country(){
        return cy.get('#country')
    }
    homePhone(){
        return cy.get('#homePhone')
    }
    workPhone(){
        return cy.get('#workPhone')
    }
    mobilePhone(){
        return cy.get('#mobilePhone')
    }
    agreeTerms(){
        return cy.get('#agree-terms')
    }
    register(){
        return cy.get('.btn')
    }

}
export const sign = new dbanksignup();