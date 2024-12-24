# backendProjectShopin
Crawler for Discovering Product URLs on E-commerce Websites 
Overview
This project is a web crawler built using Node.js. The primary purpose is to extract image URLs from a list of provided domains (websites). It utilizes the axios library for HTTP requests and the cheerio library for parsing HTML.

Features
Fetches HTML content of webpages.
Extracts and resolves image URLs from <img> tags.
Handles relative URLs by converting them to absolute URLs.
Logs crawled data for analysis.
File Structure
bash
Copy code
nodejs-web-crawler/
├── src/
│   └── crawler.js         # Main script
├── config/
│   └── domains.js         # Configuration file for domains
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation (optional)
Dependencies
The project uses the following dependencies:

axios: For making HTTP GET requests.
cheerio: For parsing and traversing HTML.
Install dependencies using:

bash
Copy code
npm install
Main Script: src/crawler.js
Functions
fetchHTML(url)

Fetches the HTML content of a given URL using axios.
Parses the response with cheerio for further processing.
Logs the success or failure of the request.
Parameters:

url (string): The URL of the webpage to fetch.
Returns:

A cheerio-loaded instance of the webpage's HTML.
discoverImageURLs(domain)

Extracts all image URLs (src attributes of <img> tags) from a given domain.
Converts relative URLs to absolute URLs using the URL constructor.
Parameters:

domain (string): The base URL of the website to crawl.
Returns:

An array of discovered image URLs.
main()

Iterates through a list of domains and crawls each for image URLs.
Logs the number of images found and the URLs.
Execution:

Called at the end of the script to execute the crawler.
Usage
Clone the repository:

bash
Copy code
git clone https://github.com/your-repo/nodejs-web-crawler.git
cd nodejs-web-crawler
Add the domains to config/domains.js:

javascript
Copy code
module.exports.domains = [
    "https://example.com",
    "https://anotherexample.com"
];
Run the crawler:

bash
Copy code
npm start
Configuration File: config/domains.js
This file contains an array of domain URLs to crawl.

Example:

javascript
Copy code
module.exports.domains = [
    "https://example.com",
    "https://testsite.com"
];
Package File: package.json
This file defines the project metadata, dependencies, and scripts.

Fields
name: Project name (nodejs-web-crawler).
version: Project version (1.0.0).
description: Brief description of the project.
main: Entry point of the application (src/crawler.js).
scripts: Custom commands for running the project.
start: Runs the crawler script.
test: Placeholder for tests.
keywords: Relevant keywords.
author: Author's name.
license: License type (MIT).
dependencies: Required npm packages:
axios: HTTP client.
cheerio: HTML parsing library.
Example package.json
json
Copy code
{
  "name": "nodejs-web-crawler",
  "version": "1.0.0",
  "description": "A web crawler for discovering product URLs on e-commerce websites.",
  "main": "src/crawler.js",
  "scripts": {
    "start": "node src/crawler.js",
    "test": "echo \"No tests specified\" && exit 0"
  },
  "keywords": [
    "web-crawler",
    "e-commerce",
    "product-urls",
    "nodejs"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "axios": "^0.21.1",
    "cheerio": "^1.0.0-rc.10"
  }
}
Example Output
Console Output:

arduino
Copy code
Crawling https://example.com...
Found 5 image URLs on https://example.com:
[
    "https://example.com/image1.jpg",
    "https://example.com/image2.png",
    ...
]
Error Handling: If a domain fails to load, an error is logged:

javascript
Copy code
Error fetching HTML for https://example.com: Error: Request failed with status code 404
Future Enhancements
Add support for crawling multiple pages via internal links.
Implement concurrency for faster crawling.
Enhance error handling and retry mechanisms.
Support for storing results in a database or JSON file.
