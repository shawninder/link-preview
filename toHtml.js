module.exports = exports = function toHtml ({
  url,
  title,
  description,
  image,
  eventDate,
  eventIsVirtual,
  eventLocation
}) {
  const showEventLocation = eventIsVirtual || eventLocation

  return `
<div class="linkPreview">
  <div class="linkPreview-image">
    <img src="${image}" alt="${title}" />
  </div>
  <strong class="linkPreview-title">
    <a href="${url}">
      ${title}
    </a>
  </strong>${
    (showEventLocation)
      ? `
  <span class="linkPreview-eventLocation">
    ${eventIsVirtual ? 'Online' : eventLocation}
  </span>`
      : ''}
  <p class="linkPreview-desc">
    ${description || ''}
  </p>${eventDate
    ? `
  <em class="linkPreview-eventDate">
    ${eventDate}
  </em>`
    : ''}
</div>
`
}
