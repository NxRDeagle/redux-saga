const initialState = {
  people: [],
  planets: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PEOPLE":
      return {
        ...state,
        people: [...state.people, ...payload],
      };
    case "ADD_PLANETS":
      return {
        ...state,
        planets: [...state.planets, ...payload],
      };
    default:
      return state;
  }
};
