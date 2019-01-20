import { ADD_ENTERED_PATH } from '../actions/enteredPath'

export default function enteredPath(state = '', action) {
  const enteredPath = action.enteredPath
  switch (action.type) {
    case ADD_ENTERED_PATH:
      return enteredPath

    default:
      return state
  }
}