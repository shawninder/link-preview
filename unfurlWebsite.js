const fetch = require('node-fetch')
const metascraper = require('metascraper')

const descriptionExtractor = require('metascraper-description')
const imageExtractor = require('metascraper-image')
const titleExtractor = require('metascraper-title')
const urlExtractor = require('metascraper-url')

const eventExtractor = require('./eventExtractor')

const scrape = metascraper([
  descriptionExtractor(),
  imageExtractor(),
  titleExtractor(),
  urlExtractor(),
  eventExtractor(),
])

module.exports = exports = async function unfurlWebsite (url) {
  const res = await fetch(url)
  const html = await res.text()

  return scrape({ html, url })
}
