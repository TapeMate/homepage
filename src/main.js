import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Popup from "./components/dev/Popup.vue";

// createApp(App).use(router).mount("#app");
const app = createApp(App).use(router);
app.component("Popup", Popup);
app.mount("#app");
