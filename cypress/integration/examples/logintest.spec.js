/// <reference types="cypress" />
import {login} from '../dbanklogin.js'

beforeEach(()=>{
    cy.visit("http://dbankdemo.com/login")
    
    
})

it("loginCorrectly",()=>{
    login.email().type("userpepe@gmail.com");
    login.password().type("Pepeuser1");
    login.loginButton().click();
    cy.url().should("include", "/home");
    
})
it("loginIncorrectly",()=>{
    login.email().type("userpepe@gail.com");
    login.password().type("Pepeuser");
    login.loginButton().click();
    cy.url().should("include", "/login?error");
    
})
it("wrongPassword",()=>{
    login.email().type("userpepe@gmail.com");
    login.password().type("Pepeuser");
    login.loginButton().click();
    cy.get('.badge').should("include.text", "Error")
    cy.url().should("include", "/login?error");  
})
it("wrongEmail",()=>{
    login.email().type("userpepe@mail.com");
    login.password().type("Pepeuser1");
    login.loginButton().click();
    cy.get('.sufee-alert').should("include.text", "Invalid credentials or access not granted.")
    cy.get('.badge').should("include.text", "Error")
    cy.url().should("include", "/login?error");  
})


