require("dotenv").config();
const axios = require("axios");

async function translateTitles(titles) {
  const translatedTitles = [];

  for (let title of titles) {

    if (!title || title.trim() === "") {
      translatedTitles.push("No Title");
      continue;
    }

    const options = {
      method: "POST",
      url: `https://${process.env.RAPIDAPI_HOST}/gtranslate`,
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
        "Content-Type": "application/json"
      },
      data: {
        text: title,
        to: "en",
        from_lang: "es"
      }
    };

    try {
      const response = await axios.request(options);

      if (response.data && response.data.translated_text) {
        translatedTitles.push(response.data.translated_text);
      } else {
        console.log("Unexpected API format:", response.data);
        translatedTitles.push(title);
      }

    } catch (error) {
      console.log("Translation error for:", title);
      translatedTitles.push(title);
    }
  }

  return translatedTitles;
}

module.exports = translateTitles;
