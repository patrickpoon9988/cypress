describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/search');

    cy
    .get('button.underline')
    .contains('Login')
    .click();

    cy.get('input#username')
    .type("user6");

    cy.get('input#password')
    .type("1234");

    cy.get('input').contains('Login').click();

    cy.get('button').contains('Search').click();

  })
})