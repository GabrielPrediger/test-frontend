import { DollarSign, Repeat, TrendingUp } from 'lucide-react';
import { StatCard } from '../../../components/StatCard';
import { useHomeData } from './hooks/useHomeData';
import { TotalSaleChart } from './components/TotalSaleChart';
import LoadingSpinner from '../../../components/LoadingSpinner';
import type { DailySale } from '../../../@types/DailyTotals';

export default function HomePage() {
  const { isLoading, topClients, dailySales } = useHomeData()


  if (isLoading) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <LoadingSpinner size="lg" text="Carregando estatísticas..." />
      </div>
    );
  }

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={<DollarSign className="w-6 h-6 text-green-500" />}
          title="Maior Volume de Vendas"
          clientName={topClients?.topClientByVolume?.name}
          value={`R$ ${topClients?.topClientByVolume?.totalVolume.toFixed(2)}`}
        />
        <StatCard
          icon={<TrendingUp className="w-6 h-6 text-blue-500" />}
          title="Maior Média por Venda"
          clientName={topClients?.topClientByAverage?.name}
          value={`R$ ${topClients?.topClientByAverage?.averageSaleValue.toFixed(2)}`}
          unit="em média"
        />
        <StatCard
          icon={<Repeat className="w-6 h-6 text-purple-500" />}
          title="Maior Frequência de Compras"
          clientName={topClients?.topClientByFrequency?.name}
          value={`${topClients?.topClientByFrequency?.uniqueSaleDays} dias`}
          unit="diferentes"
        />
      </div>
      <TotalSaleChart dailySales={dailySales as DailySale[]} />

    </div>
  );
}