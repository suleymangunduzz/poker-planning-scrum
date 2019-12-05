import {
  CREATE_SPRINT_REQUEST,
  CREATE_SPRINT_SUCCESS,
  CREATE_SPRINT_FAILURE,
  GET_SPRINT_REQUEST,
  GET_SPRINT_SUCCESS,
  GET_SPRINT_FAILURE
} from '../constants';

const initialState = {
  data: {},
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SPRINT_REQUEST:
      return { ...state, isLoading: true , error: null};
    case CREATE_SPRINT_SUCCESS:
        return { ...state, data: action.payload, isLoading: false , error: null};
    case CREATE_SPRINT_FAILURE:
        return { ...state, isLoading: false , error: action.payload};
    
    case GET_SPRINT_REQUEST:
      return { ...state, isLoading: true , error: null};
    case GET_SPRINT_SUCCESS:
        return { ...state, data: action.payload, isLoading: false , error: null};
    case GET_SPRINT_FAILURE:
        return { ...state, isLoading: false , error: action.payload};
    default:
      return state;
  }
};
