package util;

import io.restassured.RestAssured;
import io.restassured.parsing.Parser;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class Context {
    private ValidatableResponse json;
    private RequestSpecification request;
    private Response response;
    public ValidatableResponse getJson() {
        return json;
    }
    public Response getResponse() {
        return response;
    }
    public void setResponse(Response response) {
        this.response = response;
    }
    public void setRequest(RequestSpecification request) {
        this.request = request;
    }
    public void setJson(ValidatableResponse json) {
        RestAssured.defaultParser = Parser.JSON;
        this.json = json;
    }
    public RequestSpecification getRequest() {
        return request;
    }
}
