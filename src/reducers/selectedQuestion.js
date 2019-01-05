import { SET_SELECTED_QUESTION } from '../actions/selectedQuestion';

export default function selectedQuestion(state = '', action) {
  switch (action.type) {
    case SET_SELECTED_QUESTION : 
      console.log('In reducer', action);
      return {
        
      }
    default :
      return state
  }
}