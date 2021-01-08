(function (ctx) {
  const doc = ctx.document

  ctx.on(ctx, ['load'], go)

  function go () {
    const linkPreviews = doc.querySelectorAll('.linkPreview')
    linkPreviews.forEach((linkPreview) => {
      const img = linkPreview.querySelector('.linkPreview-image img')
      const a = linkPreview.querySelector('.linkPreview-title a')
      ctx.on(img, ['click', 'auxclick'], (event) => {
        if (event.button === 0) {
          // Left click
          window.location.assign(a.href)
        } else if (event.button === 1) {
          // Middle click
          window.open(a.href)
        }
      })
      img.classList.add('clickable')
    })
  }
})(this)
