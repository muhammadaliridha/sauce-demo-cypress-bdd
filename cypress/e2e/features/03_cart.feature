Feature: Cart Page and Checkout Functionality

Background:
    Given I am logged in as a standard user

  # Cart Page Scenarios


  Scenario: Add a product to the cart from the dashboard
    When I add the "Sauce Labs Backpack" to the cart
    Then the cart badge should display "1"

  Scenario: Add multiple products to the cart
    When I add the following products to the cart:
      | Sauce Labs Backpack |
      | Sauce Labs Bike Light |
    Then the cart badge should display "2"


  Scenario: Remove a product from the cart
    When I add the "Sauce Labs Backpack" to the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart should be empty

  Scenario: Continue shopping from the cart page
    Given I have added "Sauce Labs Backpack" to the cart
    When I click the "Continue Shopping" button
    Then I should be redirected to the products page

  Scenario: Verify cart persistence after page reload
    Given I have added "Sauce Labs Backpack" to the cart
    When I reload the page
    Then the cart badge should still display "1"
