import {Given, When, Then} from '@cucumber/cucumber'
import {expect} from '@playwright/test'
import { CustomWorld } from '../hooks/World';


Given('User navigates the to application', async function (this: CustomWorld) {
  await this.page.goto("https://tutorialsninja.com/demo/")
});

Given('User click on the login link', async function (this: CustomWorld) {
  await this.page.click("//i[@class = 'fa fa-user']")
  await this.page.click("//a[text() = 'Login']")
});

Given('User enter the email as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'email']", string);
});

Given('User enter the password as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'password']", string);
});

When('the user click on login button', async function (this: CustomWorld) {
  await this.page.click("//input[@value = 'Login']")
});

Then('Login should be success', async function (this: CustomWorld) {
  await expect(this.page.locator("//h2[text() = 'My Account']")).toBeVisible();
});

Then('Login should fail', async function (this: CustomWorld) {
  
  await expect(this.page.locator("//div[@class = 'alert alert-danger alert-dismissible']")).toBeVisible();
});

