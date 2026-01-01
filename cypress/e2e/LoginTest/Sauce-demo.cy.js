
// Test Suite: Sauce Demo E2E Flow
describe('Sauce Demo - Comprehensive Tests', () => {

    // Runs before every single test in the entire file
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    // --- SECTION 1: LOGIN ---
    describe('Login Functionality', () => {
        it('should login successfully with valid credentials', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
            cy.get('.title').should('have.text', 'Products')
        })

        it('should show error message with invalid credentials', () => {
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('wrong-password')
            cy.get('#login-button').click()
            cy.get('[data-test="error"]').should('be.visible')
                .and('contain', 'Username and password do not match')
        })
    })

    // --- SECTION 2: CART & CHECKOUT ---
    describe('Purchase Flow', () => {
        it('should add product to cart and complete checkout', () => {
            // 1. Login
            cy.get('#user-name').type('standard_user')
            cy.get('#password').type('secret_sauce')
            cy.get('#login-button').click()
            
            // 2. Add Product to Cart
            cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
            cy.get('.shopping_cart_badge').should('have.text', '1')
            
            // 3. Verify Cart & Start Checkout
            cy.get('.shopping_cart_link').click()
            cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
            cy.get('[data-test="checkout"]').click()
            
            // 4. Enter User Information
            cy.get('[data-test="firstName"]').type('John')
            cy.get('[data-test="lastName"]').type('Doe')
            cy.get('[data-test="postalCode"]').type('12345')
            cy.get('[data-test="continue"]').click()
            
            // 5. Final Overview and Finish
            cy.get('.title').should('have.text', 'Checkout: Overview')
            cy.get('[data-test="finish"]').click()
            
            // 6. Final Verification
            cy.get('.complete-header').should('have.text', 'Thank you for your order!')
            cy.get('[data-test="checkout-complete-container"]').click();
        })
    })
})