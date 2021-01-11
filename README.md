# Link preview generator

Generates link previews as HTML from a list of URLs

You can paste the results in [the test page](test.html) to see what it looks like with some [styles](assets/style.css)

## You will need

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/en/)

## Usage
Just clone the repo, install dependencies, and provide the binary with a list of space-separated URLs.

```sh
$ git clone git@github.com:shawninder/link-preview.git
$ cd link-preview
$ npm install
$ node bin/preview <urls...>
```

This will output some HTML for each of those URLs, which you can paste in your page.

See [the test page](test.html) for a usage example. You can also use this page as a test bed for your own fixes or improvements.

Notice it uses some [styles](assets/styles.css), which could be a good starting point for your own design.

## Build
The test page uses the assets directly, but it is recommended to use a minified version of these assets. These can be found in [the min directory](min/) and rebuilt with `npm run build`.

## Deploy
You can include them in your page directly from GitHub:

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
Or you can download the files from the urls and host them anywhere.
