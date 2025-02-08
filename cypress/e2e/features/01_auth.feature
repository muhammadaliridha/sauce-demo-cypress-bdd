Feature: Login and Logout Functionality

#@focus
Scenario: Successful Login with valid credentials
Given I am on the Sauce Demo login page
When I login with "standard_user"
Then I should be redirected to the Products page

#@focus
Scenario: Login with locked-out user
Given I am on the Sauce Demo login page
When I login with "locked_out_user"
Then I should see an error message "Sorry, this user has been locked out."
And I should remain on the login page


Scenario: Login with performance glitch user
Given I am on the Sauce Demo login page
When I login with "performance_glitch_user"
Then I should be redirected to the Products page
And the page load time should be noticeably slower than for other users


Scenario: Login with problem user
Given I am on the Sauce Demo login page
When I login with "problem_user"
Then I should be redirected to the Products page
And product images or links should be incorrect or broken


Scenario: Logout and verify redirection to login page
Given I am logged in as a standard user
When I click the menu button
And I click "Logout"
Then I should be redirected to the login page


Scenario: Error message for missing username
Given I am on the Sauce Demo login page
When I leave the username field blank
And I click the "Login" button
Then I should see an error message "Username is required"

Scenario: Error message for missing password
Given I am on the Sauce Demo login page
When I leave the password field blank
And I click the "Login" button
Then I should see an error message "Password is required"
