import { registerPage } from '/home/bogdan/cypress/zavrsniZadatak/cypress/integration/page_object/register.page.js';
import { REGISTRACIJA } from '../../fixtures/register-login.constants';
//const alert = '.alert-danger'
//import { randomEmail } from 'home/bogdan/cypress/zavrsniZadatak/cypress/utiils/index'





describe("Testing registration", function() {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('Register').click()
        cy.url().should('include', '/register')
    })
    

    it("Testing fields, chechbox and submit in register page", function() {
            registerPage.register(REGISTRACIJA);
            // cy.get('#firstName').should('have.maxlength', 255);
            // cy.get('#lastName').should('have.maxlength', 255);
            // cy.get('#email').should('have.maxlength', 255);
           
            
    


        // cy.get('.alert-danger').eq(0).contains('The email must be a valid email address.').click()
        // cy.get('.alert-danger').eq(1).should('contain', 'The password confirmation does not match.')

    })



})
