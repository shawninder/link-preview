module.exports = exports = function toHtml ({
  url,
  title,
  description,
  image,
  eventDate,
  eventIsVirtual,
  eventLocation
}) {
  return `
<div class="linkPreview">
  <a href="${url}"><img src="${image}" /></a>
  <strong><a href="${url}">${title}</a></strong>
  <p>${description || ''}</p>${eventDate
    ? `${(eventIsVirtual || eventLocation)
    ? `
  <span>${eventIsVirtual ? 'Online' : eventLocation}</span>`
    : ''}
  <em>${eventDate}</em>`
    : ''}
</div>
`
}
