import {
  GET_POSTS,
  RESET
} from './consts'

export const onGetPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts
});

export const onReset= () => ({
  type: RESET
});