import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveQuestionAnswer(id, authedUser, answer) {
  return (dispatch) => {

    return saveQuestionAnswer({ authedUser, id, answer })
      .then((res)=>{console.log('The Res: ', res)});
  }
}