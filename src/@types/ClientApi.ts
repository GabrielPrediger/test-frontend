export interface ApiClient {
  info: {
    nomeCompleto: string;
    detalhes: {
      email: string;
      nascimento: string;
    };
  };
  [key: string]: any;
}

export interface ApiClientsResponse {
  data: {
    clientes: ApiClient[];
  };
}

export interface ClientFormData {
  name: string;
  email: string;
  birthDate: string;
}
