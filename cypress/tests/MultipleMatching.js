describe('Multiple element match interaction', () => {
    it('Should be able to interact with list of elements', () => {
        cy.visit("/login");

        // eq(0): find index 0 to interact
        cy.get("input").eq(0).type("tomsmith");

        // eq(1): find index 1 to interact
        cy.get("input").eq(1).type("SuperSecretPassword!");


        // Use closure
        cy.get("input").then(items => {
            cy.get(items[0]).clear();
            cy.get(items[0]).type("tomsmith");
            cy.get(items[1]).clear();
            cy.get(items[1]).type("SuperSecretPassword!");
        })

        // Use .each
        cy.get("input").each((item, index) => {
            cy.get(item).type("somethings");
        });

        // Find login button by attribute and tag name then click
        cy.get("button[type='submit']").click();

        //Debug purpose only
        cy.wait(1000);
    });
  
})
