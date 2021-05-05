/**
 * Main app module.
 */
import PButton from "primevue/button";
import { createApp } from "vue";

const app = createApp({
  components: {
    PButton
  },
  data() {
    return {
      name: "developer",
    };
  },
  template: `
    <h2>Greeting</h2>
    <p>Hello, {{ name }}!</p>

    <PButton label="Submit"></PButton>

    <br>
    <br>

    <PButton label="Submit" icon="pi pi-check" iconPos="right"></PButton>
  `,
});

app.mount("#app");
