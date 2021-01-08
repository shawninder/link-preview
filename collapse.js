(function (ctx) {
  const doc = ctx.document

  ctx.on(ctx, ['load'], go)

  function go () {
    const h2s = doc.querySelectorAll('.collapser')
    h2s.forEach((h2) => {
      ctx.on(h2, ['click'], (event) => {
        toggleCollapse(event.target)
      })
      const anchor = h2.querySelector('a')
      ctx.on(anchor, ['click'], (event) => {
        event.preventDefault()
        event.stopPropagation()
        ctx.location.hash = event.target.id
        toggleCollapse(h2)
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
