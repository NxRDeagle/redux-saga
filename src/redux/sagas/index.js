import { takeEvery, put } from "redux-saga/effects";
import { getPeople } from "../../api";

export function* workerSaga() {
  const data = yield getPeople();
  yield put({ type: "ADD_PEOPLE", payload: data });
}

export function* watchClickSaga() {
  yield takeEvery("CLICK", workerSaga);
}

export function* rootSaga() {
  yield watchClickSaga();
}
