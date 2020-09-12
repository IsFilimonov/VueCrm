import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth"
import info from "./info"
import category from "./category"
import record from "./record"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
    async fetchCurrency() {
      const key = process.env.VUE_APP_FIXER // eslint-disable-line no-unused-vars
      // Временно отключаем из-за того, что после deploy на Firebase hosting приложение, запущенное на HTTPS блокирует запросы через HTTP
      // TODO: найти иной API получения курсов валют. (Банк России http://www.cbr.ru/development/SXML/)
      // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${key}&symbols=USD,EUR,RUB`)
      return {
        "success": true,
        "timestamp": 1599471545,
        "base": "EUR",
        "date": "2020-09-07",
        "rates": {
          "USD": 1.182991,
          "EUR": 1,
          "RUB": 89.592645
        }
      }

      // return await res.json()
    }
  },
  modules: {
    auth,
    info,
    category,
    record
  }
});