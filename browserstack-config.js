require("dotenv").config();

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

const buildName = "BrowserStack-Round2-Abhishek";

const capabilities = [
  {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "bstack:options": {
      os: "Windows",
      osVersion: "10",
      buildName: buildName,
      sessionName: "Windows Chrome",
      userName: username,
      accessKey: accessKey,
    },
  },
  {
    "browserName": "Firefox",
    "browserVersion": "latest",
    "bstack:options": {
      os: "Windows",
      osVersion: "11",
      buildName: buildName,
      sessionName: "Windows Firefox",
      userName: username,
      accessKey: accessKey,
    },
  },
  {
    "browserName": "Safari",
    "browserVersion": "latest",
    "bstack:options": {
      os: "OS X",
      osVersion: "Monterey",
      buildName: buildName,
      sessionName: "Mac Safari",
      userName: username,
      accessKey: accessKey,
    },
  },
  {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "bstack:options": {
      deviceName: "iPhone 14",
      realMobile: "true",
      osVersion: "16",
      buildName: buildName,
      sessionName: "iPhone 14",
      userName: username,
      accessKey: accessKey,
    },
  },
  {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "bstack:options": {
      deviceName: "Samsung Galaxy S22",
      realMobile: "true",
      osVersion: "12.0",
      buildName: buildName,
      sessionName: "Samsung S22",
      userName: username,
      accessKey: accessKey,
    },
  },
];

module.exports = capabilities;
