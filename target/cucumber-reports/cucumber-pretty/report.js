$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Ranita/workspace/Practice1usingBDD/src/main/java/feature/search.feature");
formatter.feature({
  "line": 1,
  "name": "Search in my store",
  "description": "",
  "id": "search-in-my-store",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search in my store home",
  "description": "",
  "id": "search-in-my-store;search-in-my-store-home",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on my store home page and validates page title",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003csearch_item\u003e\" and clicks on search",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "search-in-my-store;search-in-my-store-home;",
  "rows": [
    {
      "cells": [
        "search_item"
      ],
      "line": 9,
      "id": "search-in-my-store;search-in-my-store-home;;1"
    },
    {
      "cells": [
        "Casual Dresses"
      ],
      "line": 10,
      "id": "search-in-my-store;search-in-my-store-home;;2"
    },
    {
      "cells": [
        "Shirts"
      ],
      "line": 11,
      "id": "search-in-my-store;search-in-my-store-home;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 400882,
  "status": "passed"
});
formatter.before({
  "duration": 19780396590,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search in my store home",
  "description": "",
  "id": "search-in-my-store;search-in-my-store-home;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on my store home page and validates page title",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Casual Dresses\" and clicks on search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_my_store_home_page_and_validates_page_title()"
});
formatter.result({
  "duration": 456734911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Casual Dresses",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinition.user_enters_search_item_and_clicks_on_search(String)"
});
formatter.result({
  "duration": 4194310523,
  "status": "passed"
});
formatter.after({
  "duration": 758720039,
  "status": "passed"
});
formatter.after({
  "duration": 70597,
  "status": "passed"
});
formatter.before({
  "duration": 468680,
  "status": "passed"
});
formatter.before({
  "duration": 12762819360,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search in my store home",
  "description": "",
  "id": "search-in-my-store;search-in-my-store-home;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SmokeTest1"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on my store home page and validates page title",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Shirts\" and clicks on search",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_is_on_my_store_home_page_and_validates_page_title()"
});
formatter.result({
  "duration": 10899077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shirts",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinition.user_enters_search_item_and_clicks_on_search(String)"
});
formatter.result({
  "duration": 2841540581,
  "status": "passed"
});
formatter.after({
  "duration": 767454228,
  "status": "passed"
});
formatter.after({
  "duration": 59401,
  "status": "passed"
});
formatter.before({
  "duration": 485163,
  "status": "passed"
});
formatter.before({
  "duration": 11833000146,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "View contact us page",
  "description": "",
  "id": "search-in-my-store;view-contact-us-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@SmokeTest2"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user clicks on contact us link in my store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "customer service page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_clicks_on_contact_us_link_in_my_store_home_page()"
});
formatter.result({
  "duration": 1794504589,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.customer_service_page_is_displayed()"
});
formatter.result({
  "duration": 9040527,
  "status": "passed"
});
formatter.after({
  "duration": 820203644,
  "status": "passed"
});
formatter.after({
  "duration": 174162,
  "status": "passed"
});
formatter.before({
  "duration": 12292818335,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "View sign-in page",
  "description": "",
  "id": "search-in-my-store;view-sign-in-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user clicks on sign-in link in my store home page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "authentication page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchStepDefinition.user_clicks_on_sign_in_link_in_my_store_home_page()"
});
formatter.result({
  "duration": 2761018657,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.authentication_page_is_displayed()"
});
formatter.result({
  "duration": 21412821,
  "status": "passed"
});
formatter.after({
  "duration": 743536905,
  "status": "passed"
});
});