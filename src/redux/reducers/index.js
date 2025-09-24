const initialState = {
  people: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        people: [...state.people, payload],
      };
    default:
      return state;
  }
};
