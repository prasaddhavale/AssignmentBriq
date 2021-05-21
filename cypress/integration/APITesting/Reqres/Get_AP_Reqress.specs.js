describe('Get resquest' ,() =>{
    
    it("validate the status for get request ",() =>{
        var result = cy.request('https://reqres.in/api/users?page=2')
        result.its("status").should('equal',200)
    })
})
