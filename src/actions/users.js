export const RECEIVE_USERS = 'RECEIVE_USERS';
export const VOTE_USER = 'VOTE_USER';
export const ADD_QUESTION_USER = 'ADD_QUESTION_USER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function handleUserVote(qid, authedUser, answer) {
  return {
    type: VOTE_USER,
    qid,
    authedUser,
    answer
  }
}

export function handleUserAddQuestion (formattedQuestion, authedUser) {
  return {
    type: ADD_QUESTION_USER,
    formattedQuestion,
    authedUser
  }
}