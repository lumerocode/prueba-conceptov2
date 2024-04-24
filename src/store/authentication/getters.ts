import type { GetterTree } from 'vuex';
import type { AuthenticationState } from './state';
import type { StateInterface } from '../index';


const getters: GetterTree<AuthenticationState, StateInterface> = {
    getToken(state) {
        return state.token;
    }
}



export default getters;