// -- Start: Application Code --
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const divide = (a, b) => a / b

const multiply = (a, b) => a * b
// -- End: Application Code --

// -- Start: Cypress Tests --
describe('Math', () => {
    context('Math', () => {
        it('Ten plus twenty should equal thirty', () => {
            expect(add(10, 20)).to.eq(30)
        })

        it('Ten minus four should equal six', () => {
            expect(subtract(10, 4)).to.eq(6)
        })

        specify('Fifteen divided by two should equal seven and a half', () => {
            expect(divide(15, 2)).to.eq(7.5)
        })

        specify('Five times four should equal twenty', () => {
            expect(multiply(5, 4)).to.eq(20)
        })
    })
})
// -- End: Cypress Tests --
