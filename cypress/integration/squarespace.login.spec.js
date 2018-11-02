describe('when I go to Squarespace login page', () => {
  it('should throw an error if login details are incorrect', () => {
    cy.visit('https://login.squarespace.com');

    cy.login('test', 'testpasssword');
    cy.get('[data-test=sentinel-password-error]')
      .should('be.visible');
  });
})