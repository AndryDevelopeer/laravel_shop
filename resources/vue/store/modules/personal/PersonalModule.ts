import MutationInterface from "../personal/interfaces/PersonalMutationInterface";
import ActionInterface from "../personal/interfaces/PersonalActionInterface";
import StateInterface from "../personal/interfaces/PersonalStateInterface";
import ModuleInterface from "../ModuleInterface";
import router from '../../../router'
import axios from 'axios'

const state: StateInterface = {
    user: null
}

const mutations: MutationInterface = {
    setUser(state, user) {
        state.user = user
    }
}

const actions: ActionInterface = {
    getUserData(context) {
        axios.get('/api/personal', {
            headers: {'Access-Token': window.localStorage.getItem('accessToken')}
        })
            .then(response => {
                const result = response.data
                result.success
                    ? context.commit('setUser', result.data)
                    : context.dispatch('checkRefresh')
            })
            .catch(() => {
                router.replace('auth')
            })
    },
}

const PersonalModule: ModuleInterface = {
    state: state,
    mutations: mutations,
    actions: actions
}

export default PersonalModule