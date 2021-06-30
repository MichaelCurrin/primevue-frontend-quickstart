/**
 * Main app module.
 */
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import { createApp } from "vue";

const app = createApp({
  components: {
    "p-button": Button,
    "p-inputtext": InputText,
  },
  data() {
    return {
      name: "developer",

      value1: "",
      value2: "",
    };
  },
  template: `
    <h2>Greeting using plain Vue</h2>
    <p>Hello, {{ name }}!</p>

    <h2>PrimeVue Button component</h2>

    <h3>Basic</h3>
    <p-button label="Submit"></p-button>

    <br />
    <br />

    <h3>Check</h3>
    <p-button label="Submit" icon="pi pi-check" iconPos="right"></p-button>

    <br />
    <br />

    <h2>PrimeVue InputText component</h2>

    <h3>Basic</h3>
    <p-inputtext type="text" v-model="value1"></p-inputtext>
    <br />
    <span>{{ value1 }}</span>

    <br />

    <h3>Seach bar with icon</h3>
    <span class="p-input-icon-left">
      <i class="pi pi-search"></i>
      <p-inputtext type="text" v-model="value2" placeholder="Search"></p-inputtext>
    </span>

    <br />

    <span>{{ value2 }}</span>
  `,
});

app.mount("#app");
