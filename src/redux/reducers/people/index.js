import { LOAD_USERS, LOAD_USERS_FAILURE, LOAD_USERS_SUCCESS } from "./actions";

const initialState = {
  page: 0,
  search: "",
  loading: false,
  error: null,
  data: null,
  count: 0,
};

const peopleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      const { page, search } = payload;
      return {
        ...state,
        loading: true,
        page,
        search,
      };
    case LOAD_USERS_SUCCESS:
      const { data, count } = payload;
      return {
        ...state,
        loading: false,
        error: null,
        data,
        count,
      };
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default peopleReducer;
