import personal from './modules/personal/PersonalModule'
import auth from './modules/auth/AuthModule'
import vuex from "vuex";

const store = new vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth, personal
    }
})

export default store