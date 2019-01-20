import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import enteredPath from './enteredPath'

export default combineReducers ({
  authedUser,
  users,
  questions,
  enteredPath
})