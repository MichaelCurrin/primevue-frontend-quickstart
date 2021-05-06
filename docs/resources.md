# Resources

## How I got started with PrimeVue

I found this [PrimeVue 3 released][] blog post which announced PrimeVue 3 launched and added support for Vue 2. This explains why I had issues using PrimeVue 2 and Vue 3. See

[PrimeVue 3 released]: https://dev.to/cagataycivici/primevue-3-0-0-released-for-vue-3-with-60-ui-components-featuring-bootstrap-material-fluent-ui-and-custom-themes-348i

I used `demo.html` page from the [button][] directory on the CDN as a starting point for this app.

[button]: https://unpkg.com/browse/primevue@2.2.3/components/button/


## Node alternatives for PrimeVue

I found it a hassle and several days of hacking away in order to choose the the correct versions of ES Modules libraries, to get imports to work for Vue and PrimeVue and to set up import maps so to not break. So, while this project does demonstrate how to use a bit of code to get PrimeVue styling on a Vue app without Node, there might be more obstacles like this which means the Node approach might be easier.

To set up PrimeVue for a Node app:

- See the official quickstart project, with Vue and PrimeVue already integrated.
    - [![primefaces - primevue-quickstart](https://img.shields.io/static/v1?label=primefaces&message=primevue-quickstart&color=blue&logo=github)](https://github.com/primefaces/primevue-quickstart)
- See my Vue quickstart below and follow the steps on the PrimeVue site's Quickstart guide to add PrimeVue to your site.
    - [![MichaelCurrin - vue-quickstart](https://img.shields.io/static/v1?label=MichaelCurrin&message=vue-quickstart&color=blue&logo=github)](https://github.com/MichaelCurrin/vue-quickstart)
