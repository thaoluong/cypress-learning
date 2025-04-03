const CHECKBOXES_SELECTOR = "[type='checkbox']";
describe('Handling checkboxes', () => {
    it('Should be able to select/unselect a checkbox', () => {
        cy.visit("/checkboxes");

        //Try to unselect the second checkbox
        cy.get(CHECKBOXES_SELECTOR).eq(1).click();

        //Verify all checkboxes are unselected
        cy.get(CHECKBOXES_SELECTOR).filter(":not([checked])").should("have.length", 2);

        //Loop over all checkboxes again and then select all
        cy.get(CHECKBOXES_SELECTOR).filter(":not([checked])").then(item => {
            cy.get(item).click({multiple: true})
        })
    });
  
})
