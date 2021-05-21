describe('Verify the JavaScript Alerts functionality', () => {

    beforeEach(function () {
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
    })

    it('To verify user is able to click on JS Alert button', () => {
        cy.get('button[onclick="jsAlert()"]').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('I am a JS Alert')
        })
    })

    it('To verify user is able to click on JS Confirm button', () => {
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('I am a JS Confirm')
        })
    })

})