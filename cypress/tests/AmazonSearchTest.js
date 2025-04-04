
import AmazonHomePage from '../models/pages/AmazonHomePage'
import AmazonSearchResultPage from '../models/pages/AmazonSearchResultPage';
describe('Amazon Search Test', () => {
    it('should be able to search dinning table', () => {
        const SEARCH_TEXT = "Dinning table";
        cy.visit('/');
        let amazonHome = new AmazonHomePage();
        amazonHome.searchTextbox.type(SEARCH_TEXT);
        amazonHome.searchButton.click();

        let amazonSearchResult = new AmazonSearchResultPage();
        // amazonSearchResult.searchResult.should("not.have.length", 0);
        amazonSearchResult.result().should("not.have.length", 0);

    });    
  
});
