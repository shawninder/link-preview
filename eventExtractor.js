const { $jsonld, toRule } = require('@metascraper/helpers')
const moment = require('moment')

module.exports = exports = function eventDateExtractor (opts) {
  const toEventDate = toRule((str) => {
    if (!str) {
      return ''
    }
    const eventStart = moment(str)
    const dateString = `${eventStart.format('YYYY-MM-DD HH:mm:ss')}`
    return dateString
  }, opts)

  const toEventIsVirtual = toRule((type) => {
    return type === 'VirtualEvent' ? true : false
  })

  const toEventLocation = toRule((name) => {
    return name || ''
  }, opts)

  return {
    eventDate: [
      toEventDate($jsonld('startDate'))
    ],
    eventIsVirtual: [
      toEventIsVirtual($jsonld('location.@type'))
    ],
    eventLocation: [
      toEventLocation($jsonld('location.name')),
      toEventLocation($jsonld('location.address.streetAddress'))
    ]
  }
}
