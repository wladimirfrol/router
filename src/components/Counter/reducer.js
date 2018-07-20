import {
  INCREMENT,
  DECREMENT,
  RESET_COUNTER
} from './consts';

export default function(state = 0, action) {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
}