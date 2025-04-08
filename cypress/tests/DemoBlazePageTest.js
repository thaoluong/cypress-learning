import DemoBlazePage from "../models/pages/DemoBlazePage";
import demoBlazeProduct from "../models/TestJSON/DemoBlazeProduct.json"

describe('Test all card list', () => {

    it('Test name and price of the cards', () => {
        cy.visit('https://www.demoblaze.com');
        let demoBlaze = new DemoBlazePage();
        demoBlaze.getAllCardData().then(allCardData => {
            cy.wrap('').then(() => {
                cy.log(JSON.stringify(allCardData));
                expect(allCardData).to.be.deep.eq(demoBlazeProduct);
                
            })
        })

    })
  
})
