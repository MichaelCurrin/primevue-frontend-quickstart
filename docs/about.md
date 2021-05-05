# About


## What is PrimeVue?

> The Most Complete Vue UI Component Library

See my [PrimeVue resources][] page to learn more.

[PrimeVue resources]: https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/primevue/


## Features

What you get with this project:

- Made with PrimeVue 3 and Vue 3.
- Easy serving and hosting.
    - Serves as HTML and JS static assets.
    - Start a local web server in the root.
    - Hosted with GitHub Pages for free.
- Uses [ES Modules][] so you can use `import` syntax.
- Simple and light project.
    - No build step needed.
    - No need for Node or Vue CLI.
    - No need for `package.json` or other JS configs.
- Use this as a standalone project, or use it as a reference to add Vue to your site.

[ES Modules]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html


## Structure

### Minimum

You could even mix your JS and CSS into one HTML file, if you wanted to only have one file. But you'll probably want to separate those for easier management.

A PrimeVue / Vue frontend project only needs 3 files to run, as set up in this template:

- [index.html](/index.html)
    - HTML homepage.
    - Including CSS around PrimeVue, including a chosen theme.
    - Including an **import map** for JS dependencies.
- [main.js](/main.js)
    - The app logic in JS.
    - This loads dependencies, constructs the app and then mounts it on an element in the body.
- [styles.css](/styles.css)
    - Some minimal CSS styling, to match the Vue CLI quickstart.

### Logo

The [assets](/assets/) directory was set up with a logo, to match the structure and appearance of the Vue CLI quickstart app. But you can delete that on your copy of this template.
