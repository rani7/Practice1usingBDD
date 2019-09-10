package pages;

import org.openqa.selenium.support.PageFactory;
import base.TestBase;

public class CustomerServicePage extends TestBase{

	public CustomerServicePage(){
		PageFactory.initElements(driver,this);
	}
	
	public String readCustSerPageTitle(){
		return driver.getTitle();
	}
	
}
