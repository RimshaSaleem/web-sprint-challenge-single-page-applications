describe('tests', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/pizza')
    })

})

describe('Form', () => {
    it('Renders Form', ()=> {
        cy.visit('http://localhost:3002/pizza')
    })
    it('inputs names', () =>{
        cy.get('#name-input')
        .type('Rimsha').should('have.value', 'Rimsha')

    })
    it('selects toppings', () => {
        cy.get('#cheese').check()
        cy.get('#feta_cheese').check()
        cy.get('#pepperoni').check()
        cy.get('#sausage').check()
        cy.get('#olives').check()
        cy.get('#bbq').check()

     })
     it('Select size for pizza' , () => {
         cy.get('#size-dropdown').select('regular')
     })
     it('can submit the form', () => {
           cy.get('#order-button')
           .should('not.be.disabled')
           .click()
     })
    }) 

