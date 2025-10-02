import { call, fork, put, select, takeEvery, take } from "redux-saga/effects";
import { matchPath } from "react-router";
import { LOCATION_CHANGE } from "redux-first-history";
import { swapiGet } from "../../../api";
import { LOAD_USERS, LOAD_USERS_SUCCESS } from "../../reducers/people/actions";
import {
  LOAD_USER_DETAILS,
  LOAD_USER_DETAILS_FAILURE,
  LOAD_USER_DETAILS_SUCCESS,
} from "../../reducers/details/actions";
import { getRouteConfig } from "../../../routes";
import { MAIN_ROUTE, PEOPLE_DETAILS_ROUTE } from "../../../constants";
import selectors from "../../reducers/people/selectors";

export function* loadPeopleList({ payload }) {
  const { page, search } = payload;
  const pattern = `people?page=${page}&search=${search}`;
  const result = yield call(swapiGet, pattern);
  const data = result?.results ?? [];
  const count = result?.count ?? 0;
  yield put({ type: LOAD_USERS_SUCCESS, payload: { data, count } });
}

export function* routeChangeSaga() {
  while (true) {
    const action = yield take(LOCATION_CHANGE);
    const path = action.payload.location.pathname;

    if (matchPath(getRouteConfig(MAIN_ROUTE), path)) {
      const state = yield select(selectors.peopleData);
      const { page, search } = state;
      yield put({ type: LOAD_USERS, payload: { page, search } });
    }

    const detailsPage = matchPath(getRouteConfig(PEOPLE_DETAILS_ROUTE), path);

    if (detailsPage) {
      const { id } = detailsPage.params;
      if (id) {
        yield put({ type: LOAD_USER_DETAILS, payload: { id } });
      }
    }
  }
}

export function* loadPeopleDetails({ payload }) {
  const { id } = payload;
  if (!id) {
    return;
  }
  try {
    const pattern = `people/${id}`;
    const data = yield call(swapiGet, pattern);
    yield put({ type: LOAD_USER_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    yield put({
      type: LOAD_USER_DETAILS_FAILURE,
      payload: error,
    });
  }
}

export function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(LOAD_USERS, loadPeopleList);
  yield takeEvery(LOAD_USER_DETAILS, loadPeopleDetails);
}
