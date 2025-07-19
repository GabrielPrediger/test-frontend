import type { DailySale } from "../@types/DailyTotals";
import type { TopClientsStats } from "../@types/TopClients";
import { api } from "./config/api";

const getDailySales = async (): Promise<DailySale[]> => {
  const response = await api.get("/sales/stats/daily-totals");
  return response.data;
};

const getTopClients = async (): Promise<TopClientsStats> => {
  const response = await api.get("/sales/stats/top-clients");
  return response.data;
};

export const statisticsService = {
  getDailySales,
  getTopClients,
};
