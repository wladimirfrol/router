import {
  ADD_FIRST_NAME,
  ADD_SECOND_NAME,
  RESET
} from './consts'

const initialState = {
  firstName: '',
  secondName: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      };
    case ADD_SECOND_NAME:
      return {
        ...state,
        secondName: action.payload
      };
      case RESET:
        return initialState;
    default:
      return state;
  }
}