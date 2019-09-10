package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import base.TestBase;
import pages.ResultPage;

public class HomePage extends TestBase{
	
	@FindBy(xpath="//input[@name='search_query']")
	WebElement searchBox;
	
	@FindBy(xpath="//button[@name='submit_search']")
	WebElement searchBtn;
	
	@FindBy(xpath="//a[@title='Contact Us']")
	WebElement contactUsBtn;
	
	@FindBy(xpath="//a[@class='login']")
	WebElement SignInBtn;
	
	public HomePage(){
		PageFactory.initElements(driver,this);
	}
	
	public String readPageTitle(){
		return driver.getTitle();
	}

	public ResultPage search(String item){
		searchBox.sendKeys(item);
		searchBtn.click();
		//searchBox.clear();
		return new ResultPage();
	}
	
	public CustomerServicePage clickOnContactUs(){
		contactUsBtn.click();
		return new CustomerServicePage();
	}
	
	public AuthenticationPage clickOnSignIn(){
		SignInBtn.click();
		return new AuthenticationPage();
	}
	
}
