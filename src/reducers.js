import { combineReducers } from 'redux';
import router from './components/withMyRouter/reducer';

const allReducers = combineReducers({
  router
});

export default allReducers;