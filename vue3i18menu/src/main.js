import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import tr from "./locales/tr.json";
import de from "./locales/de.json";

const i18n = createI18n({
    legacy: false,
    locale: "en",
    messages: {
        en,
        tr,
        de
    },
  });
  
  createApp(App).use(i18n).mount("#app");
