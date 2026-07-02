import {Given, When, Then} from '@cucumber/cucumber'
import { expect } from '@playwright/test';
import { CustomWorld } from '../hooks/World';


Given('User click on the register link', async function (this: CustomWorld) {
    await this.page.click("//i[@class = 'fa fa-user']")
    await this.page.click("//a[text() = 'Register']")
});

Given('User enter the mobile number as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'telephone']", string)
});

Given('User enter the first name as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'firstname']", string);
});

Given('User enter the last name as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'lastname']", string)
});

Given('User enters the password as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'password']", string)
});

Given('User enter the confirm password as {string}', async function (this: CustomWorld, string) {
  await this.page.fill("//input[@name = 'confirm']", string)
});

When('the user click on register button', async function (this: CustomWorld) {
  await this.page.click("//input[@value = 'Continue']")
});

Then('User selects the privacy policy checkbox', async function (this: CustomWorld) {
    await this.page.click("//input[@type = 'checkbox']")
});

Then('Registration should be success', async function (this: CustomWorld) {
  await expect(this.page.locator("//h1[text() = 'Your Account Has Been Created!']")).toBeVisible(); 
});

Then('Registration should fail', async function (this: CustomWorld) {
  await expect(
    this.page.locator("//div[contains(@class,'alert-danger')]")
  ).toBeVisible();
});
