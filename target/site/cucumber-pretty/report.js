$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Cicklum Test.feature");
formatter.feature({
  "line": 1,
  "name": "Cicklum Test",
  "description": "",
  "id": "cicklum-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create a user with complete details returns a successful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-complete-details-returns-a-successful-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am using complete_user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "1"
      ],
      "line": 8
    },
    {
      "cells": [
        "status",
        "successfully created"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Create a user with basic details returns a successful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-basic-details-returns-a-successful-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am using basic_user",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2"
      ],
      "line": 16
    },
    {
      "cells": [
        "status",
        "successfully created"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 19,
  "name": "Retrieve a user with complete details from a known id returns a successful response",
  "description": "",
  "id": "cicklum-test;retrieve-a-user-with-complete-details-from-a-known-id-returns-a-successful-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am using a valid id 1",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I am making a GET request to endpoint with the parameter id: 1",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "1"
      ],
      "line": 24
    },
    {
      "cells": [
        "first_name",
        "Yasmina"
      ],
      "line": 25
    },
    {
      "cells": [
        "last_name",
        "Gil"
      ],
      "line": 26
    },
    {
      "cells": [
        "age",
        "35"
      ],
      "line": 27
    },
    {
      "cells": [
        "active",
        "true"
      ],
      "line": 28
    },
    {
      "cells": [
        "date_of_birth",
        "120280"
      ],
      "line": 29
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 31,
  "name": "Retrieve a user with basic details from a known id returns a successful response",
  "description": "",
  "id": "cicklum-test;retrieve-a-user-with-basic-details-from-a-known-id-returns-a-successful-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am using a valid id 2",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I am making a GET request to endpoint with the parameter id: 2",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "2"
      ],
      "line": 36
    },
    {
      "cells": [
        "first_name",
        "Ismael"
      ],
      "line": 37
    },
    {
      "cells": [
        "last_name",
        "Moreno"
      ],
      "line": 38
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "The age attribute is not present",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "The active attribute is not present",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "The date_of_birth attribute is not present",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 43,
  "name": "Retrieve a user from an unkknown id returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;retrieve-a-user-from-an-unkknown-id-returns-an-unsuccessful-response",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I am using a valid id 10",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I am making a GET request to endpoint with the parameter id: 10",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "The HTTP status code is 404",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "id",
        "10"
      ],
      "line": 48
    },
    {
      "cells": [
        "status",
        "Fail to get user: unknown user id"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Create a user with empty or invalid id returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I am using \u003cuser_with_invalid_mandatory_params\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 59,
  "name": "",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;",
  "rows": [
    {
      "cells": [
        "user_with_invalid_mandatory_params",
        "response"
      ],
      "line": 60,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;;1"
    },
    {
      "cells": [
        "basic_user_invalid_id",
        "invalid_id_user_response"
      ],
      "line": 61,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;;2"
    },
    {
      "cells": [
        "basic_user_empty_id",
        "empty_id_user_response"
      ],
      "line": 62,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 61,
  "name": "Create a user with empty or invalid id returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I am using basic_user_invalid_id",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 62,
  "name": "Create a user with empty or invalid id returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-id-returns-an-unsuccessful-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "I am using basic_user_empty_id",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Create a user with empty or invalid first name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I am using \u003cuser_with_invalid_mandatory_params\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;",
  "rows": [
    {
      "cells": [
        "user_with_invalid_mandatory_params",
        "response"
      ],
      "line": 72,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;;1"
    },
    {
      "cells": [
        "basic_user_invalid_firstname",
        "invalid_id_user_response"
      ],
      "line": 73,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;;2"
    },
    {
      "cells": [
        "basic_user_empty_firstname",
        "empty_id_user_response"
      ],
      "line": 74,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 73,
  "name": "Create a user with empty or invalid first name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I am using basic_user_invalid_firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 74,
  "name": "Create a user with empty or invalid first name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-first-name-returns-an-unsuccessful-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "I am using basic_user_empty_firstname",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid format: Failed to create the user"
      ],
      "line": 69
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 76,
  "name": "Create a user with empty or invalid lastname name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I am using \u003cuser_with_invalid_mandatory_params\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid last name format: Failed to create the user"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.examples({
  "line": 83,
  "name": "",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;",
  "rows": [
    {
      "cells": [
        "user_with_invalid_mandatory_params",
        "response"
      ],
      "line": 84,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;;1"
    },
    {
      "cells": [
        "basic_user_invalid_lastname",
        "invalid_lastname_user_response"
      ],
      "line": 85,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;;2"
    },
    {
      "cells": [
        "basic_user_empty_lastname",
        "empty_lastname_user_response"
      ],
      "line": 86,
      "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 85,
  "name": "Create a user with empty or invalid lastname name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I am using basic_user_invalid_lastname",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid last name format: Failed to create the user"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 86,
  "name": "Create a user with empty or invalid lastname name returns an unsuccessful response",
  "description": "",
  "id": "cicklum-test;create-a-user-with-empty-or-invalid-lastname-name-returns-an-unsuccessful-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 77,
  "name": "I am using basic_user_empty_lastname",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I am making a POST request to endpoint",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "The response includes the following",
  "rows": [
    {
      "cells": [
        "status",
        "Empty or invalid last name format: Failed to create the user"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});