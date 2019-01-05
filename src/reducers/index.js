import { combineReducers } from 'redux';
import users from './users';
import questions from './questions';
import authedUser from './authedUser';
import selectedQuestion from './selectedQuestion';

export default combineReducers ({
  selectedQuestion,
  authedUser,
  users,
  questions,
})