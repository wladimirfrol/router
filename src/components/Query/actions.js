import {
  QUERY_GET_ELEMENTS,
  RESET_QUERY_STATE
} from './consts'

export const onGetElements = (elements) => ({
  type: QUERY_GET_ELEMENTS,
  payload: elements
});

export const onResetQueryState= () => ({
  type: RESET_QUERY_STATE
});