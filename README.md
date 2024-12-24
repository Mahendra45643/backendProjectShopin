# Node.js Web Crawler

## Overview
This project implements a web crawler designed to discover and list product URLs from various e-commerce websites. The crawler intelligently identifies product pages based on predefined URL patterns and handles multiple domains efficiently.

## Features
- **URL Discovery**: The crawler can discover product URLs using common patterns such as `/product/`, `/item/`, and `/p/`.
- **Scalability**: Capable of handling large websites with deep hierarchies and numerous products.
- **Performance**: Utilizes asynchronous requests to minimize runtime and improve efficiency.
- **Robustness**: Handles edge cases like infinite scrolling and dynamically loaded content.

## Project Structure
```
nodejs-web-crawler
├── src
│   ├── crawler.js          # Main logic for the web crawler
│   ├── utils
│   │   └── urlPatterns.js  # Common URL patterns for product pages
│   └── config
│       └── domains.js      # List of e-commerce domains to crawl
├── package.json             # npm configuration file
├── README.md                # Project documentation
└── .gitignore               # Files and directories to ignore by Git
```

## Setup and Usage
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd nodejs-web-crawler
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Configure domains**:
   Edit `src/config/domains.js` to add or modify the list of e-commerce domains you want to crawl.

4. **Run the crawler**:
   ```
   node src/crawler.js
   ```

## Output
The crawler will output a structured list of discovered product URLs for each domain, ensuring that all URLs are unique and point directly to product pages.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.