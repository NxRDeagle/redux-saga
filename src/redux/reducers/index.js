import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";

export const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

const initialAppState = {
  vehicles: [],
};

export const appReducer = (state = initialAppState, { type, payload }) => {
  switch (type) {
    case "SET_VEHICLES":
      return {
        ...state,
        vehicles: payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
});

export default rootReducer;
