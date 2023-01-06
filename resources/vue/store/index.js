import vuex from "vuex";
import auth from './modules/auth/AuthModule'

const store = new vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth
    }
})

export default store