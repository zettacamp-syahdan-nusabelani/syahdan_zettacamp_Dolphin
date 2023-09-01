


describe('LoginBuyAndCheckout', () => {
  it('Buy And Checkout', () => {
    cy.visit('http://localhost:4200/')
    cy.get('input[data-cy="input-name"]').type('test@gmail.com');
    cy.wait(500)
    cy.get('input[data-cy="input-password"]').type('123');
    cy.wait(500)
    cy.get('button[data-cy="btn-login"]').click();
    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(0).click();
    cy.get('input[data-cy="input-cart-item-amount"]').eq(0).should('have.value', 1);
    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(1).click();
    cy.get('input[data-cy="input-cart-item-amount"]').eq(1).should('have.value', 1);
    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(2).click();
    cy.get('input[data-cy="input-cart-item-amount"]').eq(2).should('have.value', 1);
    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(0).click();
    cy.get('input[data-cy="input-cart-item-amount"]').eq(0).should('have.value', 2);
    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(3).click();
    cy.get('input[data-cy="input-cart-item-amount"]').eq(3).should('have.value', 1);
    cy.wait(500)
    cy.get('button[data-cy="btn-checkout"]').click();
    cy.wait(500)
    cy.get('button[data-cy="btn-logout"]').click();
  })
})

