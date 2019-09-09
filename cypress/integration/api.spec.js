describe('API testing using Cypress', () => {
  it('should have 200 status code', () => {
    cy.request('http://localhost:3004/articles')
      .its('status')
      .should('equal', 200);
  });

  it('should contain expected items', () => {
    const expectedData = {
      "articles": [{
          "id": 1,
          "title": "News Article",
          "author": "John Smith",
          "headline": "This is a news article"
        },
        {
          "id": 2,
          "title": "Fabulous Article",
          "author": "Jane Smith",
          "headline": "This is a fabulous article"
        },
        {
          "id": 3,
          "title": "Tech Article",
          "author": "James Smith",
          "headline": "This is a tech article"
        }
      ]
    };

    cy.request('http://localhost:3004/articles').then(response => {
      expect(response.body).to.deep.eq(expectedData.articles);
    }); 
  });

  it('should mock data successfully', () => {
    // IMPLEMENT ME
  });
});