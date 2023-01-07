import MutationInterface from "./interfaces/AuthMutationInterface";
import ActionInterface from "./interfaces/AuthActionInterface";
import StateInterface from "./interfaces/AuthStateInterface";
import ModuleInterface from "../ModuleInterface";
import router from "../../../router";
import axios from "axios";

const state: StateInterface = {
    form: {
        email: null,
        password: null,
    },
    passwordVisible: false,
    errors: {
        email: null,
        password: null
    },
    client: null,
    successCheckRefresh: false
}

const mutations: MutationInterface = {
    logout(state): void {
        window.localStorage.removeItem('accessToken')
        window.localStorage.removeItem('refreshToken')
        state.client = null
        router.replace('/')
    },
    setTokens(state, data): void {
        window.localStorage.setItem('accessToken', data.accessToken)
        window.localStorage.setItem('refreshToken', data.refreshToken)
        state.successCheckRefresh = true
        state.form.password = null
        state.form.email = null
    },
    setErrors(state, errors): void {
        state.errors.password = errors.password
        state.errors.email = errors.email
        state.successCheckRefresh = false
    }
}

const actions: ActionInterface = {
    logout({commit}): void {
        commit('logout')
    },
    login(context): void {
        axios.post('/api/auth/login', context.state.form)
            .then(response => {
                const result = response?.data
                result?.success
                    ? context.commit('setTokens', result.data)
                    : context.commit('setErrors', result.errors)
            })
            .then(() => {
                router.replace('personal')
            })
            .catch((error) => {
                context.commit('setErrors', error.response.data.errors)
            })
    },
    checkRefresh(context): void {
        axios.post('/api/auth/check-refresh-token',
            {'refreshToken': window.localStorage.getItem('refreshToken')})
            .then(response => {
                const result = response.data
                result.success
                    ? context.commit('setTokens', result.data)
                    : router.replace('auth')
            })
            .then(() => {
                if (!context.state.successCheckRefresh || !window.localStorage.getItem('accessToken')) return;
                context.dispatch('getUserData')
            })
            .catch((error) => {
                console.log('что то пошле не так');
            })
    }
}

const AuthModule: ModuleInterface = {
    state: state,
    mutations: mutations,
    actions: actions,
}

export default AuthModule