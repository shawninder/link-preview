#!/usr/bin/env node
const run = require('../')

const opts = {}

const urls = process.argv.slice(2)
  .reduce((urls, arg) => {
    if (arg.indexOf('--') === 0) {
      const flag = arg.slice(2)
      if (flag === 'verbose') {
        opts.verbose = true
      }
      return urls
    }

    if (arg.indexOf('-') === 0) {
      const flag = arg.slice(1)
      if (flag === 'v') {
        opts.verbose = true
      }
      return urls
    }

    urls.push(arg)
    return urls
  }, [])

run(urls, opts)
  .then((str) => {
    process.stdout.write(str)
  })
  .catch((ex) => {
    process.stderr.write(`
${ex.toString()}
`)
  })
