import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_FAILURE,
  LOAD_USER_DETAILS_SUCCESS,
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const detailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER_DETAILS:
      return {
        ...state,
        loading: true,
      };
    case LOAD_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
        error: null,
      };
    case LOAD_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default detailsReducer;
