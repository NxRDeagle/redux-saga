import { combineReducers } from "redux";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import peopleReducer from "./people";
import detailsReducer from "./details";

export const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory(),
  });

export const appReducer = (state = {}) => {
  return state;
};

const rootReducer = combineReducers({
  app: appReducer,
  people: peopleReducer,
  details: detailsReducer,
  router: routerReducer,
});

export default rootReducer;
