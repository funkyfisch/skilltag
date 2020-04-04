import Vue from "vue";
import Buefy from "buefy";
import Vuebar from "vuebar";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import "buefy/dist/buefy.css";

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: "fas",
  defaultContainerElement: "#app"
});
Vue.use(Vuebar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
