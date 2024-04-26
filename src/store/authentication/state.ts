import * as Cookie from 'js-cookie'
export interface AuthenticationState {
  token: String;
}

function state(): AuthenticationState {

  return {
      token: Cookie.default.get('jwt_main') || '',
  }
}

export default state;