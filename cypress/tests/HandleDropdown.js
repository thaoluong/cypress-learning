const DROPDOWN_SELECTOR = "select[id='dropdown']";
describe('Handling dropdown', () => {
    it('Should be able to select dropdown option', () => {
        //visit the dropdown page
        cy.visit('/dropdown');

        //Select by index | select option1
        cy.get(DROPDOWN_SELECTOR).select(1);

        //Select by value | select option2
        cy.get(DROPDOWN_SELECTOR).select("2");

        //Select the visible text | select option1
        cy.get(DROPDOWN_SELECTOR).select("Option 1");

        //Verify the selected option is now option1
        cy.get("select option:selected").invoke("text").should("eq", "Option 1");
    });
})
