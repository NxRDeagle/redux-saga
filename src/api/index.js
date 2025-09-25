import { API_URL } from "./constants";

export const swapiGet = async (pattern, signal = null) => {
  const data = await fetch(`${API_URL}${pattern}`, { signal }).then((result) =>
    result.json()
  );
  return data?.results ?? [];
};
