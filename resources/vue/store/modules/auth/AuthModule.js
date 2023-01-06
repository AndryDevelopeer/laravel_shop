import router from "../../../router";
import axios from "axios";

const AuthModule = {
    state: {
        form: {
            email: null,
            password: null,
        },
        passwordVisible: false,
        errors: {
            email: null,
            password: null
        }
    },
    mutations: {
        logout() {
            document.cookie = "accessToken=;max-age=0;"
            window.localStorage.removeItem('refreshToken')
            router.replace('/')
        },
        setTokens(state, data) {
            document.cookie = "accessToken=" + data.accessToken + "; max-age=900; path=/"
            window.localStorage.setItem('refreshToken', data.accessToken)
        },
        setErrors(state, errors) {
            state.errors.email = errors.email
            state.errors.password = errors.password
        },
        clearForm(state) {
            state.form.email = null
            state.form.password = null
        }
    },
    actions: {
        logout({commit}) {
            commit('logout')
        },
        login(context) {
            axios.post('/api/auth/login', context.state.form)
                .then(response => {
                    const result = response?.data
                    if (result?.success) {
                        context.commit('setTokens', result.data)
                        context.commit('clearForm')
                        router.replace('/personal')
                    } else {
                        context.commit('setErrors', result.errors)
                    }
                })
                .catch((error) => {
                    context.commit('setErrors', error.response.data.errors)
                })
        },
        checkRefresh({commit}) {

        }
    },
}

export default AuthModule