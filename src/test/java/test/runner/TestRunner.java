package test.runner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
	features="C:\\Users\\Ranita\\workspace\\Practice1usingBDD\\src\\main\\java\\feature\\search.feature",
	glue={"stepDefinitions"},
	//monochrome = true,
	format ={"pretty","html:target/cucumber-reports/cucumber-pretty"},
	dryRun=false
	//tags={"@SmokeTest1,~@RegressionTest"}
		
)
public class TestRunner {
	
private TestNGCucumberRunner testNGCucumberRunner;
	
	@BeforeClass(alwaysRun=true)
	public void setUpClass() throws Exception{
		testNGCucumberRunner=new TestNGCucumberRunner(this.getClass());
		
	}
	
	@Test(groups="cucumber",description="Runs cucumber feature",dataProvider="features")
	public void feature(CucumberFeatureWrapper cucumberFeature){
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
	}
	
	@DataProvider
	public Object[][] features(){
		return testNGCucumberRunner.provideFeatures();
	}
	
	@AfterClass(alwaysRun=true)
	public void tearDownClass() throws Exception{
		testNGCucumberRunner.finish();

	}
}
