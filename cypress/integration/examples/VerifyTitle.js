describe('WebChecks', function () {
    it('Verify Title of The Page-positive', function () {
        cy.visit('https://nj.pseg.com/')
        cy.title().should('eq', 'Home Page - PSE&G')
    })
    it('verifying title of page-negative', function () {
        cy.visit('https://nj.pseg.com/')
        cy.title().should('eq', 'Login')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        debugger
    })
})//end of tests