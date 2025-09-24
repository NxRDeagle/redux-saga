import { takeEvery, put, call, fork } from "redux-saga/effects";
import { swapiGet } from "../../api";

export function* loadPeople() {
  const people = yield call(swapiGet, "people");
  yield put({ type: "ADD_PEOPLE", payload: people });
}

export function* loadPlanets() {
  const planets = yield call(swapiGet, "planets");
  yield put({ type: "ADD_PLANETS", payload: planets });
}

export function* workerSaga() {
  yield fork(loadPeople);
  yield fork(loadPlanets);
}

export function* watchLoadDataSaga() {
  yield takeEvery("LOAD_DATA", workerSaga);
}

export function* rootSaga() {
  yield fork(watchLoadDataSaga);
}
