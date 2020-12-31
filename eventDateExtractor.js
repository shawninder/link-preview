const { $jsonld, toRule } = require('@metascraper/helpers')
const moment = require('moment')

module.exports = exports = function eventDateExtractor (opts) {
  const toEventDate = toRule((str) => {
    const eventStart = moment(str)
    const dateString = `${eventStart.format('YYYY-MM-DD HH:mm:ss')}`
    return dateString
  }, opts)

  return {
    eventDate: [
      toEventDate($jsonld('startDate'))
    ]
  }
}
