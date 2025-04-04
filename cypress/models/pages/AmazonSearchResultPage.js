const SEARCH_RESULTS = 'div[cel_widget_id^="MAIN-SEARCH_RESULTS';

class AmazonSearchResultPage {

    get searchResult(){
        return cy.get(SEARCH_RESULTS);
    }

    result(){
        return cy.get(SEARCH_RESULTS);
    }


}
module.exports = AmazonSearchResultPage;