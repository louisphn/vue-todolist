import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";

library.add(faXmark);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
