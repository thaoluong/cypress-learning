const SEARCH_TEXTBOX_SEL = "#twotabsearchtextbox";
const SEARCH_BTN = "#nav-search-submit-button";

class AmazonHomePage {
    get searchTextbox(){
        return cy.get(SEARCH_TEXTBOX_SEL)
    }
    
    get searchButton(){
        return cy.get(SEARCH_BTN)
    }
}
module.exports = AmazonHomePage