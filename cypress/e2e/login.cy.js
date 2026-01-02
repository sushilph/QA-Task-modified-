describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login with valid credentials', () => {
    cy.login()
    cy.url().should('include', 'inventory')
    cy.get('.app_logo').should('contain', 'Swag Labs')
  })

  it('Login with invalid credentials', () => {
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('wrong-password')
    cy.get('#login-button').click()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain', 'Epic sadface')
  })
})
