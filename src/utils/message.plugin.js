/* eslint-disable */
// импортируем принудительно, иначе eslint ругается
// import M from "materialize-css";
export default {
    install(Vue, options) {
        Vue.prototype.$message = function (html) {
            M.toast({
                html
            })
        }

        Vue.prototype.$error = function (html) {
            M.toast({
                html: `[Ошибка]: ${html}`
            })
        }
    }
}