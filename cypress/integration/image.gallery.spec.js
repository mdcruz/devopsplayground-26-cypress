describe('Image gallery application', () => {
  beforeEach(() => {
    cy.viewport(1680, 917);
    cy.visit('/');
  });

  it('should display the title correctly', () => {
    cy.get('#title').should('have.text', ' Marie Cruz ');
    cy.get('.icons > ul > li').should('have.length', 3);
  });

  it('should click on the image gallery', () => {
    cy.get('img[title="Dog in the Park - Marie Cruz"]').click();
    cy.get('.image_1swebtw-o_O-imageLoaded_zgbg08').should('be.visible');
  });

  it('should close the image when close button is clicked', () => {
    cy.get('img[title="Dog in the Park - Marie Cruz"]').click()
      .get('.close_1x3s325').click();

    cy.get('.image_1swebtw-o_O-imageLoaded_zgbg08').should('not.be.visible');
  });

  it('should click on the next image', () => {
    cy.get('img[title="Dog in the Park - Marie Cruz"]').click()
      .get('.arrow_b9bbag-o_O-arrow__direction__right_174p6a9-o_O-arrow__size__medium_9f7hgo').click();

    cy.get('.footerCaption_2r5qf').should('have.text', 'Swan Origami - Marie Cruz');
  });
});