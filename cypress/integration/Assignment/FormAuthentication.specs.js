describe('Verify the Form Authentication functionality',()=>{

    beforeEach(function (){
        cy.visit('http://the-internet.herokuapp.com/login')
    })

  it('To verify user is able to login with correct username and password',()=>{
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').contains('You logged into a secure area!')
        cy.get('.secondary').should('have.text',' Logout')
    })

    it('To verify user is able to Logout',()=>{
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('.secondary').click()
        cy.get('#flash').contains('You logged out of the secure area!')
        cy.get('.radius').should('be.enabled')

    })

    it('To verify system behavior when email id and password are left blank and log in entered',()=>{
        cy.get('.radius').click()
        cy.get('#flash').contains('Your username is invalid!')
    })

    it('To verify user click on login with entering Invalid username and valid password',()=>{
        cy.get('#username').type('test')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').contains('Your username is invalid!')
    })

    it('To verify user click on login with entering Valid username and Invalid password',()=>{
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('passwod')
        cy.get('.radius').click()
        cy.get('#flash').contains('Your password is invalid!')
    })

    it('To verify user click on login with entering Invallid username and Invalid password',()=>{
        cy.get('#username').type('tester')
        cy.get('#password').type('passwod')
        cy.get('.radius').click()
        cy.get('#flash').contains('Your username is invalid!')
    })
})