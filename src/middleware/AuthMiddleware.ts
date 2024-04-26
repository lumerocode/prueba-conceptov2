import { useAuthentication } from '@/composables/useAuthentication';
import type { NavigationGuardNext, RouteLocationNormalizedLoaded } from 'vue-router';

export default function authMiddleware(to: RouteLocationNormalizedLoaded, from: RouteLocationNormalizedLoaded, next: NavigationGuardNext): void | false | Promise<void | false> {
  const { getToken } = useAuthentication()
  const token = getToken.value
  const isAuthenticated = token ? true : false
  if (!isAuthenticated) {
    next(`/login?redirect_to=${to.path}`)
  } else {
    next() 
  }
}
