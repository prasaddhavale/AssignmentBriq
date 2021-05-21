describe('Get resquest' ,() =>{

    var title = "new"
    var author = "Prasad"
    
    it("validate the respone for the post request",() =>{

        cy.request({
            method:"POST",
            url:"http://localhost:3000/posts",
            body:{
                title:title,
                author:author
            }

        }).then(response =>{
            expect(response.status).to.eq(201)
            var body= JSON.parse(JSON.stringify(response.body))
            expect(body).has.property('title' ,title)
            expect(body).has.property('author' ,author)
        })

    });

    it('validate the  post request via get resquest',() =>{
        cy.request({
            method:"GET",
            url:"http://localhost:3000/posts",
            headers:{
                accept:"application.json"
            }

        }).then(response =>{
            var body= JSON.parse(JSON.stringify(response.body))
            expect(body[(body.length)-1].title).to.eq(title)

        })

    })

    it('Delegte request',() => {

        cy.request({
            method:"DELETE",
            url:"http://localhost:3000/posts/8"
        }).then(response => {

            expect(response.status).to.eq(200);

        })

    })

    it("validate the respone for the post request",() =>{

        cy.request({
            method:"PUT",
            url:"http://localhost:3000/posts/7",
            body:{
                title:"TestNEW",
                author:"Dhavale"
            }

        }).then(response =>{
            expect(response.status).to.eq(200)
            var body= JSON.parse(JSON.stringify(response.body))
            expect(body).has.property('title' ,"TestNEW")
            
        })

    });

})