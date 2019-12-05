import {
  GET_VOTES_REQUEST,
  GET_VOTES_SUCCESS,
  GET_VOTES_FAILURE,
} from '../constants';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_VOTES_REQUEST:
      return { ...state, isLoading: true , error: null};
    case GET_VOTES_SUCCESS:
        return { ...state, data: action.payload, isLoading: false , error: null};
    case GET_VOTES_FAILURE:
        return { ...state, isLoading: false , error: action.payload};
    default:
      return state;
  }
};
