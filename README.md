# Link preview generator

Generates link previews as HTML from a list of URLs

It also comes with some styles and scripts to implement collapsible sections and full-text search.

## Getting started

1. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Install [Node.js and npm](https://nodejs.org/en/)
3. Clone of fork the repo
```
git clone git@github.com:shawninder/link-preview.git && cd link-preview
```
4. Install dependencies:
```
npm install
```
5. Provide the binary with a list of space-separated URLs
```
npm run html <urls...>
```
This will output some HTML for each of those URLs
6. Paste them into HTML lists in your page
```
<div class="linkList">
  <ul>
    <li>
      {PASTE RESULT OF SCRIPT HERE}
    </li>
    <li>
      {ANOTHER RESULT HERE}
    </li>
  </ul>
</div>
```
7. Categorize the link lists
```
<h2 class="collapser"><a id="activism" href="#activism">Activism</a></h2>
<div class="linkList">{...}</div>
<h2 class="collapser"><a id="activism" href="#ecology">Ecology</a></h2>
<div class="linkList">{...}</div>
```
8. Add a search box
```
<div id="searchBox">
  <span class="icon">🔍</span> <input type="text" />
</div>
<ol id="searchResults"></ol>
```
9. Get the styles
```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/shawninder/link-preview/min/style.css" />
```
10. Add the scripts (in the right order!)
```
<script src="https://cdn.jsdelivr.net/gh/shawninder/link-preview/min/on.js">
</script>
<script src="https://cdn.jsdelivr.net/gh/shawninder/link-preview/min/imgClick.js">
</script>
<script src="https://cdn.jsdelivr.net/gh/shawninder/link-preview/min/collapse.js">
</script>
<script src="https://cdn.jsdelivr.net/npm/minisearch@3.0.2/dist/umd/index.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/javascript-debounce@1.0.1/dist/javascript-debounce.min.js">
</script>
<script src="https://cdn.jsdelivr.net/gh/shawninder/link-preview/min/search.js">
</script>
```

## Example
Have a look at a complete working example: [the test page](test.html).

You can also use this page to paste your link preview HTML and try it out real quick, or to work on this repository.

## Build
The test page uses the assets directly, but it is recommended to use a minified version of these assets. These can be found in [the min directory](min/) and rebuilt with `npm run build`.

## Styles
Notice the [styles](assets/styles.css), which could be a good starting point for your own design.
