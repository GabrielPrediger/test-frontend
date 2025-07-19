import type { ApiClientsResponse } from "../@types/ClientApi";
import { api } from "./config/api";

const getClients = async (): Promise<ApiClientsResponse> => {
  const response = await api.get("/clients");
  return response.data;
};

export const clientService = {
  getClients,
};
