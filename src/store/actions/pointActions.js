import axios from 'axios';
import {
ADD_POINT_TO_STORY_REQUEST,
ADD_POINT_TO_STORY_SUCCESS,
ADD_POINT_TO_STORY_FAILURE
} from '../constants';

export const addPointToStory = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_POINT_TO_STORY_REQUEST
    });

    let res = await axios.get('http://localhost:3005/data');

    dispatch({
      type: ADD_POINT_TO_STORY_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: ADD_POINT_TO_STORY_FAILURE,
      payload: 'error'
    });
  }
};
