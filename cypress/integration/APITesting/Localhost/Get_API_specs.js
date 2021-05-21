describe('Get resquest' ,() =>{
    
    it("validate the status for get request ",() =>{
        var result = cy.request('http://localhost:3000/posts')
        result.its("status").should('equal',200)
    })

    it("validate the respone for the get request",() =>{

        cy.request({

            method:"GET",
            url:"http://localhost:3000/posts",
            headers:{
                accept:"application.json"
            }

        }).then(response =>{

            var body= JSON.parse(JSON.stringify(response.body))

            // expect(body[0]).has.property('title' ,'json-server')
            // expect(body[0]).has.property('id' ,1)
            // expect(body[0]).has.property('author' ,'typicode')

            body.forEach(element => {
                
                expect(element).to.have.all.keys("id","title","author");
                cy.log(element['title'],element["id"],element["author"])

            });

        })

    })

})