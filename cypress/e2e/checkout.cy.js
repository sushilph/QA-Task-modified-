
describe('Checkout Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
    cy.login()
  })

  it('Complete checkout successfully', () => {
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="firstName"]').type('Sushil')
    cy.get('[data-test="lastName"]').type('Phulara')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="finish"]').click()
    cy.get('.complete-header')
      .should('have.text', 'Thank you for your order!')
  })
})
