import api from "./api";

export const list = async () => {
  return await api.get("/subjects");
};

export const create = async (data) => {
  return await api.post("/subjects", data);
};