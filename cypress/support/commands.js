Cypress.Commands.add('loginAsStandardUser',()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should("include", "/inventory.html")
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Products')
})