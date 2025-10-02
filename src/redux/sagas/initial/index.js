import { spawn, all } from "redux-saga/effects";
import { peopleSaga } from "../people";

export function* rootSaga() {
  const sagas = [peopleSaga];

  yield all(sagas.map((saga) => spawn(saga)));
}
