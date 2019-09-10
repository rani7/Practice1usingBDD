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
  "duration": 423588,
  "status": "passed"
});
formatter.before({
  "duration": 12451791229,
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
  "duration": 204142577,
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
  "duration": 1929257415,
  "status": "passed"
});
formatter.after({
  "duration": 702343106,
  "status": "passed"
});
formatter.after({
  "duration": 51937,
  "status": "passed"
});
formatter.before({
  "duration": 354545,
  "status": "passed"
});
formatter.before({
  "duration": 10969218353,
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
  "duration": 12028712,
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
  "duration": 2598546366,
  "status": "passed"
});
formatter.after({
  "duration": 701789519,
  "status": "passed"
});
formatter.after({
  "duration": 72464,
  "status": "passed"
});
formatter.before({
  "duration": 607702,
  "status": "passed"
});
formatter.before({
  "duration": 11242165958,
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
  "duration": 1660368415,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.customer_service_page_is_displayed()"
});
formatter.result({
  "duration": 10729958,
  "status": "passed"
});
formatter.after({
  "duration": 725480580,
  "status": "passed"
});
formatter.after({
  "duration": 195000,
  "status": "passed"
});
formatter.before({
  "duration": 9907073792,
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
  "duration": 2365578359,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinition.authentication_page_is_displayed()"
});
formatter.result({
  "duration": 15598419,
  "status": "passed"
});
formatter.after({
  "duration": 732577697,
  "status": "passed"
});
});