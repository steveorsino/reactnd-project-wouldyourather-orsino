export const SET_SELECTED_QUESTION = 'SET_SELECTED_QUESTION';

export function setSelectedQuestion(questionID) {
  console.log('in SetSelectedQ ACTION', questionID);
  return {
    type: SET_SELECTED_QUESTION,
    questionID,
  }
}