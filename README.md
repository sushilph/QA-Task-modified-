# QA Automation Task – SauceDemo

## Objective
This project demonstrates QA automation fundamentals by creating an automated test suite for a public demo website using Cypress.

Website tested: https://www.saucedemo.com/


## Framework & Tools Used
- Automation Framework: Cypress
- Language: JavaScript
- Test Runner: Cypress Test Runner
- Browser: Chrome (default)
- OS: Windows



## Automated Test Cases

### 1. Successful Login Test
- Login with valid credentials
- Verify user is redirected to Products page

### 2. Failed Login Test
- Login with invalid credentials
- Verify appropriate error message is displayed

### 3. Add Product to Cart Test
- Login with valid credentials
- Add a product to cart
- Verify cart badge count

### 4. Checkout Product Test
- Login
- Add product to cart
- Complete checkout process
- Verify order success message

---

## Project Structure
cypress/
└── e2e/
├── login.cy.js
├── cart.cy.js
└── checkout.cy.js
└── support/
├── commands.js
└── e2e.js