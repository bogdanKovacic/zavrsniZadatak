
import { loginPage } from '/home/bogdan/cypress/zavrsniZadatak/cypress/integration/page_object/login.page.js';
import { LOGIN } from '../../fixtures/register-login.constants';
const alert = '.alert-danger'





describe("Testing login", function() {

    beforeEach(() => {
        cy.visit('/');
        cy.contains('login').click()
        cy.url().should('include', '/login')
        loginPage.login(LOGIN)
    })
    
    it("testing  pagination", function (){
        cy.get('button[class=btn]')

    })


})