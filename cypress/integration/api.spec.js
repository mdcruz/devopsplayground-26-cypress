/// <reference types="Cypress" />

describe('API testing using Cypress', () => {
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
      expect(response.status).to.equal(200);
      expect(response.body).to.deep.eq(expectedData.articles);
    }); 
  });

  it('should mock data successfully', () => {
    cy.server();
    cy.route('http://localhost:3004/articles', [{
        "id": 1,
        "title": "Test Article",
        "author": "Marie",
        "headline": "This is a test article"
      }]
    );

    cy.request('http://localhost:3004/articles').then(response => {
      console.log(response.body);
    }); 

  });
});