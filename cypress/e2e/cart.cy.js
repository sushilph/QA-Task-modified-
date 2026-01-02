
describe('Cart Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.login()
  })

  it('Add product to cart', () => {
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')
  })
})
