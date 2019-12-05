import axios from 'axios';

import {
  CREATE_SPRINT_REQUEST,
  CREATE_SPRINT_SUCCESS,
  CREATE_SPRINT_FAILURE
} from '../constants';

export const createSprint = data => async dispatch => {
  try {
    dispatch({
      type: CREATE_SPRINT_REQUEST
    });

    const modifiedData = {
      name: data.name,
      voters: data.voters,
      stories: data.list.map((storyName, index) => ({
        name: storyName,
        point: '',
        status: index === 0 ? "Active" : "Not Voted!"
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
