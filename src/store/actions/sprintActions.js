import axios from 'axios';

import {
  CREATE_SPRINT_REQUEST,
  CREATE_SPRINT_SUCCESS,
  CREATE_SPRINT_FAILURE,
  GET_SPRINT_REQUEST,
  GET_SPRINT_SUCCESS,
  GET_SPRINT_FAILURE,
  STORY_STATUS
} from '../constants';

export const createSprint = (data, update = false) => async dispatch => {
  try {
    dispatch({
      type: CREATE_SPRINT_REQUEST
    });

    const modifiedData = update ? data : {
      name: data.name,
      voters: data.voters,
      stories: data.list.map((storyName, index) => ({
        name: storyName,
        point: '',
        status: index === 0 ? STORY_STATUS.ACTIVE : STORY_STATUS.NOT_VOTED
      })),
    };

    let res = await axios.post('http://localhost:3005/sprint', modifiedData);

    dispatch({
      type: CREATE_SPRINT_SUCCESS,
      payload: res
    });

    const votes = await axios.get('http://localhost:3005/votes');
    const deleteVotes = votes.data.map((vote, index) => axios.delete(`http://localhost:3005/votes/${index + 1}`)) ;

    await Promise.all(deleteVotes);
  } catch (e) {

    console.log('error', e);
    dispatch({
      type: CREATE_SPRINT_FAILURE,
      payload: 'error'
    });
  }
};

export const getSprint = () => async dispatch => {
  try {
    dispatch({
      type: GET_SPRINT_REQUEST
    });

    let res = await axios.get('http://localhost:3005/sprint');

    dispatch({
      type: GET_SPRINT_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: GET_SPRINT_FAILURE,
      payload: 'error'
    });
  }
};
