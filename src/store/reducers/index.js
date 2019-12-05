import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import sprintReducer from './sprintReducer';

export default combineReducers({
  storyReducer,
  sprintReducer
});
