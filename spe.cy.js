describe("SPE Testing", () => {

    it.skip("Login with blank username and blank password",()=>{
        cy.visit("https://admin-tap.spesandbox.com/site/login")
        cy.get('#loginform-username').type(" ")
        cy.get('#loginform-password').type(" ")
        cy.get(".btn btn-login btn-primary btn-block").click()
    })
    
    
    it.skip("Login with wrong username and wrong password",()=>{
        cy.visit("https://admin-tap.spesandbox.com/site/login")
        cy.get('#loginform-username').type("dfdfdf")
        cy.get('#loginform-password').type("dfererdd")
        cy.get(".btn btn-login btn-primary btn-block").click()
    })

    it.skip("Login with wright username and wrong password",()=>{
        cy.visit("https://admin-tap.spesandbox.com/site/login")
        cy.get('#loginform-username').type("QA Skill Test 2")
        cy.get('#loginform-password').type("dfererdd")
        cy.get(".btn btn-login btn-primary btn-block").click()
    })

    it.skip("Login with wrong username and wright password",()=>{
        cy.visit("https://admin-tap.spesandbox.com/site/login")
        cy.get('#loginform-username').type("dfdfdf")
        cy.get('#loginform-password').type("Spe-2022")
        cy.get(".btn btn-login btn-primary btn-block").click()
    })

    it("Login with wright username and wright password",()=>{
        cy.visit("https://admin-tap.spesandbox.com/site/login")
        cy.get('#loginform-username').type("QA Skill Test 2")
        cy.get('#loginform-password').type("Spe-2022")
        cy.get('[name="login-button"]').contains("Login").click({force:true})
    })
})