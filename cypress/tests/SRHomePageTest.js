import { SRHomePage } from "../models/pages/SRHomePage";

describe('SR Homepage test', () => {
    it('should', () => {
        cy.visit('/');
        cy.get('.card__title').each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim);
        })
    })

    it.only('interact with a component', () => {
        cy.visit('/');
        const srHomePage = new SRHomePage();
        srHomePage.heroComponent().cardTitle.each(($title, index) => {
            cy.log(index);
            cy.log($title.text().trim());
        })
    })
   
});
