export interface AuthenticationState {
  token: String;
}

function state(): AuthenticationState {
  return {
      token: '',
  }
}

export default state;