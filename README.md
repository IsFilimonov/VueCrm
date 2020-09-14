# Vue CRM SPA

This Vue.JS SPA ([DEMO 1](https://vue-crm-30bf1.web.app/) on the Firebase hosting or [DEMO 2](https://vue-crm-30bf1.firebaseapp.com/)) was created in order to demonstrate the possible skills of frontend development. The development was performed according to the [lessons plan](https://www.youtube.com/playlist?list=PLqKQF2ojwm3njNpksFCi8o-_c-9Vva_W0) of [Vladilen Minin](https://www.youtube.com/c/VladilenMinin/featured).
As a result, we have: a cash accounting application within different categories, currency exchange rate analysis, history of transactions with the schedule, planning by categories, fixing income/expenses and more.

## Ecosystem and stack

- [`Vue.Js`](https://vuejs.org/)(v2.x): The Progressive JavaScript Framework;
- [`vue-router`](https://router.vuejs.org/): The official router for Vue.js to make building Single Page Applications;
- [`vuex`](https://vuex.vuejs.org/): A state management pattern + library for Vue.js applications;
- [`vuelidate`](https://vuelidate.js.org/): Simple, lightweight model-based validation for Vue.js 2.0;
- [`chart.js`](https://vue-chartjs.org/) and [`vue-chartjs`](https://vue-chartjs.org/): Easy and beautiful charts with Chart.js and Vue.js;
- [`vuejs-paginate`](https://www.npmjs.com/package/vuejs-paginate): A Vue.js(v2.x+) component to make pagination;
- [`vue-meta`](https://vue-meta.nuxtjs.org/): HTML Metadata manager for Vue.js;
- [`Firebase`](https://firebase.google.com/): A platform developed by Google for creating mobile and web applications;
- [`materialize-css`](https://materializecss.com/): A modern responsive front-end framework based on Material Design;
- [`lodash`](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras;
- [`Fixer.io API`](https://fixer.io/):A simple and lightweight API for current and historical foreign exchange (forex) rates.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Deploy to the Firebase hosting

```
firebase login
firebase init
firebase deploy
```
**note:** `deploy` after `build`.

### Environment
If you want to play with repo, you will need to create `.env` file in the root and fill variables:
- `VUE_APP_FIREBASE_API_KEY`: for linked Firebase ecosystem;
- `VUE_APP_FIXER`: for linked currency exchange rate from Fixer API;
- `VUE_APP_TITLE`: for the app title.


### ToDos
- [ ] Write up a manual on major operations
- [ ] Finish all objects localization into EN
- [ ] Setup [Firebase env](https://firebase.google.com/docs/functions/config-env) to store environment data
