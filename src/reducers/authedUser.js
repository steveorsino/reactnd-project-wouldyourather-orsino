import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser (state = '', action) {
  const authedUser = action.authedUser
  switch (action.type) {
    case SET_AUTHED_USER :
      return authedUser
    default :
      return state
  }
}