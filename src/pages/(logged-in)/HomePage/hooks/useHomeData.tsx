import { useQuery } from "@tanstack/react-query";
import { statisticsService } from "../../../../services/statistics.service";

export const useHomeData = () => {
  const { data: topClients, isLoading: isLoadingTopClients, isError: isErrorTopClients } = useQuery({
    queryKey: ['topClients'],
    queryFn: statisticsService.getTopClients,
  });

  const { data: dailySales, isLoading: isLoadingDailySales, isError: isErrorDailySales } = useQuery({
    queryKey: ['dailySales'],
    queryFn: statisticsService.getDailySales,
  });

  return {
    topClients,
    dailySales,
    isLoading: isLoadingTopClients || isLoadingDailySales,
    isError: isErrorTopClients || isErrorDailySales,
  }
}