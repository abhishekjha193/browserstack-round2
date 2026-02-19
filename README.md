# 📌 BrowserStack Round 2 – Web Scraping Automation

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

## ⚙️ Tech Stack

- Node.js
- Selenium WebDriver
- BrowserStack Automate
- Axios
- RapidAPI (Google Translate)

## Parallel Execution

Tests run in parallel on:
- Chrome (Windows 10)
- Firefox (macOS Ventura)

## Technical Architecture

browserstack-round2/
 - ├── src/
 - │    ├── scraper.js
 - │    ├── translator.js
 - │    ├── analyzer.js
 - │    ├── runner.js
 - ├── images/ 
 - ├── browserstack-config.js
 - ├── .env.example
 - ├── package.json
 - ├── README.md

## Setup Instructions

1. Clone repository
2. Run : npm install
3. Create `.env` file: 
- BROWSERSTACK_USERNAME=your_username 
- BROWSERSTACK_ACCESS_KEY=your_access_key
- RAPIDAPI_KEY=your_key
- RAPIDAPI_HOST=google-api31.p.rapidapi.com
4. Run : node src/runner.js

## BrowserStack Public Build Link
https://automate.browserstack.com/projects/Default+Project/builds/BrowserStack-Abhishek/3?public_token=7dfeae31e1713bce57394f98619adaeeae2f4d49781ec584fcebf2b94087375d

## 📊 Test Execution Report
🌐 Cloud Platform: BrowserStack Automate
This automation suite was executed on BrowserStack Cloud Infrastructure with parallel cross browser and real device coverage.
Build Summary
- Build Name: BrowserStack-Round2-Abhisek #3
- Status: PASSED
- Total Sessions: 5
- Failures: 0
- Execution Time: ~1m 18s (max session)
- Report Generated: Feb 19, 2026

## 📸 Execution Proof
<img width="1535" height="736" alt="image" src="https://github.com/user-attachments/assets/a7f8d700-ed11-456a-a296-9227f4de6a57" />

## 👨‍💻 Author
Abhishek Jha

