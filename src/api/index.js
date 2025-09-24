import { API_URL } from "./constants";

export const getPeople = async () => {
  const data = await fetch(`${API_URL}people`).then((result) => result.json());
  return data;
};
