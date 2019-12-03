

describe("Testing login", function() {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('login').click()
        cy.url().should('include', '/login')
        loginPage.login(LOGIN)
    })
    

})