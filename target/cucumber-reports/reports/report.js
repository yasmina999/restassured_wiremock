$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/features/RestApiTest.feature");
formatter.feature({
  "name": "Rest Api Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create a user with mandatory details returns a successful response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a user with an id 2 and a firstname Ismael and a last name Moreno",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an active user with complete details returns a successful response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a user with an id 1 and a firstname Yasmina and a last name Gil",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a user with additional details: age is 35, active is true and date_of_birth is 1980-02-12",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.log_additional_details(int,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create an inactive user with complete details returns a successful response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am a user with an id 3 and a firstname Carmen and a last name Larios",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am a user with additional details: age is 46, active is false and date_of_birth is 1970-08-20",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.log_additional_details(int,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 201",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Retrieve a user with complete details from a known id returns a successful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am making a GET request to endpoint rest/api/customer/ using the id parameter:\u003cid\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.step({
  "name": "The response includes the following:",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "id",
        "\u003cid\u003e"
      ]
    },
    {
      "cells": [
        "first_name",
        "\u003cfirstname\u003e"
      ]
    },
    {
      "cells": [
        "last_name",
        "\u003clastname\u003e"
      ]
    },
    {
      "cells": [
        "age",
        "\u003cage\u003e"
      ]
    },
    {
      "cells": [
        "active",
        "\u003cactive\u003e"
      ]
    },
    {
      "cells": [
        "date_of_birth",
        "\u003cdate_of_birth\u003e"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "firstname",
        "lastname",
        "age",
        "active",
        "date_of_birth"
      ]
    },
    {
      "cells": [
        "1",
        "Yasmina",
        "Gil",
        "35",
        "true",
        "1980-02-12"
      ]
    },
    {
      "cells": [
        "3",
        "Carmen",
        "Larios",
        "46",
        "false",
        "1970-08-20"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Retrieve a user with complete details from a known id returns a successful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am making a GET request to endpoint rest/api/customer/ using the id parameter:1",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.get_resquest(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve a user with complete details from a known id returns a successful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am making a GET request to endpoint rest/api/customer/ using the id parameter:3",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.get_resquest(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve a user with basic details from a known id returns a successful response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am making a GET request to endpoint rest/api/customer/ using the id parameter:2",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.get_resquest(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The age attribute is not present",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_not_present(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The active attribute is not present",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_not_present(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The date_of_birth attribute is not present",
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_not_present(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Retrieve a user from an unkknown id returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am making a GET request to endpoint rest/api/customer/ using the id parameter:999",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.get_resquest(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 404",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id \u003cid\u003e and a firstname \u003cfirstname\u003e and a last name \u003clastname\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.step({
  "name": "The response includes the following:",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "status",
        "Failed to create user: empty or invalid mandatory parameter"
      ]
    }
  ]
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "",
        "",
        "Alcaide"
      ]
    },
    {
      "cells": [
        "",
        "Jairo",
        ""
      ]
    },
    {
      "cells": [
        "",
        "Sara",
        "Robinson"
      ]
    },
    {
      "cells": [
        "11",
        "",
        ""
      ]
    },
    {
      "cells": [
        "13",
        "",
        "Perez"
      ]
    },
    {
      "cells": [
        "14",
        "Carolina",
        ""
      ]
    },
    {
      "cells": [
        "xxinvalidxx",
        "xxinvalidxx",
        "xxinvalidxx"
      ]
    },
    {
      "cells": [
        "xxinvalidxx",
        "xxinvalidxx",
        "Alcaide"
      ]
    },
    {
      "cells": [
        "xxinvalidxx",
        "Pepe",
        "xxinvalidxx"
      ]
    },
    {
      "cells": [
        "xxinvalidxx",
        "Maria",
        "Robinson"
      ]
    },
    {
      "cells": [
        "15",
        "xxinvalidxx",
        "xxinvalidxx"
      ]
    },
    {
      "cells": [
        "16",
        "xxinvalidxx",
        "Abad"
      ]
    },
    {
      "cells": [
        "17",
        "Christine",
        "xxinvalidxx"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id  and a firstname  and a last name ",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id  and a firstname  and a last name Alcaide",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id  and a firstname Jairo and a last name ",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id  and a firstname Sara and a last name Robinson",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 11 and a firstname  and a last name ",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 13 and a firstname  and a last name Perez",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 14 and a firstname Carolina and a last name ",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id xxinvalidxx and a firstname xxinvalidxx and a last name xxinvalidxx",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id xxinvalidxx and a firstname xxinvalidxx and a last name Alcaide",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id xxinvalidxx and a firstname Pepe and a last name xxinvalidxx",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id xxinvalidxx and a firstname Maria and a last name Robinson",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 15 and a firstname xxinvalidxx and a last name xxinvalidxx",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 16 and a firstname xxinvalidxx and a last name Abad",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Create a user with empty or invalid mandatory parameters returns an unsuccessful response",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am a user with an id 17 and a firstname Christine and a last name xxinvalidxx",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.iAmAUserWithAnIdAndAFirstnameAndALastName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am making a POST request to endpoint rest/api/customer/",
  "keyword": "When "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.post_request(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The HTTP status code is 401",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.verify_status_code(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The response includes the following:",
  "rows": [
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "stepDef.CommonStepDefinitions.response_equals(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
});