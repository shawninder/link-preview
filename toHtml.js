module.exports = exports = function toHtml ({
  url,
  title,
  description,
  image,
  eventDate
}) {
  return `
<div class="linkPreview">
  <a href="${url}"><img src="${image}" /></a>
  <strong><a href="${url}">${title}</a></strong>
  <p>${description || ''}</p>${eventDate
    ? `
  <em>${eventDate}</em>`
    : ''}
</div>
`
}
