/// <reference types="Cypress" />



context("Test pokemon API", () => {
    it("API assert status code",()=>{
        cy.request("https://pokeapi.co/api/v2/berry-flavor/1").then(($res) => {
            expect($res.status).to.eql(200);
        })
    })

    it("API status code 404", ()=>{
        cy.request({ 
        method:'GET',
        url:'https://pokeapi.co/api/v2/berry-flavor/berry',
        failOnStatusCode:false
        }).then(($res) => {
            expect($res.status).to.eql(404);
        })  
    })
    
    it("Test Pokemon API has body", ()=>{
        cy.request('GET',"https://pokeapi.co/api/v2/berry-flavor/1").then((response) => {
            expect(response).to.have.property('body')
        })
    })
       
    it("Test API body has a property", ()=>{
        cy.request("https://pokeapi.co/api/v2/berry-flavor/1").its('body').should('have.property','berries');
    }) 
    it("Test Pokemon API has a nested property", ()=>{
        cy.request('GET',"https://pokeapi.co/api/v2/berry-flavor/1").then((response) => {
            expect(response.body).not.to.be.null
            expect(response.body.berries).to.have.length(29)
        })
    })
    
   

   
})