import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function updateQuestion(qid, authedUser, answer) {
  console.log('IN updateQuestion: ',qid, authedUser, answer)
  return {
    type: UPDATE_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function handleSaveQuestionAnswer(qid, authedUser, answer, userCb) {
  return (dispatch) => {
    console.log('IN ACTION: ', qid)
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => dispatch(updateQuestion(qid, authedUser, answer)))
      .then(() => userCb(qid, authedUser, answer));
  }
}