(function (ctx) {
  const doc = ctx.document
  const eventuallyUpdateQuery = ctx.debounce(onQuery, 400)
  const optCharRegEx = /[_\-:\/\\]/g
  let lists, searchBox, searchResults, query

  ctx.on(ctx, ['load'], go)

  function go () {
    // Track query
    searchBox = doc.querySelector('#searchBox')
    const searchBoxInput = searchBox.querySelector('input')
    searchResults = doc.querySelector('#searchResults')
    lists = doc.querySelectorAll('.linkList')
    ctx.on(searchBoxInput, ['change', 'input'], eventuallyUpdateQuery)
    ctx.on(searchBoxInput, ['keydown'], possiblyDissmissSearchResults)
    ctx.on(ctx, ['keydown', 'click'], possiblyDissmissSearchResults)
    // find link previews and get relevance score
    // reorder previews by that score, categories become "tags"
  }

  function possiblyDissmissSearchResults (event) {
    if (event.type === 'click') {
      if (!isWithin(event.target, ['#searchBox', '#searchResults'])) {
        dissmissSearchResults()
      }
    } else {
      if (event.key === 'Esc' || event.key === 'Escape') {
        dissmissSearchResults()
      }
      if (event.key === 'Enter' && query && isWithin(event.target, ['#searchBox'])) {
        showSearchResults()
      }
    }
  }

  function showSearchResults () {
    lists.forEach((list) => {
      list.classList.add('isInBg')
    })
    searchResults.classList.add('isVisible')
  }

  function dissmissSearchResults () {
    lists.forEach((list) => {
      list.classList.remove('isInBg')
    })
    searchResults.classList.remove('isVisible')
  }

  function isWithin (el, selectors) {
    let selector, i = 0
    while (selector = selectors[i++]) {
      let elem = el
      while (!elem.matches('body')) {
        if (elem.matches(selector)) {
          return true
        }
        elem = elem.parentNode
      }
    }
    return false
  }

  function onQuery (event) {
    if (event.target.value === query) {
      return
    }
    query = event.target.value

    updateResults(query)
  }

  function updateResults (query) {
    const links = Array.prototype.reduce.call(lists, (all, list) => {
      list.category = list.category || findCategory(list)
      list.querySelectorAll('.linkPreview').forEach((link) => {
        all.push(link)
      })
      return all
    }, [])

    const candidates = Array.prototype.map.call(links, Candidate)

    const filtered = ctx.fuzzaldrin.filter(candidates, query, {
      key: Candidate.prototype.key,
      optCharRegEx,
      pathSeparator: '\n',
      usePathScoring: true
    })

    empty(searchResults)
    if (filtered.length > 0) {
      filtered.forEach((result) => {
        searchResults.appendChild(createResult(result, query))
      })
      showSearchResults()
    } else {
      dissmissSearchResults()
    }
  }

  function createResult (data, query) {
    const li = doc.createElement('li')
    const figure = doc.createElement('figure')
    const clone = data.el.cloneNode(true)
    clone.classList.add('isClone')
    const title = clone.querySelector('strong a')
    title.innerHTML = wrap(title.innerText, query)
    const desc = clone.querySelector('p')
    desc.innerHTML = wrap(desc.innerText, query)
    const category = findCategory(data.el)
    if (category) {
      const caption = doc.createElement('figcaption')
      caption.appendChild(doc.createTextNode(category))
      figure.appendChild(caption)
    }
    figure.appendChild(clone)
    figure.classList.add('searchResult')
    li.appendChild(figure)
    return li
  }

  function findCategory (el) {
    let current = el.parentNode.parentNode.parentNode
    let collapser
    while (current = current.previousElementSibling) {
      if (current.matches('.collapser')) {
        collapser = current
        break
      }
      if (current.matches('.linkList')) {
        break
      }
    }
    if (collapser) {
      return collapser.innerText
    }
    return false
  }

  function empty (el) {
    return el.querySelectorAll('*').forEach((item) => {
      item.remove()
    })
  }

  function Candidate (el) {
    const candidate = { el }

    const location = el.querySelector('span')
    const serialized = `${el.querySelector('strong').innerText}\n${el.querySelector('p').innerText}\n${location ? location.innerText : ''}\n`
    candidate[Candidate.prototype.key] = serialized
    return candidate
  }
  Candidate.prototype.key = 'id'

  function wrap (str, query) {
    const tagClass = 'matchesQuery'
    return ctx.fuzzaldrin.wrap(str, query, {
      optCharRegEx,
      wrap: {
        tagClass
      }
    })
  }
})(this)
