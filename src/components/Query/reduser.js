import {
  GET_POSTS,
  RESET
} from './consts'

export default function(state = null, action) {
  switch(action.type) {
    case GET_POSTS:
      return [...action.payload];
    case RESET:
      return null;
    default:
      return state;
  }
}