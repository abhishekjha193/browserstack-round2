const { By, until } = require("selenium-webdriver");
const fs = require("fs");
const axios = require("axios");

async function scrapeArticles(driver) {
  try {
    console.log("Opening El País Opinion page...");
    await driver.get("https://elpais.com/opinion/");

    await driver.wait(until.elementLocated(By.css("article h2 a")), 10000);

    // handle cookie popup
    try {
      let buttons = await driver.findElements(By.css("button"));
      for (let btn of buttons) {
        let text = await btn.getText();
        if (
          text.toLowerCase().includes("accept") ||
          text.toLowerCase().includes("aceptar")
        ) {
          await btn.click();
          console.log("Cookie accepted.");
          break;
        }
      }
    } catch (e) {}

    // collect links
    let articleElements = await driver.findElements(By.css("article h2 a"));
    let links = [];

    for (let el of articleElements.slice(0, 5)) {
      let href = await el.getAttribute("href");
      links.push(href);
    }

    let results = [];

    // loop safely
    for (let i = 0; i < links.length; i++) {
      console.log(`\nOpening Article ${i + 1}`);

      await driver.get(links[i]);
      await driver.wait(until.elementLocated(By.css("header h1")), 10000);

      let titleElement = await driver.findElement(By.css("header h1"));
      let title = await titleElement.getText();
      console.log("Title:", title);

      let paragraphs = await driver.findElements(By.css("article p"));
      let content = "";

      for (let p of paragraphs) {
        let text = await p.getText();
        if (text.length > 50) {
          content += text + "\n";
        }
      }

      console.log("Content preview:", content.substring(0, 200), "...");

      // download image
      try {
        let images = await driver.findElements(By.css("figure img"));
        if (images.length > 0) {
          let imageUrl = await images[0].getAttribute("src");

          const response = await axios({
            url: imageUrl,
            method: "GET",
            responseType: "stream",
          });

          const filePath = `images/article_${i + 1}.jpg`;
          const writer = fs.createWriteStream(filePath);

          response.data.pipe(writer);

          await new Promise((resolve, reject) => {
            writer.on("finish", resolve);
            writer.on("error", reject);
          });

          console.log("Image saved:", filePath);
        }
      } catch (err) {
        console.log("No image found.");
      }

      results.push({ title, content });
    }

    // mark browserstack session passed
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason":"Articles scraped successfully"}}'
    );

    return results;

  } catch (error) {
    console.error("Error:", error);

    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason":"Script error"}}'
    );
  }
}

module.exports = scrapeArticles;
