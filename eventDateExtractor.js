const { $jsonld, toRule } = require('@metascraper/helpers')

module.exports = exports = function eventDateExtractor (opts) {
  const toEventDate = toRule(i => i, opts)

  return {
    eventDate: [
      toEventDate($jsonld('startDate'))
    ]
  }
}
