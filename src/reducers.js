import { combineReducers } from 'redux';
import counter from './components/Counter/reducer';
import form from './components/Form/reducer';
import posts from './components/Axios/reduser';

const allReducers = combineReducers({
  counter,
  form,
  posts
});

export default allReducers;