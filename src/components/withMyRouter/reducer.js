import {
  HANDLE_URL,
  ON_GO_BACK,
  ON_GO_FORWARD
} from './consts';

const initialState = {
  historyIndex: 0,
  history: ['/'],
  url: '/'
}

export default function(state = initialState, action) {

  switch(action.type) {
    case HANDLE_URL:
      state.history.length = state.historyIndex + 1; // удаление последующей истории при откате назад и изменении
      return {
        historyIndex: state.historyIndex + 1,
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