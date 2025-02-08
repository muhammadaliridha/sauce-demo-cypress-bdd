import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the Sauce Demo login page',()=>{
    cy.visit('https://www.saucedemo.com/')
    cy.get('.login_logo').should('be.visible')
})

When('I login with {string}',(userName)=>{
    cy.get('[data-test="username"]').type(userName)
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()    
})

Then('I should be redirected to the Products page',()=>{
    cy.url().should("include", "/inventory.html")
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Products')
})

Then('I should see an error message {string}',(errorMessage)=>{
    cy.get('[data-test="error"]').should('be.visible').and('contain.text',errorMessage)
})

Then('I should remain on the login page',()=>{
    cy.get('.login_logo').should('be.visible')
})

Then('the page load time should be noticeably slower than for other users',()=>{
    Then('the page load time should be noticeably slower than for other users', () => {
        cy.window().then((win) => {
          const perf = win.performance.timing
          const loadTime = perf.loadEventEnd - perf.navigationStart
      
          // Log the measured load time for debugging
          cy.log(`Page load time: ${loadTime}ms`)
      
          // Set a realistic threshold for "slow" load time
          const threshold = 5000 // Adjust this threshold based on expected slow behavior
      
          // Assert that the load time exceeds the threshold
          expect(loadTime, `Expected load time (${loadTime}ms) to be greater than ${threshold}ms`).to.be.greaterThan(threshold)
        })
      
        // Assert that the user is redirected to the Products page
        cy.url().should("include", "/inventory.html")
      })      
})

Then('product images or links should be incorrect or broken',()=>{
 // Check for broken images
 cy.get("img").each(($img) => {
    cy.wrap($img)
      .should("have.attr", "src") // Ensure the image has a src attribute
      .then((src) => {
        if (src.startsWith("data:image")) {
          // Skip images with data URIs (they are valid)
          cy.log("Skipping data URI image")
        } else {
          // For regular URLs, make a request to check status
          cy.request({
            url: src,
            failOnStatusCode: false, // Do not fail the test if the request fails
          }).then((response) => {
            // Assert the status is in the valid range (200-399)
            expect(response.status).to.be.gte(200).and.lt(400)
          })
        }
      })
  })
})

Given('I am logged in as a standard user',()=>{
    cy.loginAsStandardUser()
    
})

When('I click the menu button',()=>{
    cy.get('#react-burger-menu-btn').click()
})

When('I click "Logout"',()=>{
    cy.get('[data-test="logout-sidebar-link"]').click()
})

Then('I should be redirected to the login page',()=>{
    cy.url().should('include','saucedemo')
    cy.get('.login_logo').should('be.visible')
})

When('I leave the username field blank',()=>{
    cy.get('[data-test="password"]').type('secret_sauce')
})

When('I click the {string} button',(buttonName)=>{
    cy.contains('button, input[type="submit"]', buttonName).click()
})

When('I leave the password field blank',()=>{
    cy.get('[data-test="username"]').type('standard_user')
})

When('I am on the Products page',()=>{
    cy.url().should("include", "/inventory.html")
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Products')  
})

  When("I select Name A to Z from the sorting dropdown", function (string) {
    cy.get('[data-test="product-sort-container"]').select('az')
    })

Then('the products should be sorted alphabetically in ascending order',()=>{
    cy.get('[data-test="product-sort-container"]').should("have.value","az").should('contain.text','Name (A to Z)')
    cy.get('[data-test="inventory-item-name"]').should(($item1) => {
        expect($item1).to.have.length(6)
      })
})

When("I select Name Z to A from the sorting dropdown", function (string) {
    cy.get('[data-test="product-sort-container"]').select('za')
    })

Then('the products should be sorted alphabetically in descending order',()=>{
    cy.get('[data-test="product-sort-container"]').should("have.value","za").should('contain.text','Name (Z to A)')
    cy.get('[data-test="inventory-item-name"]').should(($item1) => {
        expect($item1).to.have.length(6)
      })
})

When('I select Price low to high from the sorting dropdown',()=>[
    cy.get('[data-test="product-sort-container"]').select('lohi')
])

Then('the products should be sorted from the lowest to the highest price',()=>{
    cy.get('[data-test="product-sort-container"]').should('have.value','lohi').should('contain.text','Price (low to high)')
    cy.get('[data-test="inventory-item-name"]').should(($item1) => {
        expect($item1).to.have.length(6)
      })
})

