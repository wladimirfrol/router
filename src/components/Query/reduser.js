import {
  QUERY_GET_ELEMENTS,
  RESET_QUERY_STATE
} from './consts'

export default function(state = null, action) {
  switch(action.type) {
    case QUERY_GET_ELEMENTS:
      return [...action.payload];
    case RESET_QUERY_STATE:
      return null;
    default:
      return state;
  }
}