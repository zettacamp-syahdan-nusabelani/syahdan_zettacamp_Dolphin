


describe('Login', () => {
  it('Login', () => {
    cy.visit('http://localhost:4200/')
    cy.get('input[data-cy="input-name"]').type('test@gmail.com');
    cy.get('input[data-cy="input-password"]').type('123');
    cy.get('button[data-cy="btn-login"]').click();
    cy.get('button[data-cy="btn-logout"]').click();
  })
})


