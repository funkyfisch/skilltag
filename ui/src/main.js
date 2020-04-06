import Vue from "vue";
import Buefy from "buefy";
import VueCookie from "vue-cookie";
/* Icon importing section */
import {
  faPlus,
  faTag,
  faExclamationCircle,
  faSyncAlt
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "buefy/dist/buefy.css";

library.add(faPlus, faTag, faExclamationCircle, faSyncAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultIconComponent: "font-awesome-icon",
  defaultContainerElement: "#app"
});

Vue.use(VueCookie);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
