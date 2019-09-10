package pages;

import org.openqa.selenium.support.PageFactory;
import base.TestBase;

public class AuthenticationPage extends TestBase{

	public AuthenticationPage(){
		PageFactory.initElements(driver,this);
	}
	
	public String readAuthPageTitle(){
		return driver.getTitle();
	}
}
