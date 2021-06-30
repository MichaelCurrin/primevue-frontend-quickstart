# Development

Notes for developers on this template.

I didn't have an issue on my Vue Frontend Quickstart, but because of the nature of PrimeVue components I had to use import maps to stop imports from breaking.

Here are my notes around that.


## Adding supporting imports

The PrimeVue `Button` import is from `primevue/button`.

That then relies on the `primevue/utils` and `primevue/ripple` imports.

- [button.esm.js](https://unpkg.com/primevue@3.4.0/button/button.esm.js) on the UNPKG CDN.
    ```javascript
    import Ripple from 'primevue/ripple';
    import { resolveDirective, withDirectives, openBlock, createBlock, renderSlot, createCommentVNode, createVNode, toDisplayString } from 'vue';
    
    // ...
    ```

That works fine in Node. 

But, when loading in the browser, the import for `primevue/ripple` appears as an external package and is not known to the browser. (It it was `./primevue/ripple` then it could have worked, loading from the same CDN.)

### Import maps with UNPKG

An effective way to fix this was to add to the `importmaps` section in the [index.html](/index.html) page. So now import for `primevue/ripple` in the external script is mapped to a CDN URL.

So when the `Button` is loaded from the CDN, the internal imports are done correctly.

### Import maps with JPSM

I set that up by hand. But if you use JSPN as you CDN instead, you can use the service's Import Map Generator.

In this case, I entered `primevue/button` as a package and got the following generated import map:

```html
<script type="importmap">
{
"imports": {
  "primevue/button": "https://ga.jspm.io/npm:primevue@3.5.1/button/button.esm.js"
},
"scopes": {
  "https://ga.jspm.io/npm:primevue@3.5.1/": {
    "primevue/ripple": "https://ga.jspm.io/npm:primevue@3.5.1/ripple/ripple.esm.js",
    "primevue/utils": "https://ga.jspm.io/npm:primevue@3.5.1/utils/utils.esm.js",
    "vue": "https://ga.jspm.io/npm:vue@2.6.14/dist/vue.runtime.esm.js"
  }
}
}
</script>
```

That uses Vue 2. Even if I added Vue 3 as a dependency explicitly, Vue 2 is still used under scopes.

It looks like using PrimeVue 3.5.1 means also using Vue 2. Though in my own import map I set up Vue 3 and use that for my JS script. So maybe that is okay.


## Import maps polyfill

Note that import maps are not widely supported yet. So a **polyfill** was used in [index.html](/index.html), allowing the app to run on Firefox.

See [Import maps][] cheatsheet for more info.

[Import maps]: https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/javascript/general/modules/import-maps.html
