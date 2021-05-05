/**
 * Main app module.
 */
import Button from "primevue/button";
import { createApp } from "vue";

const app = createApp({
  components: {
    'p-button': Button
  },
  data() {
    return {
      name: "developer",
    };
  },
});

app.mount("#app");
