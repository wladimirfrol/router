import {
  HANDLE_URL,
  ON_GO_BACK,
  ON_GO_FORWARD
} from './consts';

const initialState = {
  historyIndex: 0, // = history.length
  history: ['/'],
  url: '/'
}

export default function(state = initialState, action) {

  switch(action.type) {
    case HANDLE_URL:
      return {
        historyIndex: state.history.length,
        url: action.payload,
        history: [
          ...state.history,
          action.payload
        ]
      };
    case ON_GO_BACK:
      return {
        ...state,
        historyIndex: state.historyIndex - 1,
        url: state.history[state.historyIndex - 1]
      };
    case ON_GO_FORWARD:
      return {
        ...state,
        historyIndex: state.historyIndex + 1,
        url: state.history[state.historyIndex + 1]
      };
    default:
      return state;
  }
}