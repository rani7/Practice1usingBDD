package base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import testUtil.TestUtil;

public class TestBase {
	
	public static WebDriver driver;
	public static Properties prop;
	
	public TestBase()
	{
		try{
			
			prop=new Properties();
		    FileInputStream ip=new FileInputStream("C:\\Users\\Ranita\\workspace\\Practice1usingBDD\\src\\main\\java\\config\\testconfig.properties");
	        prop.load(ip);
	        
		   }catch(FileNotFoundException e){
			   e.printStackTrace();
	     }catch(IOException e){
	    	   e.printStackTrace();
	     }
	}

	public static void initialization(){
		
		System.setProperty("webdriver.chrome.driver","D:\\Personal\\Selenium\\selenium_files\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().timeouts().pageLoadTimeout(TestUtil.PAGE_LOAD_TIMEOUT,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtil.IMPLICIT_WAIT,TimeUnit.SECONDS);
		driver.manage().deleteAllCookies();
		driver.get(prop.getProperty("url"));
		
	}
}