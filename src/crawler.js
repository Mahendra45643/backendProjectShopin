const axios = require('axios');
const cheerio = require('cheerio');
const { domains } = require('./config/domains');

async function fetchHTML(url) {
  try {
    const { data } = await axios.get(url);
    console.log(`Fetched HTML for ${url}`); // Log HTML fetch success
    return cheerio.load(data);
  } catch (error) {
    console.error(`Error fetching HTML for ${url}:`, error);
    return null;
  }
}

async function discoverImageURLs(domain) {
  const $ = await fetchHTML(domain);
  if (!$) return [];

  const imageURLs = new Set();

  $('img').each((_, element) => {
    let src = $(element).attr('src');
    // console.log(`Found src: ${src}`); // Log each src found
    if (src) {
      // Handle relative URLs
      if (!src.startsWith('http')) {
        src = new URL(src, domain).href;
      }
      imageURLs.add(src);
    }
  });

  return Array.from(imageURLs);
}

async function main() {
  for (const domain of domains) {
    console.log(`Crawling ${domain}...`);
    const imageURLs = await discoverImageURLs(domain);
    console.log(`Found ${imageURLs.length} image URLs on ${domain}:`);
    console.log(imageURLs);
  }
}

main();