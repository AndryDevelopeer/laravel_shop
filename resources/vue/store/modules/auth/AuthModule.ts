import MutationInterface from "./interfaces/AuthMutationInterface";
import ActionInterface from "./interfaces/AuthActionInterface";
import StateInterface from "./interfaces/AuthStateInterface";
import ModuleInterface from "../ModuleInterface";
import router from "../../../router";
import axios from "axios";

const AUTH_URL = 'http://localhost:4000'

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
    successCheckRefresh: false,
    successAccess: false,
}

const mutations: MutationInterface = {
    logout(state): void {
        document.cookie = "accessToken=''; max-age=0; path=/;"
        window.localStorage.removeItem('refreshToken')
        state.client = null
        router.replace('/')
    },
    setToken(state, token): void {
        document.cookie = "accessToken=" + token + "; max-age=900; path=/;"
        state.successCheckRefresh = true
        state.successAccess = true
    },
    setTokens(state, tokens): void {
        document.cookie = "accessToken=" + tokens.accessToken + "; max-age=900; path=/;"
        window.localStorage.setItem('refreshToken', tokens.refreshToken)
        state.successAccess = true
        state.form.password = null
        state.form.email = null
    },
    setErrors(state, errors): void {
        state.errors.password = errors.password
        state.errors.email = errors.email
        state.successCheckRefresh = false
    },
    setAuthErrors(state, errors): void {
        errors.forEach(el => {
            state.errors[el.param] = el.value;
        })
    }
}

const actions: ActionInterface = {
    logout({commit}): void {
        commit('logout')
    },
    registration(context) {
        axios.post(AUTH_URL + '/api/registration', context.state.form)
            .then(response => {
                console.log(response);
            })
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
                if (!context.state.successAccess) return;
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
                    ? context.commit('setToken', result.data.accessToken)
                    : router.replace('auth')
            })
            .then(() => {
                if (!context.state.successCheckRefresh || !context.state.successAccess) return;
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