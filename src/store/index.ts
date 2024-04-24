import { Store, createStore, useStore as baseUseStore } from 'vuex';
import AuthenticationModule from './authentication';
import { type AuthenticationState } from './authentication/state';
import type { InjectionKey } from 'vue';


export interface StateInterface {
  authentication: AuthenticationState
}

export const key: InjectionKey<Store<StateInterface>> = Symbol()

export default createStore<StateInterface>({
  modules: {
    authentication: AuthenticationModule
  }
})

export function useStore () {
  return baseUseStore(key)
}