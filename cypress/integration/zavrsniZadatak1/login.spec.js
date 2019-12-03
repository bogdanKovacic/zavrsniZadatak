
import { loginPage } from '/home/bogdan/cypress/zavrsniZadatak/cypress/integration/page_object/login.page.js';
import { LOGIN } from '../../fixtures/register-login.constants';


describe("Testing login", function() {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('login').click()
        cy.url().should('include', '/login')
    })
    

    it("Testing fields and login in Sign in page", function() {
        loginPage.login(LOGIN)
    
  

    })



})
