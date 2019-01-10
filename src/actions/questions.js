import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveQuestionAnswer(qid, authedUser, answer) {
  return (dispatch) => {
    console.log('IN ACTION: ', qid)
    return saveQuestionAnswer({ authedUser, qid, answer })
      .then((res)=>{console.log('The Res: ', res)});
  }
}