import type { ActionTree } from 'vuex';
import type { AuthenticationState } from './state';
import type { StateInterface } from '../index';
import * as Cookie from 'js-cookie'


const actions: ActionTree<AuthenticationState, StateInterface> = {
    initSessionMain( { commit }, {token}  ) {
        Cookie.default.set("jwt_main", token)
        commit('SET_TOKEN', token)
    }
}



export default actions;