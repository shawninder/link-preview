const unfurlImage = require('./unfurlImage')
const unfurlPdf = require('./unfurlPdf')
const unfurlWebsite = require('./unfurlWebsite')
const toHtml = require('./toHtml')

const imageExts = [
  'jpg', 'jpeg', 'png', 'svg', 'gif', 'tif', 'tiff', 'bmp', 'eps', 'webp'
].map((ext) => {
  return `.${ext}`
})

module.exports = exports = function (urls, opts) {
  if (opts.verbose) {
    console.log('opts', opts)
  }
  const promises = urls.map((url) => {
    const ext = url.slice(url.lastIndexOf('.') + 1).toLowerCase()
    // image?
    if (imageExts.includes(ext)) {
      return toHtml(unfurlImage(url))
    }
    // pdf?
    if (ext === 'pdf') {
      return toHtml(unfurlPdf(url))
    }
    // websites, including videos (youtube, vimeo, etc.)
    return unfurlWebsite(url)
      .then((body) => {
        return toHtml(body)
      })
  })
  return Promise.all(promises)
    .then((results) => {
      return results.join(
`
`
      ) + `
`
    })
}
