const details = (state) => state.details;

const data = (state) => details(state).data;

const name = (state) => data(state)?.name ?? "";

const birthYear = (state) => data(state)?.birth_year ?? 0;

const skinColor = (state) => data(state)?.skin_color ?? "";

const mass = (state) => data(state)?.mass ?? 0;

const loading = (state) => details(state).loading;

export default {
  data,
  name,
  birthYear,
  skinColor,
  mass,
  loading,
};
