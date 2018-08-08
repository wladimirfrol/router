import {
  HANDLE_URL,
  ON_GO_BACK,
  ON_GO_FORWARD
} from './consts';

export const onHandleUrl = (url) => ({
  type: HANDLE_URL,
  payload: url
});

export const onGoBack = () => ({
  type: ON_GO_BACK
});

export const onGoForward = () => ({
  type: ON_GO_FORWARD
});
