Feature: Login to Infosys VPN using iconnect

Scenario: Login to iconnect.infosys.com using Chrome

Given user opens iconnect via chrome
When title of the page is iConnect
Then user enters username and password
Then user clicks on Login button
When Page has authentication
Then click on Outlook app