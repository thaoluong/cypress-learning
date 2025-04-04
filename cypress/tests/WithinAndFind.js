describe('Learn about within and find methods', () => {
    it('within method', () => {
        cy.visit('/');
        // cy.get('.card__title').each(($cardTitle, index) => {
        //     cy.log(index);
        // })
        cy.get('.showcase__hero').within(() => {
            // cy.get('.card__title')

            cy.get('.card__title').each(($cardTitle, index) => {
                    cy.log(index);
            })
            
        })

    });

    it.only('find method', () => {
        cy.visit('/');
        cy.get('.showcase__hero').find('.card__title').each(($cardTitle, index) => {
            cy.log(index)
        })
    })
})
