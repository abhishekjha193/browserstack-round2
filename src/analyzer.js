function analyzeTitles(translatedTitles) {

  const wordCount = {};

  for (let title of translatedTitles) {

    if (!title) continue;

    const words = title
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .split(/\s+/);

    for (let word of words) {
      if (!word) continue;

      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  }

  console.log("\nRepeated Words (more than 2 times):");

  let found = false;

  for (let word in wordCount) {
    if (wordCount[word] > 2) {
      console.log(`${word} → ${wordCount[word]} times`);
      found = true;
    }
  }

  if (!found) {
    console.log("No words repeated more than twice.");
  }
}

module.exports = analyzeTitles;
