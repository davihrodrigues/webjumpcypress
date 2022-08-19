
module.exports = {

    values:{
        url: '/',
    },

    // Navigation
    openPage(){
        cy.visit(this.values.url);
    },

    //fields
    fillField(id, text){
        cy.get(id).type(text);
    },
    // Clicks
    clickOnSomethingAndNotVisible(id, name){
        cy.get(id).click().should('contain', name).should('not.be.visible', name)

    },
    clickOnSomething(id){
        cy.get(id).click().should('be.visible')

    },
    selectBox(id, select){
        cy.get(id).select(select)

    },
    // Verifications
    verifyNotVisible(id){
        cy.get(id).should('not.visible');
    },
    // Events
    openAndInteractIframe(id, name)  {
    cy.get("iframe[src='buttons.html']")
        .its('0.contentDocument').should('exist')
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
        .find(id).should('have.text', name).click().should('not.be.visible', name)
    }
};