//Mocha testsuite
describe('Element Interaction', () => {
    it('Should be able to complete the form', () => {
        cy.log("Hello Cypress!");
        cy.visit("/login"); //Open the login page

        // Find username by ID then input the text
        cy.get("#username").type("tomsmith");

        // Find password by attribute name then input the text
        cy.get("[name='password']").type("SuperSecretPassword!");

        // Find login button by attribute and tag name then click
        cy.get("button[type='submit']").click();

        //Debug purpose only
        cy.wait(1000);

    });
});
