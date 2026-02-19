require("dotenv").config();
const { Builder } = require("selenium-webdriver");
const capabilities = require("../browserstack-config");
const scrapeArticles = require("./scraper");

async function runParallelTests() {
  await Promise.all(
    capabilities.map(async (cap) => {
      const driver = await new Builder()
        .usingServer("https://hub.browserstack.com/wd/hub")
        .withCapabilities(cap)
        .build();

      try {
        await scrapeArticles(driver);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        await driver.quit();
      }
    })
  );
}

runParallelTests();
