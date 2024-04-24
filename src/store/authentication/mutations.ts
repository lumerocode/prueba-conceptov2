import type { MutationTree } from 'vuex';
import type { AuthenticationState } from './state';


const mutation: MutationTree<AuthenticationState> = {
    SET_TOKEN( state: AuthenticationState , payload: string) {
        state.token = payload
    }
}


export default mutation;