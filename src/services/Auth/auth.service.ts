import type { ILoginFormProps } from "../../@types/Login";
import { api } from "../config/api";

/**
 * Função para autenticar um usuário.
 * @param data - Credenciais do usuário (email e senha).
 * @returns A resposta da API contendo o access_token.
 */
const loginUser = (data: ILoginFormProps) => {
  return api.post<{ access_token: string }>("/auth/login", data);
};

export const authService = {
  loginUser,
};
