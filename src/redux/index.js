import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/initialSagas";
import reducer, { routerMiddleware, createReduxHistory } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(routerMiddleware, sagaMiddleware))
);

export const history = createReduxHistory(store);

sagaMiddleware.run(rootSaga);
