import axios from 'axios';
import {
  VOTE_STORY_REQUEST,
  VOTE_STORY_SUCCESS,
  VOTE_STORY_FAILURE,
  GET_VOTES_REQUEST,
  GET_VOTES_SUCCESS,
  GET_VOTES_FAILURE
} from '../constants';

export const voteStory = vote => async (dispatch, getState) => {
  try {
    dispatch({
      type: VOTE_STORY_REQUEST
    });

    let voteLimit = getState().sprintReducer.data.voters;
    let currentVoteCount = await axios.get('http://localhost:3005/votes');
    
    if (voteLimit > currentVoteCount.data.length) {
      let res = await axios.post('http://localhost:3005/votes', {
        point: vote
      });

      dispatch({
        type: VOTE_STORY_SUCCESS,
        payload: res.data
      });

      dispatch(getVotes());
    }
  } catch (e) {
    console.log('error: ', e);
    dispatch({
      type: VOTE_STORY_FAILURE,
      payload: 'error'
    });
  }
};

export const getVotes = () => async dispatch => {
  try {
    dispatch({
      type: GET_VOTES_REQUEST
    });
    
    let res = await axios.get('http://localhost:3005/votes');
    
    dispatch({
      type: GET_VOTES_SUCCESS,
      payload: res.data
    });
  } catch (e) {
    console.log('error: ', e);
    dispatch({
      type: GET_VOTES_FAILURE,
      payload: 'error'
    });
  }
};
