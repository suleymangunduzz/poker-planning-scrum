import { combineReducers } from 'redux';
import storyReducer from './storyReducer';
import sprintReducer from './sprintReducer';
import voteReducer from './voteReducer';

export default combineReducers({
  storyReducer,
  sprintReducer,
  voteReducer
});
