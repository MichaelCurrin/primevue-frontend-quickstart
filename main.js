/**
 * Main app module.
 */
import { createApp } from "https://unpkg.com/vue@3.0.7/dist/vue.esm-browser.js";

const app = createApp({
  components: {
  },
  data() {
    return {
      name: "developer",
    };
  },
  template: `
    <h2>Greeting</h2>
    <p>Hello, {{ name }}!</p>
  `,
});

app.mount("#app");
