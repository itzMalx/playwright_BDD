import { Before, After, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";
import { CustomWorld } from "./World";

setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, { result }) {
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ path: "failed.png", type: "png" });
    await this.attach(screenshot, "image/png");
  }

  await this.page.close();
  await this.context.close();
  await this.browser.close();
});