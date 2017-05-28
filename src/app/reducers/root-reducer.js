import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import listsReducer from './lists-reducer';
import userReducer from './user-reducer';

const rootReducer = combineReducers({
  form,
  lists: listsReducer,
  user: userReducer
});

export default rootReducer;
