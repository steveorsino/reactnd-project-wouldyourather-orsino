import { RECEIVE_USERS, VOTE_USER, ADD_QUESTION_USER } from '../actions/users';

export default function users (state={}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case VOTE_USER :
    
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }

    case ADD_QUESTION_USER : 
      return {
        ...state,
      }
    default :
      return state
  }
}