import Vue from "vue";
import Vuelidate from "vuelidate";
import Paginate from "vuejs-paginate";
import VueMeta from "vue-meta";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dateFilter from "@/filters/date.filter.js";
import currencyFilter from "@/filters/currency.filter.js";
import localizeFilter from "@/filters/localize.filter.js";
import tooltipDirective from "@/directives/tooltip.directive.js";
import messagePlugin from "@/utils/message.plugin.js";
import titlePlugin from "@/utils/title.plugin.js";
import Loader from "@/components/app/Loader.vue";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(titlePlugin);
Vue.use(Vuelidate);
Vue.use(VueMeta);
Vue.filter("date", dateFilter);
Vue.filter("currency", currencyFilter);
Vue.filter("localize", localizeFilter)
Vue.directive("tooltip", tooltipDirective)
Vue.component("Loader", Loader);
Vue.component('Paginate', Paginate)


firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "vue-crm-30bf1.firebaseapp.com",
  databaseURL: "https://vue-crm-30bf1.firebaseio.com",
  projectId: "vue-crm-30bf1",
  storageBucket: "vue-crm-30bf1.appspot.com",
  messagingSenderId: "171836746749",
  appId: "1:171836746749:web:5206e3627b082f4cff8794",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: function (h) {
        return h(App);
      },
    }).$mount("#app");
  }
});