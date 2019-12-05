import axios from 'axios';
import {
VOTE_STORY_REQUEST,
VOTE_STORY_SUCCESS,
VOTE_STORY_FAILURE
} from '../constants';

export const voteStory = vote => async (dispatch, getState) => {
  try {
    dispatch({
      type: VOTE_STORY_REQUEST
    });

    let voteLimit = getState().sprintReducer.data.voters;
    let currentVoteCount = await axios.get('http://localhost:3005/votes');

    console.log(voteLimit)
    
    if (voteLimit > currentVoteCount.data.length) {
      let res = await axios.post('http://localhost:3005/votes', {
        point: vote
      });

      dispatch({
        type: VOTE_STORY_SUCCESS,
        payload: res.data
      });
    }
  } catch (e) {
    console.log('error: ', e);
    dispatch({
      type: VOTE_STORY_FAILURE,
      payload: 'error'
    });
  }
};
