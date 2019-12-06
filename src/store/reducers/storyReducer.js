import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE,
  FINISH_STORY_REQUEST,
  FINISH_STORY_FAILURE
  } from '../constants';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES_REQUEST:
      return { ...state, isLoading: true , error: null};
    case GET_STORIES_SUCCESS:
        return { ...state, data: action.payload, isLoading: false , error: null};
    case GET_STORIES_FAILURE:
        return { ...state, isLoading: false , error: action.payload};
    
    case FINISH_STORY_REQUEST:
      return { ...state, isLoading: true , error: null};
    case FINISH_STORY_FAILURE:
        return { ...state, isLoading: false , error: action.payload};

    default:
      return state;
  }
};
