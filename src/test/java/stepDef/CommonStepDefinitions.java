package stepDef;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import util.Context;
import java.util.Map;
import static io.restassured.RestAssured.given;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.Matchers.equalTo;

public class CommonStepDefinitions {
    private RequestSpecification request;
    private Response response;
    private Context context;
    private String JSON_TYPE = "application/json";
    private static final String baseUrl = "http://localhost:8090/";
    private static final String adminPath = "/mappings/__admin/";
    private static final String ID = "id";
    private static final String FIRST_NAME = "first_name";
    private static final String LAST_NAME = "last_name";
    private static final String AGE = "age";
    private static final String ACTIVE = "active";
    private static final String STATUS = "status";
    private static final String DATE_OF_BIRTH = "date_of_birth";
    private static final String PROPERTIES = "properties.";
    private static final String NOT_MATCH = " does not match";
    private static final String IS_PRESENT = " is present";
    private static final String ATTRIBUTE = "attribute: ";


    public CommonStepDefinitions(Context context) throws Exception {
        this.context = context;
    }

    //We check that service is up in the beginning of each test

    @Before()
    public void Before_scenario_hook() {
        request = given();
        response = request.when().get(baseUrl + adminPath);
        context.setJson(response.then());
        response.prettyPrint();
    }

    //Given Methods

    @Given("^I am a user with an id (.*) and a firstname (.*) and a last name (.*)$")
    public void log_user(String id, String firstname, String lastname) {
        request = given();
        request.contentType(JSON_TYPE);
        request.queryParam(ID, id.trim());
        request.queryParam(FIRST_NAME, firstname.trim());
        request.queryParam(LAST_NAME, lastname.trim());
        request.log().all();
        context.setRequest(request);
    }

    @And("^I am a user with additional details: age is (\\d+), active is ([true|false]*) and date_of_birth is (.*)$")
    public void log_additional_details(int age, String active, String dateofbirth) {
        request.queryParam(AGE, age);
        request.queryParam(ACTIVE, active);
        request.queryParam(DATE_OF_BIRTH, dateofbirth);
        context.setRequest(request);
    }

    //When Methods

    @When("^I am making a GET request to endpoint (.*) using the id parameter:(.+)$")
    public void get_resquest(String url, int id) {
        request = given();
        request.contentType(JSON_TYPE);
        request.log().all();
        response = request.when().get(baseUrl + url + String.valueOf(id));
        this.context.setResponse(response);
        response.prettyPrint();
    }

    @When("^I am making a POST request to endpoint (.+)$")
    public void post_request(String url) {
        response = request.when().post(baseUrl + url);
        this.context.setResponse(response);
        response.prettyPrint();
    }

    //Then Methods

    @Then("^The HTTP status code is (\\d+)")
    public void verify_status_code(int statusCode) {
        response.then().statusCode(statusCode);
    }

    @Then("^The response includes the following:$")
    public void response_equals(Map<String, String> responseFields) {
        for (Map.Entry<String, String> field : responseFields.entrySet()) {
            JsonPath jsonPath = this.context.getResponse().jsonPath();

            if (field.getKey().equals(STATUS)) {
                String status = jsonPath.getString(STATUS);
                assertThat(STATUS + NOT_MATCH, String.valueOf(field.getValue()), comparesEqualTo(status));
            } else if (field.getKey().equals(ID)) {
                Integer id = jsonPath.getInt(ID);
                assertThat(ID + NOT_MATCH, Integer.parseInt(field.getValue()), equalTo(id));
            } else if ((field.getKey().equals(FIRST_NAME))) {
                String firstname = jsonPath.getString(FIRST_NAME);
                assertThat(FIRST_NAME + NOT_MATCH, String.valueOf(field.getValue()), comparesEqualTo(firstname));
            } else if ((field.getKey().equals(LAST_NAME))) {
                String lastname = jsonPath.getString(LAST_NAME);
                assertThat(LAST_NAME + NOT_MATCH, String.valueOf(field.getValue()), comparesEqualTo(lastname));
            } else if (field.getKey().equals(AGE)) {
                Integer age = jsonPath.getInt(PROPERTIES + AGE);
                assertThat(PROPERTIES + AGE + NOT_MATCH, Integer.parseInt(field.getValue()), equalTo(age));
            } else if ((field.getKey().equals(ACTIVE))) {
                Boolean active = jsonPath.getBoolean(PROPERTIES + ACTIVE);
                assertThat(PROPERTIES + ACTIVE +NOT_MATCH, Boolean.valueOf(field.getValue()), equalTo(active));
            } else if ((field.getKey().equals(DATE_OF_BIRTH))) {
                String dateofbirth = jsonPath.get(PROPERTIES + DATE_OF_BIRTH);
                assertThat(PROPERTIES + DATE_OF_BIRTH + NOT_MATCH, (field.getValue()), comparesEqualTo(dateofbirth));
            }
        }
    }

    @Then("^The (.*) attribute is not present$")
    public void response_not_present(String attribute) {
        JsonPath jsonPath = this.context.getResponse().jsonPath();
        assertThat(ATTRIBUTE + attribute + IS_PRESENT,jsonPath.get(PROPERTIES + attribute), isEmptyOrNullString());
    }
}
