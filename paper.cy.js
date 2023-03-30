describe("Paper Auto Test", () => {
    it.skip("Login", () => {
        cy.visit("https://paper.id/webappv1/#/login")
    })

    it("Show Pop-UP",()=>{
        cy.visit("https://paper.id/webappv1/#/login")
        cy.get('[data-cy="identifier"]').type('kandidat@paper.id')
        cy.get('[data-cy="submit"]').contains('Masuk').click()
        cy.get('.auth-dialog').should('be.visible')
    })

    it.skip("Actions", () => {
        cy.visit("https://paper.id/webappv1/#/login")
        cy.get('[data-cy="identifier"]').type('kandidat@paper.id')
        cy.get('[data-cy="submit"]').click()
        cy.get('[data-cy="password"]').type('jakarta123')
        cy.get('[data-cy="submit"]').contains('Masuk').click()
        cy.get('.side-bar-title').invoke('show').click({force:true})
        cy.contains('Invoice Penjualan').click()
        cy.url().should('include','/invoicer/invoice')
        //cy.get('#digpayin-stay1').click()
        //cy.get('.ng-input').invoke('show').click({force: true})
        //cy.get('select').select('GreenTea').should('have.value','GreenTea')
        //cy.get('#btn_product_list_modal').click()
        //cy.get('[role="checkbox"]').check('SKUOO1')
        //cy.get
    })
})