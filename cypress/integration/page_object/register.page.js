

export default class RegisterPage {
    
    get first_name() {
        return cy.get('#firstName')
    }
    
    get last_name() {
        return cy.get('#lastName')
    }

    get password() {
        return cy.get('#password')
    }

    get password_confirmation() {
        return cy.get('#passwordConfirmation')
    }
    
    get email() {
        return cy.get('#email')
    }

    get checkbox() {
        return cy.get('#checkbox')
    }
    
    get submit() {
        return cy.get('button[name=submit]')
    }

     register({name, surname, email, password, passConf, checkbox}) {
        name && this.first_name.type(name)
        surname && this.last_name.type(surname)
        email && this.email.type(email)
        password && this.password.type(password)
        passConf && this.password_confirmation.type(passConf)
        checkbox && this.checkbox.check()
        this.submit.click()
    }

    

   

    // register({first_name, last_name, email, password, password_confirmation}) {
    //     this.first_name.type(first_name)
    //     this.last_name.type(last_name)
    //     this.email.type(email)
    //     this.password.type(password)
    //     this.password_confirmation.type(password_confirmation)
    // }

    /*register({first_name, last_name, email, password, password_confirmation}) {
        this.first_name.type(first_name)
        this.last_name.type(last_name)
        this.email.type(email)
        this.password.type(password)
        this.password_confirmation.type(password_confirmation)
    } */

}

export const registerPage = new RegisterPage()
