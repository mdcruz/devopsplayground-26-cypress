/// <reference types="Cypress" />

describe('when I go to my image gallery application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/gallery/');
  });

  it('should display the title correctly', () => {
    cy.get('.header')
      .should('have.text', 'Image Gallery');
  });

  it('should click on the image gallery', () => {
    cy.get(':nth-child(2) > .tile-viewport > img')
      .click({force: true});

    cy.get('.footerCaption_2r5qf')
      .should('be.visible')
      .should('have.text', 'Dog in the Park - Marie Cruz');
  });

  it('should pass basic accessibility tests', () => {
    // IMPLEMENT ME
  });

});