import vuex from "vuex";
import router from "../router";

const store = new vuex.Store({
    state: {
    },
    mutations: {
        logout() {
            document.cookie = "accessToken=;max-age=0;"
            router.replace('/')
        }
    },
    actions: {
        logout({commit}) {
            commit('logout')
        }
    }
})

export default store