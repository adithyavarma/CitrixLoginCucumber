$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/admin/eclipse-workspace/infosys.com/src/main/java/features/iconnectLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Infosys VPN using iconnect",
  "description": "",
  "id": "login-to-infosys-vpn-using-iconnect",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to iconnect.infosys.com using Chrome",
  "description": "",
  "id": "login-to-infosys-vpn-using-iconnect;login-to-iconnect.infosys.com-using-chrome",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens iconnect via chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the page is iConnect",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Page has authentication",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click on Outlook app",
  "keyword": "Then "
});
formatter.match({
  "location": "IconnectStepDef.user_opens_iconnect_via_chrome()"
});
formatter.result({
  "duration": 17055431442,
  "status": "passed"
});
formatter.match({
  "location": "IconnectStepDef.title_of_the_page_is_iConnect()"
});
formatter.result({
  "duration": 10015930666,
  "status": "passed"
});
formatter.match({
  "location": "IconnectStepDef.user_enters_username_and_password()"
});
formatter.result({
  "duration": 407328468,
  "status": "passed"
});
formatter.match({
  "location": "IconnectStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "duration": 42487691762,
  "status": "passed"
});
formatter.match({
  "location": "IconnectStepDef.page_has_authentication()"
});
formatter.result({
  "duration": 141383500,
  "status": "passed"
});
formatter.match({
  "location": "IconnectStepDef.click_on_Outlook_app()"
});
formatter.result({
  "duration": 62207391,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[9]/div[2]/div[4]/div/div/div/div/div[12]/a\"}\n  (Session info: chrome\u003d81.0.4044.92)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u002714\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.92, chrome: {chromedriverVersion: 81.0.4044.69 (6813546031a4b..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57753}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: bbca8a53edd73122961f7e93822be289\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[9]/div[2]/div[4]/div/div/div/div/div[12]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinitions.IconnectStepDef.click_on_Outlook_app(IconnectStepDef.java:64)\r\n\tat ✽.Then click on Outlook app(C:/Users/admin/eclipse-workspace/infosys.com/src/main/java/features/iconnectLogin.feature:10)\r\n",
  "status": "failed"
});
});