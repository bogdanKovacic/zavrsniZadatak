export default class LoginPage {

    get email() {
        return cy.get('input[type=text]')
    }
       
    get password() {
        return cy.get('input[type=password]')
    }
    
    get submit() {
        return cy.get('button[type=submit]')
    }

     login({email, password}) {
        email && this.email.type(email)
        password && this.password.type(password)
        this.submit.click()
    }

}

export const loginPage = new LoginPage()