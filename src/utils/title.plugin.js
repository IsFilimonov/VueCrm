import localeFilter from "@/filters/localize.filter.js";

export default {
    install(Vue) {
        Vue.prototype.$title = function (titleKey) {
            const appName = process.env.VUE_APP_TITLE

            return `${localeFilter(titleKey)} | ${ appName }`
        }
    }
}