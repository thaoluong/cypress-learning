describe('Exploring default command timeout',{defaultCommandTimeout: 10000}, () => {
 it('Test1', {defaultCommandTimeout: 5000} () => {
    cy.visit("/login");

    cy.get("#taolao", {timeout: 10000}).type("abc"); // set timeout for each element
    cy.get("#username").type("abc"); // applied the default timeout = 4000ms 

 });
})
