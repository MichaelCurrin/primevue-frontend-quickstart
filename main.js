/**
 * Main app module.
 */
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import { createApp } from "vue";

const app = createApp({
  components: {
    'p-button': Button,
    'p-inputtext': InputText,
  },
  data() {
    return {
      name: "developer",

      value1: "",
      value2: "",
    };
  },
});

app.mount("#app");
