;(function (ctx) {
  const doc = ctx.document

  ctx.on(ctx, ['load'], go)

  ctx.makeImgClickable = (linkPreview) => {
    const img = linkPreview.querySelector('.linkPreview-image img')
    const a = linkPreview.querySelector('.linkPreview-title a')
    ctx.on(img, ['click', 'auxclick'], (event) => {
      if (event.button === 0) {
        // Left click
        ctx.location.assign(a.href)
      } else if (event.button === 1) {
        // Middle click
        ctx.open(a.href)
      }
    })
    img.classList.add('clickable')
  }

  function go () {
    const linkPreviews = doc.querySelectorAll('.linkPreview')
    linkPreviews.forEach(makeImgClickable)
  }
})(this)
