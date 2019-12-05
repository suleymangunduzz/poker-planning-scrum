import axios from 'axios';
import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE
} from '../constants';

export const getStories = () => async dispatch => {
  try {
    dispatch({
      type: GET_STORIES_REQUEST
    });

    let res = await axios.get('http://localhost:3005/sprint');

    dispatch({
      type: GET_STORIES_SUCCESS,
      payload: res.data.stories
    });
  } catch (e) {
    dispatch({
      type: GET_STORIES_FAILURE,
      payload: 'error'
    });
  }
};
