# About


## What is PrimeVue?

> The Most Complete Vue UI Component Library

See my [PrimeVue resources][] page to learn more.

It's easy to change your theme when using PrimeVue. Just change the path for the `.css` import to use Material UI, Bootstrap, etc. and your preferred color scheme. All your HTML and JS can stay the same. The same classes are used for a different theme and you don't even have to add classes yourself because PrimeVue components handle that for you.


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


## Structure

### Minimum

You could even mix your JS and CSS into one HTML file, if you wanted to only have one file. But you'll probably want to separate those for easier management.

A PrimeVue / Vue frontend project only needs 3 files to run, as set up in this template:

- [index.html](/index.html)
    - HTML homepage.
    - Includes CSS around PrimeVue, including a chosen theme.
    - Includes use of an **import map** with a polyfill, to make JS imports easier.
- [assets/js/main.js](/assets/js/main.js)
    - The app logic as a JS script.
    - This loads dependencies, constructs the app and then mounts it on an element in the body.
- [assets/css/styles.css](/assets/css/styles.css)
    - Some minimal CSS styling, to match the Vue CLI quickstart.


[PrimeVue resources]: https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/primevue/
[ES Modules]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/es-modules.html
