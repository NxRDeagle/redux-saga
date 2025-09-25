import {
  call,
  put,
  take,
  fork,
  cancel,
  actionChannel,
} from "redux-saga/effects";
import { LOCATION_CHANGE } from "redux-first-history";
import { swapiGet } from "../../../api";

export function* fetchPlanets(signal = null) {
  const planets = yield call(swapiGet, "planets", signal);
  console.log(planets);
}

export function* loadOnAction() {
  //   let task;
  //   let abortController = new AbortController();

  //   while (true) {
  //     yield take("LOAD_DATA");

  //     if (task) {
  //       abortController.abort();
  //       yield cancel(task);
  //       abortController = new AbortController();
  //     }
  //     task = yield fork(fetchPlanets, abortController.signal);
  //   }

  const channel = yield actionChannel("LOAD_DATA");

  while (true) {
    yield take(channel);
    yield call(fetchPlanets);
  }
}

function* loadBlogDataWorkerSaga() {
  const vehicles = yield call(swapiGet, "vehicles");
  yield put({ type: "SET_VEHICLES", payload: vehicles });
}

export function* pageLoaderSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);

    if (action.payload.location.pathname.endsWith("blog")) {
      yield fork(loadBlogDataWorkerSaga);
    }
  }
}
