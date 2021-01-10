;(function (ctx) {
  const doc = ctx.document

  ctx.on(ctx, ['load'], go)

  function go () {
    const collapsers = doc.querySelectorAll('.collapser')
    collapsers.forEach((collapser) => {
      ctx.on(collapser, ['click'], (event) => {
        toggleCollapse(event.target)
      })
      const anchor = collapser.querySelector('a')
      ctx.on(anchor, ['click'], (event) => {
        event.preventDefault()
        event.stopPropagation()
        if (collapser.matches('.opened')) {
          ctx.location.hash = event.target.id
        } else {
          ctx.location.hash = ''
        }
        toggleCollapse(collapser)
      })
    })
  }

  function toggleCollapse (toggle) {
    toggle.classList.toggle('opened')
    let section, current = toggle.nextElementSibling

    while (current) {
      if (current.matches('.linkList')) {
        section = current
        break
      }
      if (current.matches('.collapser')) {
        break
      }
      current = current.nextElementSibling
    }
    if (section) {
      section.classList.toggle('isHidden')
    }
  }
})(this)
