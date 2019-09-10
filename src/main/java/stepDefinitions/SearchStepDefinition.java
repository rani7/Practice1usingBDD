package stepDefinitions;

//import java.util.List;
//import java.util.Map;
import org.testng.Assert;

import pages.AuthenticationPage;
import pages.CustomerServicePage;
import pages.HomePage;
import pages.ResultPage;
import base.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
//import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class SearchStepDefinition extends TestBase{
	
    HomePage homePage;
	ResultPage resultPage;
	CustomerServicePage custServicePage;
	AuthenticationPage authPage;
	
	@Before
	public void user_opens_the_browser_and_enters_url()  {
		TestBase.initialization();
	}
	
	@After
	public void user_exits_the_browser()  {
		driver.quit();
	
	}

	@Before("@SmokeTest1")
	public void beforeSmokeTest1Scenario(){
		
		System.out.println("before SmokeTest1 Scenario");
	}
	
	@After("@SmokeTest1")
	public void afterSmokeTest1Scenario(){
		
		System.out.println("after SmokeTest1 Scenario");
	}
	
	@Given("^user is on my store home page and validates page title$")
	public void user_is_on_my_store_home_page_and_validates_page_title() {
		homePage=new HomePage();
		String title=homePage.readPageTitle();
	    System.out.println(title);
	    Assert.assertEquals(title,"My Store");
	}

	@Then("^user enters \"(.*)\" and clicks on search$")
	public void user_enters_search_item_and_clicks_on_search(String item)  {
		resultPage=homePage.search(item);	  
	}

	@Before("@SmokeTest2")
	public void beforeSmokeTest2Scenario(){
		
		System.out.println("before SmokeTest2 Scenario");
	}
	
	@After("@SmokeTest2")
	public void afterSmokeTest2Scenario(){
		
		System.out.println("after SmokeTest2 Scenario");
	}
	@Given("^user clicks on contact us link in my store home page$")
	public void user_clicks_on_contact_us_link_in_my_store_home_page()  {
		homePage=new HomePage();
		custServicePage=homePage.clickOnContactUs();
	}

	@Then("^customer service page is displayed$")
	public void customer_service_page_is_displayed()  {
		custServicePage=new CustomerServicePage();
		String custServicePageTitle=custServicePage.readCustSerPageTitle();
		System.out.println(custServicePageTitle);
	}

	@Given("^user clicks on sign-in link in my store home page$")
	public void user_clicks_on_sign_in_link_in_my_store_home_page()  {
		 homePage=new HomePage();
		 authPage=homePage.clickOnSignIn();
	}

	@Then("^authentication page is displayed$")
	public void authentication_page_is_displayed()  {
		authPage=new AuthenticationPage();
		String authPageTitle=authPage.readAuthPageTitle();
		System.out.println(authPageTitle);
	}


}
