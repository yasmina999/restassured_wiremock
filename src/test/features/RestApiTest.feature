Feature: Rest Api Test


  Scenario: Create a user with mandatory details returns a successful response
    Given I am a user with an id 2 and a firstname Ismael and a last name Moreno
    When I am making a POST request to endpoint rest/api/customer/
    Then The HTTP status code is 201
    And The response includes the following:
      | id     | 2                    |
      | status | successfully created |

  Scenario: Create an active user with complete details returns a successful response
    Given I am a user with an id 1 and a firstname Yasmina and a last name Gil
    And I am a user with additional details: age is 35, active is true and date_of_birth is 1980-02-12
    When I am making a POST request to endpoint rest/api/customer/
    Then The HTTP status code is 201
    And The response includes the following:
      | id     | 1                    |
      | status | successfully created |

  Scenario: Create an inactive user with complete details returns a successful response
    Given I am a user with an id 3 and a firstname Carmen and a last name Larios
    And I am a user with additional details: age is 46, active is false and date_of_birth is 1970-08-20
    When I am making a POST request to endpoint rest/api/customer/
    Then The HTTP status code is 201
    And The response includes the following:
      | id     | 3                    |
      | status | successfully created |

  Scenario Outline: Retrieve a user with complete details from a known id returns a successful response
    When I am making a GET request to endpoint rest/api/customer/ using the id parameter:<id>
    Then The HTTP status code is 200
    And The response includes the following:
      | id            | <id>            |
      | first_name    | <firstname>     |
      | last_name     | <lastname>      |
      | age           | <age>           |
      | active        | <active>        |
      | date_of_birth | <date_of_birth> |

    Examples:
      | id | firstname | lastname | age | active | date_of_birth |
      | 1  | Yasmina   | Gil      | 35  | true   | 1980-02-12    |
      | 3  | Carmen    | Larios   | 46  | false  | 1970-08-20    |

  Scenario: Retrieve a user with basic details from a known id returns a successful response
    When I am making a GET request to endpoint rest/api/customer/ using the id parameter:2
    Then The HTTP status code is 200
    And The response includes the following:
      | id         | 2      |
      | first_name | Ismael |
      | last_name  | Moreno |
    And The age attribute is not present
    And The active attribute is not present
    And The date_of_birth attribute is not present

  Scenario: Retrieve a user from an unkknown id returns an unsuccessful response
    When I am making a GET request to endpoint rest/api/customer/ using the id parameter:999
    Then The HTTP status code is 404
    And The response includes the following:
      | id     | 999                                 |
      | status | Failed to get user: unknown user id |

  Scenario Outline: Create a user with empty or invalid mandatory parameters returns an unsuccessful response
    Given I am a user with an id <id> and a firstname <firstname> and a last name <lastname>
    When I am making a POST request to endpoint rest/api/customer/
    Then The HTTP status code is 401
    And The response includes the following:
      | status | Failed to create user: empty or invalid mandatory parameter |

    Examples:
      | id          | firstname   | lastname    |
      |             |             |             |
      |             |             | Alcaide     |
      |             | Jairo       |             |
      |             | Sara        | Robinson    |
      | 11          |             |             |
      | 13          |             | Perez       |
      | 14          | Carolina    |             |
      | xxinvalidxx | xxinvalidxx | xxinvalidxx |
      | xxinvalidxx | xxinvalidxx | Alcaide     |
      | xxinvalidxx | Pepe        | xxinvalidxx |
      | xxinvalidxx | Maria       | Robinson    |
      | 15          | xxinvalidxx | xxinvalidxx |
      | 16          | xxinvalidxx | Abad        |
      | 17          | Christine   | xxinvalidxx |
