# Link preview generator

Generates link previews as HTML from a list of URLs

## You will need

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/en/)

## Usage
Just clone the repo and provide the binary with a list of space-separated URLs.

```sh
$ git clone git@github.com:shawninder/link-preview.git
$ cd link-preview
$ node bin/preview <urls...>
```

This will output some HTML for each of those URLs.

You can add a bit of style with css: [these example styles](style.css) are a good place to start.

Finally, don't forget to review the results as this process won't get things right every time.
