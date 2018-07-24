import { combineReducers } from 'redux';
import counter from './components/Counter/reducer';
import form from './components/Form/reducer';
import elements from './components/Query/reduser';

const allReducers = combineReducers({
  counter,
  form,
  elements
});

export default allReducers;