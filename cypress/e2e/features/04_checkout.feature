Feature: Checkout Page and Functionality

 Background:
    Given I am logged in as a standard user

Scenario: Proceed to checkout with items in the cart
    When I add the "Sauce Labs Backpack" to the cart
    And I go to cart page
    And I click the "Checkout" button
    Then I should be on the checkout information page

  Scenario: Complete checkout with valid information
    When I am on the checkout information page
    And I fill in the checkout form with valid information:
      | First Name | John |
      | Last Name  | Doe  |
      | Postal Code| 12345|
    And I click the "Continue" button
    And I click the "Finish" button
    Then I should see the "Thank you for your order!" message

  # Negative Test Cases

  Scenario: Attempt to checkout without filling in mandatory fields
    Given I am on the checkout information page
    When I click the "Continue" button without filling in any fields
    Then I should see an error message "Error: First Name is required"


  Scenario: Attempt to checkout with missing postal code
    Given I am on the checkout information page
    When I fill in the checkout form with missing postal code:
      | First Name | John |
      | Last Name  | Doe  |
    And I click the "Continue" button
    Then I should see an error message "Error: Postal Code is required"


  Scenario: Attempt to checkout with invalid postal code format
    Given I am on the checkout information page
    When I fill in the checkout form with an invalid postal code:
      | First Name | John |
      | Last Name  | Doe  |
      | Postal Code| ABCDE|
    And I click the "Continue" button
    Then I should see an error message "Error: Invalid Postal Code format"