/// <reference types="Cypress" />

describe('Mocking data with Cypress', () => {
  it('should mock data successfully', () => {
    const mockData = [{
      id: 1,
      name: 'Marie Drake',
      email: 'marie.cruz1@news.co.uk',
    },
    {
      id: 2,
      name: 'Xin Wang',
      email: 'xin.wang1@news.co.uk',
    }];

    cy.server();
    cy.route('https://jsonplaceholder.typicode.com/users', mockData);

    cy.visit('http://localhost:3000/authors');
    cy.get('.authorList > li')
      .should('have.length', 2)
      .first().invoke('text').should('be.equal', 'Marie Drake ');
  });
});