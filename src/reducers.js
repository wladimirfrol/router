import { combineReducers } from 'redux';
import router from './components/App/reducer';

const allReducers = combineReducers({
  router
});

export default allReducers;