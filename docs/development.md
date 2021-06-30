# Development

Notes for developers on this template.


## Adding supporting imports

The PrimeVue `Button` import from `primevue/button` and relies on the `primevue/utils` and `primevue/ripple` imports.

This is fine in Node, but when loading in the browser, these give errors because they are not relative imports like `./primevue`.

An effective way to fix this was to add to the `importmaps` section in the [index.html](/index.html) page, such that when `Button` is loaded from the CDN, it sees the other imports as also on the CDN.


## Import maps polyfill

Note that import maps are not widely supported yet. So a **polyfill** was used in [index.html](/index.html), allowing the app to run on Firefox.

See [Import maps][] cheatsheet for more info.

[Import maps]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/import-maps.html
