describe('TC3', () => {
  it('check item sum', () => {
    cy.visit('http://localhost:4200/')
    cy.get('input[data-cy="input-name"]').type('test@gmail.com');
    cy.wait(500)
    cy.get('input[data-cy="input-password"]').type('123');
    cy.wait(500)
    cy.get('button[data-cy="btn-login"]').click();

    cy.wait(500)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(0).click()
    cy.get('input[data-cy="input-cart-item-amount"]').eq(0).should('have.value', 1).then(() => {
      cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(0).click()
      cy.get('input[data-cy="input-cart-item-amount"]').eq(0).should('have.value', 2);
      
      // amount check
      // function to invoke a method on the selected element.
      // In this case, it's invoking the html() method, which retrieves the inner HTML content of the selected element.
      cy.get('span[data-cy="text-cart-item-total-price"]').invoke('html').should('include', 'Rp30,000')
    })

    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(1).click()
    cy.get('input[data-cy="input-cart-item-amount"]').eq(1).should('have.value', 1).then(() => {
      cy.get('button[data-cy="btn-add-menu-item-to-cart"]').eq(1).click()
      cy.get('input[data-cy="input-cart-item-amount"]').eq(1).should('have.value', 2);
      
      // amount check
      cy.get('span[data-cy="text-cart-item-total-price"]').invoke('html').should('include', 'Rp30,000')
    })

    cy.get('button[data-cy="btn-checkout"]').invoke('html').should('include', 'Rp60,000')


    cy.get('button[data-cy="btn-checkout"]').click();
    cy.wait(500)
    cy.get('button[data-cy="btn-logout"]').click();

  })
})