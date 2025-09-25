import { loadOnAction, pageLoaderSaga } from "../pageLoaderSaga";
import { call, spawn, all } from "redux-saga/effects";

export function* rootSaga() {
  const sagas = [pageLoaderSaga, loadOnAction];

  const retrySagas = yield sagas.map((saga) =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (exception) {
          console.log(exception);
        }
      }
    })
  );

  yield all(retrySagas);
}
