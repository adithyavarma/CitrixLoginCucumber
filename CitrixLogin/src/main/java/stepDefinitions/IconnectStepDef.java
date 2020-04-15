package stepDefinitions;


import java.io.FileReader;

import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Sleeper;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class IconnectStepDef {
	
	WebDriver driver;

	@Given("^user opens iconnect via chrome$")
	public void user_opens_iconnect_via_chrome(){
		System.setProperty("webdriver.chrome.driver", "C:/Users/admin/Desktop/Eclipse Softwares/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://iconnect.infosys.com/vpn/index.html");
	}

	@When("^title of the page is iConnect$")
	public void title_of_the_page_is_iConnect() throws InterruptedException{
	    String expectedTitle = "iConnect";
	    Thread.sleep(10000);
	    String actualTitle = driver.getTitle();
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password(){
		driver.findElement(By.xpath("/html/body/div[7]/div/div/div[2]/div/div[2]/div[1]/div/form/div[2]/div[2]/input[1]")).sendKeys("username");
		driver.findElement(By.xpath("/html/body/div[7]/div/div/div[2]/div/div[2]/div[1]/div/form/div[3]/div[2]/input[2]")).sendKeys("password");
	}

	@Then("^user clicks on Login button$")
	public void user_clicks_on_Login_button() throws InterruptedException{
		WebElement login = driver.findElement(By.xpath("/html/body/div[7]/div/div/div[2]/div/div[2]/div[1]/div/form/div[5]/div[2]/input"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", login);
		Thread.sleep(30000);
	}

	@When("^Page has authentication$")
	public void page_has_authentication(){
		WebElement CitrixReceiver = driver.findElement(By.xpath("/html/body/div[10]/div/div/div/div/a"));
		WebElement basicVersion = driver.findElement(By.xpath("/html/body/div[11]/div/div/div/div/div[1]/a[2]"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", CitrixReceiver);
		js.executeScript("arguments[0].click();", basicVersion);
	}

	@Then("^click on Outlook app$")
	public void click_on_Outlook_app(){
		WebElement outlook = driver.findElement(By.xpath("/html/body/div[9]/div[2]/div[4]/div/div/div/div/div[12]/a"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].click();", outlook);
	}
}
