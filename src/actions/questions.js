import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const SAVE_QUESTION = 'SAVE_QUESTION';

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

export function saveUserQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
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



export function handleSaveQuestion(question, userCb) {
  return (dispatch) => {
    console.log('IN ACTION: ', question)
    return saveQuestion(question)
      .then((formattedQuestion) => {
        console.log('FORMATTED QUESTION: ', formattedQuestion)
        dispatch(saveUserQuestion(formattedQuestion))
        return userCb(formattedQuestion)
      })
      // .then((formattedQuestion) => {
        
        
      // })
  }
}


