import axios from 'axios';
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

    let res = await axios.get('http://localhost:3005/data');

    dispatch({
      type: GET_STORIES_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: GET_STORIES_FAILURE,
      payload: 'error'
    });
  }
};
