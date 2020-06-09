package util.runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		snippets = CucumberOptions.SnippetType.CAMELCASE,
		features = "src/test/features"
		,glue="stepDef"
		,tags = {"not @deferred"}
		,monochrome = true
		,strict = true,
		plugin = {"pretty",
				"html:target/cucumber-reports/reports"}
)
public  class Test_RunnerTest {
}
