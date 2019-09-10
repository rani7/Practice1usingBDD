Feature:  Search in my store
@SmokeTest1
Scenario Outline: Search in my store home

Given user is on my store home page and validates page title
Then user enters "<search_item>" and clicks on search

Examples:
|search_item|
|Casual Dresses|
|Shirts|

@SmokeTest2
Scenario: View contact us page
Given user clicks on contact us link in my store home page
Then customer service page is displayed

@RegressionTest
Scenario: View sign-in page
Given user clicks on sign-in link in my store home page
Then authentication page is displayed