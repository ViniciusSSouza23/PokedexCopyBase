import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/scss/app.scss";
import axios from "axios";

window.axios = axios;

window.axios.defaults.baseURL = "https://pokeapi.co/api/v2";

window.axios.defaults.timeout = 1000 * 60 * 5;

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
