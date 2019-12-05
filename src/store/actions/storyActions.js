import axios from 'axios';

import { getSprint } from '../actions/sprintActions';
import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE
} from '../constants';

export const getStories = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_STORIES_REQUEST
    });

    await dispatch(getSprint());

    const stories = getState().sprintReducer.data.stories;

    dispatch({
      type: GET_STORIES_SUCCESS,
      payload: stories
    });
  } catch (e) {
    dispatch({
      type: GET_STORIES_FAILURE,
      payload: 'error'
    });
  }
};
