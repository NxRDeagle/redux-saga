import { API_URL } from "./constants";

export const swapiGet = async (pattern, withResults = false, signal = null) => {
  const data = await fetch(`${API_URL}${pattern}`, { signal }).then((result) =>
    result.json()
  );
  if (withResults) {
    return data?.results ?? [];
  }
  return data;
};
