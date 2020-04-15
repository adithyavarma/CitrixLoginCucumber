package testRunners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:/Users/admin/eclipse-workspace/CitrixLogin/src/main/java/features/iconnectLogin.feature",
		glue = {"stepDefinitions"},
		plugin = {"pretty","html:target/test-output"})

public class IconnectRunner {

}
