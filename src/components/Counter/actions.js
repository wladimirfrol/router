import {
  INCREMENT,
  DECREMENT,
  RESET_COUNTER
} from './consts';

export const onIncrement = () => ({
  type: INCREMENT
})

export const onDecrement = () => ({
  type: DECREMENT
})

export const onResetCounter = () => ({
  type: RESET_COUNTER
})