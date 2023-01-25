import MutationInterface from "./interfaces/AuthMutationInterface";
import ActionInterface from "./interfaces/AuthActionInterface";
import StateInterface from "./interfaces/AuthStateInterface";
import ModuleInterface from "../ModuleInterface";
import router from "../../../router";
import axios from "axios";

const AUTH_URL = 'http://localhost:4000/api'
const $axios = axios.create({
    withCredentials: true,
    baseURL: AUTH_URL
})

$axios.interceptors.request.use((config) => {
    config.headers.Authorization = localStorage.getItem('accessToken');
    return config;
});

$axios.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(AUTH_URL + '/refresh', {
                    withCredentials: true,
                });
                localStorage.setItem('accessToken', response.data.accessToken);
                return $axios.request(originalRequest);
            } catch (error) {
            }
        }
        throw error;
    }
);

const state: StateInterface = {
    authentication: {
        form: {
            login: null,
            password: null,
        },
        errors: {
            login: null,
            password: null
        },
    },
    registration: {
        form: {
            login: null,
            password: null,
            confirm: null
        },
        errors: {
            login: null,
            password: null,
            confirm: null
        }
    },
    user: null,
    successCheckRefresh: false,
    successAccess: false,
}

const mutations: MutationInterface = {
    logout(state): void {
        document.cookie = "refreshToken=''; max-age=0; path=/;"
        window.localStorage.removeItem('accessToken')
        state.user = null
        router.replace('/')
    },
    clearErrors(state, data: { form: string, field: string }): void {
        state[data.form].errors[data.field] = null
    },
    setUser(state, user) {
        state.user = user
    },
    setToken(state, token: string): void {
        window.localStorage.setItem('accessToken', token)
        state.successCheckRefresh = true
        state.successAccess = true
    },
    setTokens(state, tokens: { accessToken: string, refreshToken: string }): void {
        window.localStorage.setItem('accessToken', tokens.accessToken)
        state.authentication.form.password = null
        state.authentication.form.login = null
        state.successAccess = true
    },
    setErrors(state, data: { form: string, errors: { login: [], password: [], confirm: [] | null } }): void {
        state[data.form].errors.login = data.errors.login
        state[data.form].errors.password = data.errors.password
        if (data.errors.confirm) state[data.form].errors.confirm = data.errors.confirm
        state.successCheckRefresh = false
    },
    setAuthErrors(state, errors: { param, value }[]): void {
        errors.forEach(el => {
            state.errors[el.param] = el.value;
        })
    }
}

const actions: ActionInterface = {
    logout({commit}): void {
        commit('logout')
    },
    clearErrors({commit}, data: { form: string, field: string }) {
        commit('clearErrors', data)
    },
    registration(context) {
        $axios.post('/registration', context.state.registration.form)
            .then(response => {
                const result = response?.data
                result?.success
                    ? context.commit('setUser', result.data.user)
                    : context.commit('setErrors', {form: 'registration', errors: result.errors})
            })
            .catch((error) => {
                context.commit('setErrors', {form: 'registration', errors: error.response.data.errors})
            })
    },
    login(context): void {
        $axios.post(AUTH_URL + '/login', context.state.authentication.form)
            .then(response => {
                const result = response?.data
                if (result?.success) {
                    context.commit('setTokens', result.data)
                } else {
                    context.commit('setErrors', {form: 'authentication', errors: result.errors})
                }
            })
            .then(() => {
                if (!context.state.successAccess) return;
                router.replace('personal')
            })
            .catch((error) => {
                context.commit('setErrors', {form: 'authentication', errors: error.response.data.errors})
            })
    },
    checkRefresh(context): void {
        $axios.post(AUTH_URL + '/check-refresh-token',
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