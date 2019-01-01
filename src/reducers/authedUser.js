import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser (state = '', action) {
  switch (action.type) {
    case SET_AUTHED_USER :
      console.log('In reducer', action)
      return {
        authedUser: action.authedUser
      }
    default :
      return state
  }
}