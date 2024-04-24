import { type Module } from 'vuex';
import { type StateInterface } from '../index';

import state, { type AuthenticationState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const AuthenticationModule: Module<AuthenticationState, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}


export default AuthenticationModule;