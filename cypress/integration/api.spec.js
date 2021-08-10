import JOI from "joi";

describe("API", () => {
    context('Users', () => {
        it("Response status code should be 200", () => {
            cy.request("users").should((response) => {
                expect(response.status).to.be.equal(200)
            })
        })
    })

    context('Todos', () => {
        it("Response status code should be 200", () => {
            cy.request("todos").should((response) => {
                expect(response.status).to.be.equal(200)
            })
        })

        it("Response body should validate schema", () => {
            const schema = JOI.array().items(
                JOI.object({
                    userId: JOI.number(),
                    id: JOI.number(),
                    title: JOI.string(),
                    completed: JOI.bool()
                })
            )

            cy.request("todos").should((response) => {
                expect(schema.validate(response.body).error).to.be.undefined
            })
        })
    })
})