When('I select Price high to low from the sorting dropdown',()=>[
    cy.get('[data-test="product-sort-container"]').select('hilo')
])

Then('the products should be sorted from the highest to the lowest price',()=>{
    cy.get('[data-test="product-sort-container"]').should('have.value','hilo').should('contain.text','Price (high to low)')
    cy.get('[data-test="inventory-item-name"]').should(($item1) => {
        expect($item1).to.have.length(6)
      })
})

When('I click on the Sauce Labs Backpack product image or name',()=>{
    cy.contains('Sauce Labs Backpack').click()
})

Then('I should be redirected to the product details page',()=>{
    cy.url().should("include", "/inventory-item.html")
})

Then('I should see the product title, description, price, and an Add to Cart button',()=>{
    cy.get('[data-test="inventory-item-name"]').should('be.visible')
    cy.get('[data-test="inventory-item-desc"]').should('be.visible')
    cy.get('[data-test="inventory-item-price"]').should('be.visible')
    cy.get('[data-test="add-to-cart"]').should('be.visible')
})

When('I click the Add to Cart button',()=>{
    cy.get('[data-test="add-to-cart"]').click()
})

Then('the cart icon should display 1',()=>{
    cy.get('[data-test="shopping-cart-badge"]').should('be.visible').should('contains.text','1')
})

When('I click the Back to Products button',()=>{
    cy.get('.back-image').click()
})

When('I add the {string} to the cart',(productName)=>{
    cy.contains(productName).parents('.inventory_item').find('button').click()
})

Then('the cart badge should display {string}',(itemCount)=>{
    cy.get('[data-test="shopping-cart-badge"]').should('have.text',(itemCount))
})

When('I add the following products to the cart:',(dataTable)=>{
    dataTable.rawTable.forEach(([productName])=>{
        cy.contains(productName).parents('.inventory_item').find('button').click()
    })
})

When('I remove {string} from the cart',(productName)=>{
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.contains(productName).parents('.cart_item').find('button').click()
})

Then('the cart should be empty',()=>{
    cy.get('.shopping-cart-badge').should('not.exist')
})

When('I go to cart page',()=>{
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Your Cart')
})

Then('I should be redirected to the products page',()=>{
    cy.url().should("include", "/inventory.html")
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Products')
})

When('I reload the page',()=>{
    cy.reload()
})

Then('I should be on the checkout information page',()=>{
    cy.get('[data-test="title"]').should('be.visible').and('contain.text','Checkout: Your Information')
})

Given('I am on the checkout information page',()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.contains('button', 'Checkout').click()
})

When('I fill in the checkout form with valid information:',(dataTable)=>{
    const data = dataTable.rowsHash()
    if (data['First Name']) cy.get('[data-test="firstName"]').type(data['First Name'])
    if (data['Last Name']) cy.get('[data-test="lastName"]').type(data['Last Name'])
    if (data['Postal Code']) cy.get('[data-test="postalCode"]').type(data['Postal Code'])
})

Then('I should see the "Thank you for your order!" message',()=>{
    cy.get('[data-test="complete-header"]').should('be.visible').and('contain.text','Thank you for your order!')
})

When('I click the {string} button without filling in any fields',(buttonName)=>{
    cy.contains('button, input[type="submit"]', buttonName).click()
})

/*
Then('I should see an error message {string}',(alertText)=>{
    cy.get('.error-message-container').should('be.visible')
    cy.contains(alertText).should('contain.text',alertText)
})
*/

When('I fill in the checkout form with missing postal code:',(dataTable)=>{
    const data = dataTable.rowsHash()
    if (data['First Name']) cy.get('[data-test="firstName"]').type(data['First Name'])
    if (data['Last Name']) cy.get('[data-test="lastName"]').type(data['Last Name'])
})

When('I fill in the checkout form with an invalid postal code:',(dataTable)=>{
    const data = dataTable.rowsHash()
    if (data['First Name']) cy.get('[data-test="firstName"]').type(data['First Name'])
    if (data['Last Name']) cy.get('[data-test="lastName"]').type(data['Last Name'])
    if (data['Postal Code']) cy.get('[data-test="postalCode"]').type(data['Postal Code'])
})