;(function (ctx) {
  const doc = ctx.document

  const allFields = [
    'title',
    'desc',
    'eventLocation',
    'el'
  ]

  const searchFields = [
    'title',
    'desc',
    'eventLocation'
  ]

  let lists, links, searchBox, searchResults, query

  const eventuallyUpdateQuery = ctx.debounce(onQuery, 400)

  const miniSearch = new ctx.MiniSearch({
    idField: 'url',
    fields: searchFields,
    storeFields: allFields,
    searchOptions: {
      boost: {
        title: 2
      },
      prefix: true,
      fuzzy: (term) => {
        return (
          term.length > 3
            ? 0.2
            : null
        )
      }
    }
  })

  ctx.on(ctx, ['load'], go)

  function go () {
    searchBox = doc.querySelector('#searchBox')
    const searchBoxInput = searchBox.querySelector('input')
    searchResults = doc.querySelector('#searchResults')
    lists = doc.querySelectorAll('.linkList')
    links = Array.prototype.reduce.call(lists, (all, list) => {
      list.category = list.category || findCategory(list)
      const catLinks = list.querySelectorAll('.linkPreview')
      catLinks.forEach((link) => {
        const titleAnchor = link.querySelector('.linkPreview-title a')
        const url = titleAnchor.href
        const location = link.querySelector('.linkPreview-eventLocation')
        all.push({
          url,
          category: list.category,
          el: link,
          title: titleAnchor.innerText,
          desc: link.querySelector('.linkPreview-desc').innerText,
          eventLocation: location ? location.innerText : ''
        })
      })
      return all
    }, [])
    miniSearch.addAll(links)

    ctx.on(searchBoxInput, ['change', 'input'], eventuallyUpdateQuery)
    ctx.on(searchBoxInput, ['keydown'], possiblyDissmissSearchResults)
    ctx.on(ctx, ['keydown', 'click'], possiblyDissmissSearchResults)
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
    searchResults.classList.add('isVisible')
  }

  function dissmissSearchResults () {
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
    const filtered = miniSearch.search(query)

    empty(searchResults)

    if (filtered.length > 0) {
      filtered.forEach((result) => {
        searchResults.appendChild(createResult(result, query))
      })
      showSearchResults()
    } else if (query.length > 0) {
      searchResults.appendChild(createEmptyResult(query))
      showSearchResults()
    } else {
      dissmissSearchResults()
    }
  }

  function createEmptyResult (query) {
    const li = doc.createElement('li')
    li.classList.add('noResults')
    li.appendChild(doc.createTextNode('∅'))
    return li
  }

  function createResult (data, query) {
    const li = doc.createElement('li')
    const figure = doc.createElement('figure')
    const clone = data.el.cloneNode(true)
    clone.classList.add('isClone')
    if (data.category) {
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
})(this)
