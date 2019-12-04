import {
  ADD_POINT_TO_STORY_REQUEST,
  ADD_POINT_TO_STORY_SUCCESS,
  ADD_POINT_TO_STORY_FAILURE,
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE
  } from '../constants';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POINT_TO_STORY_REQUEST:
      return { ...state, mainSlider: { ...state.mainSlider, isLoading: true, error: null } };
    case ADD_POINT_TO_STORY_SUCCESS:
      return { ...state, mainSlider: { data: action.payload, isLoading: false, error: null } };
    case ADD_POINT_TO_STORY_FAILURE:
      return { ...state, mainSlider: { ...state.mainSlider, isLoading: false, error: action.payload } };

    case GET_STORIES_REQUEST:
      return { ...state, data: {}, isLoading: true , error: null};
    case GET_STORIES_SUCCESS:
        return { ...state, data: action.payload, isLoading: false , error: null};
    case GET_STORIES_FAILURE:
        return { ...state, data: {}, isLoading: false , error: action.payload};

    default:
      return state;
  }
};
