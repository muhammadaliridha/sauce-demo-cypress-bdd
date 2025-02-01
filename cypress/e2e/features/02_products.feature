Feature: All Releted About Products


Scenario: Sort products by name (A to Z)
Given I am logged in as a standard user
And I am on the Products page
When I select Name A to Z from the sorting dropdown
Then the products should be sorted alphabetically in ascending order


Scenario: Sort products by name (Z to A)
Given I am logged in as a standard user
And I am on the Products page
When I select Name Z to A from the sorting dropdown
Then the products should be sorted alphabetically in descending order


Scenario: Sort products by price (low to high)
Given I am logged in as a standard user
And I am on the Products page
When I select Price low to high from the sorting dropdown
Then the products should be sorted from the lowest to the highest price


Scenario: Sort products by price (high to low)
Given I am logged in as a standard user
And I am on the Products page
When I select Price high to low from the sorting dropdown
Then the products should be sorted from the highest to the lowest price


Scenario: View product details for an item
Given I am logged in as a standard user
And I am on the Products page
When I click on the Sauce Labs Backpack product image or name
Then I should be redirected to the product details page
And I should see the product title, description, price, and an Add to Cart button


Scenario: Add a product to the cart from the product details page
Given I am logged in as a standard user
And I am on the Products page
When I click on the Sauce Labs Backpack product image or name
And I click the Add to Cart button
Then the cart icon should display 1

Scenario: Navigate back to Products page from product details
Given I am logged in as a standard user
And I am on the Products page
When I click on the Sauce Labs Backpack product image or name
And I click the Back to Products button
Then I should be redirected to the Products page