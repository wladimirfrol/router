import {
  ADD_FIRST_NAME,
  ADD_SECOND_NAME,
  RESET
} from './consts'

export const onAddFirstName = (newFirstName) => ({
  type: ADD_FIRST_NAME,
  payload: newFirstName
});

export const onAddSecondName = (newSecondName) => ({
  type: ADD_SECOND_NAME,
  payload: newSecondName
});

export const onReset= () => ({
  type: RESET
});