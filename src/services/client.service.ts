import type { ApiClientsResponse, ClientFormData } from "../@types/ClientApi";
import { api } from "./config/api";

const getClients = async (): Promise<ApiClientsResponse> => {
  const response = await api.get("/clients");
  return response.data;
};

const createClient = async (clientData: ClientFormData) => {
  const response = await api.post("/clients", clientData);
  return response.data;
};

const updateClient = async ({
  id,
  clientData,
}: {
  id: number;
  clientData: Partial<ClientFormData>;
}) => {
  const response = await api.patch(`/clients/${id}`, clientData);
  return response.data;
};

const deleteClient = async (id: number) => {
  await api.delete(`/clients/${id}`);
};

export const clientService = {
  getClients,
  createClient,
  updateClient,
  deleteClient,
};
