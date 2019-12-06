import { getSprint, createSprint, getVotes } from '../actions';
import {
  GET_STORIES_REQUEST,
  GET_STORIES_SUCCESS,
  GET_STORIES_FAILURE,
  FINISH_STORY_REQUEST,
  FINISH_STORY_FAILURE,
  STORY_STATUS,
  SPRINT_STATUS
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

const checkSprintStatus = stories => {
  return stories.some(story => story.status === STORY_STATUS.ACTIVE);
};

const updateStoryStatus = (stories, updateIndex, finalScore) => {
  let updatedStories = stories.map(story => story.status === STORY_STATUS.ACTIVE ? {
    ...story,
    point: finalScore,
    status: STORY_STATUS.VOTED
  } : story);

  if (updateIndex !== stories.length - 1) {
    return updatedStories.map((story, index) => index === updateIndex + 1 ? {
      ...story,
      status: STORY_STATUS.ACTIVE
    } : story);
  } else {
    return updatedStories;
  }
};

export const finishStory = finalScore => async (dispatch, getState) => {
  try {
    dispatch({
      type: FINISH_STORY_REQUEST
    });

    await dispatch(getSprint());

    const sprint = getState().sprintReducer.data;

    if (checkSprintStatus(sprint.stories)) {
    
      const index = sprint.stories.findIndex(story => story.status === STORY_STATUS.ACTIVE);

      const modifiedSprintData = {
        ...sprint,
        stories: updateStoryStatus(sprint.stories, index, finalScore)
      };
  
      await dispatch(createSprint(modifiedSprintData, true)); 
      dispatch(getVotes());
      dispatch(getStories());
    } else {
      dispatch({
        type: FINISH_STORY_FAILURE,
        payload: SPRINT_STATUS.FINISHED
      });
    }

  } catch (e) {
    console.log('error: ', e);
    dispatch({
      type: FINISH_STORY_FAILURE,
      payload: 'error'
    });
  }
};
