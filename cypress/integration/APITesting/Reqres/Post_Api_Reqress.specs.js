describe('Get resquest' ,() =>{

    var Name1 = "Prasad"
    var Job = "Tester"
    
    it("validate the respone for the post request",() =>{

        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                name:Name1,
                job:Job
            }

        }).then(response =>{
            expect(response.status).to.eq(201)
            var body= JSON.parse(JSON.stringify(response.body))
            expect(body).has.property('name' ,Name1)
            expect(body).has.property('job' ,Job)
        })

    })
})