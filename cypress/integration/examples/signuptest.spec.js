/// <reference types="cypress" />

import {sign} from '../../pageObjects/dbanksignup'

beforeEach(()=>{
    cy.visit("http://dbankdemo.com/signup")
    
    
})
const name = "Cynthia";
const lastname = "Zoe";
const address = "123 Digital Lane";
const locality = "internet City";
const region = "CA";
const country = "US";
it("signUpTest",()=>{
    sign.title().select("Mr.");
    sign.name().type(name);
    sign.lastname().type(lastname);
    sign.malegender().click();
    sign.birthday().type("11/11/1111");
    sign.securitynumber().type(Math.trunc(Math.random(1)*1000000000));
    sign.email().type( `${name}@gmail.com`);
    sign.password().type(`${name}${lastname}1`);
    sign.confirmpassword().type(`${name}${lastname}1`);
    sign.nextButton().click({force: true});
    sign.address().type(address);
    sign.locality().type(locality);
    sign.region().type(region);
    sign.postalCode().type(Math.trunc(Math.random(1)*100000));
    sign.country().type(country);
    sign.homePhone().type(Math.trunc(Math.random(1)*10000000000));
    sign.mobilePhone().type(Math.trunc(Math.random(1)*10000000000));
    sign.workPhone().type(Math.trunc(Math.random(1)*10000000000));
    sign.agreeTerms().click();
    sign.register().click();

    cy.get('.badge').should("include.text", "Success")
})