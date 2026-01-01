# Sauce Demo E2E Automation Suite
This repository contains automated end-to-end (E2E) tests for the Sauce Demo website. 
It validates core functionality including user authentication, product selection, and the full checkout process.

# Framework & Tools Used
  Cypress: Core automation framework for browser-based testing.
  JavaScript: Scripting language for test development.
  GitHub Actions: CI/CD tool used to run tests automatically on every push.
  Node.js: Runtime environment for managing project dependencies.

# Test Case,Description
  Login - Valid Credentials,Verifies that a user can successfully log in and reach the Products page using correct credentials.
  Login - Invalid Credentials,Validates that the system displays an appropriate error message when login fails.
  Add to Cart,"Confirms that selecting ""Add to Cart"" updates the cart badge count correctly."
  Full Purchase Flow,An end-to-end test covering Login -> Adding a product -> Entering Checkout info -> Completing the order.

# Project Structure
├── .github/workflows/
│   └── cypress.yml         
├── cypress/
│   ├── e2e/
│   │   └── Sauce-demo.cy.js # Main test suite
│   ├── videos/            
│   └── screenshots/        
├── cypress.config.js       # Cypress environment settings
├── package.json            # Project scripts and dependencies
└── README.md               # Project documentation
