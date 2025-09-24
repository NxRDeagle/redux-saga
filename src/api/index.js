import { API_URL } from "./constants";

export const swapiGet = async (pattern) => {
  const data = await fetch(`${API_URL}${pattern}`).then((result) =>
    result.json()
  );
  return data?.results ?? [];
};
