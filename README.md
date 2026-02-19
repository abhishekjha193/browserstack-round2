# BrowserStack Round 2 – Web Scraping Automation

## Project Overview

This project automates scraping articles from the El País Opinion page using Selenium WebDriver and runs tests in parallel on BrowserStack cloud infrastructure.

## Features

- Scrapes first 5 opinion articles
- Extracts title and article content
- Downloads article images
- Translates titles to English using Google Translate API
- Identifies repeated words (frequency analysis)
- Runs in parallel on BrowserStack cloud
- Public build available

## Tech Stack

- Node.js
- Selenium WebDriver
- BrowserStack Automate
- Axios
- RapidAPI (Google Translate)

## Parallel Execution

Tests run in parallel on:
- Chrome (Windows 10)
- Firefox (macOS Ventura)

## Project Overview

browserstack-round2/
 ├── node_modules
 ├── src/
 │    ├── scraper.js
 │    ├── translator.js
 │    ├── analyzer.js
 │    ├── runner.js
 ├── images/ 
 ├── browserstack-config.js
 ├── .env
 ├── package.json
 ├── README.md

## Setup Instructions

1. Clone repository
2. Run: npm install
3. Create `.env` file: 
- BROWSERSTACK_USERNAME=your_username 
- BROWSERSTACK_ACCESS_KEY=your_access_key
- RAPIDAPI_KEY=your_key
- RAPIDAPI_HOST=google-api31.p.rapidapi.com
4. Run: node src/runner.js

## BrowserStack Public Build Link
https://automate.browserstack.com/projects/Default+Project/builds/BrowserStack-Abhishek/3?public_token=7dfeae31e1713bce57394f98619adaeeae2f4d49781ec584fcebf2b94087375d

## Author
Abhishek Jha

