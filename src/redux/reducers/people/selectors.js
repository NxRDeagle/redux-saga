const people = (state) => state.people;

const data = (state) => people(state).data;

const page = (state) => people(state).page;

const search = (state) => people(state).search;

const count = (state) => people(state).count;

const loading = (state) => people(state).loading;

export default {
  data,
  page,
  search,
  count,
  loading,
};
