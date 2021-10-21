describe('Cypress Browser Demo',()=>{
    
    it('browser Properties',()=>{
        cy.log(Cypress.browser);
    })

    it('Accordion Test',function(){

        cy.visit('https://demoqa.com/accordian')

        cy.get('.collapse').eq(6).then($element=>{
            cy.log(`State of the dropdown as soon as I load the website: ${Cypress.dom.isVisible($element)}`)
            
        })
    })
})