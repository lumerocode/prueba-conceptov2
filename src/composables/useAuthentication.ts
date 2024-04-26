import { computed, onMounted } from 'vue'
import { useStore } from '@/store'

export const useAuthentication = () => {
  const store = useStore()

   return {
    //State
    token: computed( () => store.state.authentication.token ),

    // Getters
    getToken: computed<string>( () => store.getters['authentication/getToken']),

    // Actions
    initSessionMain: (token: string) => store.dispatch('authentication/initSessionMain', { token }),

    // Mutations
    setToken: (token: string ) => store.commit('authentication/SET_TOKEN', token)
  }
}