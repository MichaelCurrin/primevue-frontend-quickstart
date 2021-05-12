# Notes

I tried doing imports like this, without an import map.

```javascript
import "https://unpkg.com/primevue@3.4.0/utils/utils.esm.js?module"
import "https://unpkg.com/primevue@3.4.0/ripple/ripple.esm.js?module";
import Button from "https://unpkg.com/primevue@3.4.0/button/button.esm.js?module";
import InputText from "https://unpkg.com/primevue@3.4.0/inputtext/inputtext.esm.js?module";
```

The Ripple one looks for utils on `latest` unfortunately instead of `3.4.0`. And latest at `2.X.X` now. So this doesn't work.
