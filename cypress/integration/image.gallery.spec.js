describe('when I go to my image gallery application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the title correctly', () => {
    cy.get('#title')
      .should('have.text', ' Marie Cruz ');

    cy.get('.icons ul li')
      .should('have.length', 3);
  });

  it('should click on the image gallery', () => {
    cy.get(':nth-child(2) > .tile-viewport > img')
      .click({force: true});

    cy.get('.footerCaption_2r5qf')
      .should('be.visible')
      .should('have.text', 'Dog in the Park - Marie Cruz');
  });

});