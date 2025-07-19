import { useQuery } from "@tanstack/react-query";
import type { NormalizedClient } from "../@types";
import { clientService } from "../../../../services/client.service";

export const useClientsPageData = () => {
  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: clientService.getClients,
    select: (rawResponse): NormalizedClient[] => {
      console.log('Dados brutos da API:', rawResponse);

      const normalizedData = rawResponse.data.clientes.map(client => ({
        id: client.info.detalhes.email,
        name: client.info.nomeCompleto,
        email: client.info.detalhes.email,
        birthDate: client.info.detalhes.nascimento,
      }));

      console.log('Dados normalizados:', normalizedData);
      return normalizedData;
    },
  });

  return {
    clients,
    isLoading
  }
}