export const ADD_ENTERED_PATH = 'ADD_ENTERED_PATH';
export const CLEAR_ENTERED_PATH = 'CLEAR_ENTERED_PATH';

export function setEnteredPath(enteredPath) {
  return {
    type: ADD_ENTERED_PATH,
    enteredPath
  }
}

export function clearEnteredPath(){
  return {type: CLEAR_ENTERED_PATH}
}