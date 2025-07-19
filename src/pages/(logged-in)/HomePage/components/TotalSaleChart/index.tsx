import { BarChart, YAxis, ResponsiveContainer, CartesianGrid, XAxis, Legend, Bar, Tooltip } from "recharts"
import type { DailySale } from "../../../../../@types/DailyTotals";

type TotalSaleChartProps = {
  dailySales: DailySale[];
};

export const TotalSaleChart = ({ dailySales }: TotalSaleChartProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Total de Vendas por Dia</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={dailySales} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
            <Tooltip cursor={{ fill: 'rgba(239, 246, 255, 0.5)' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '0.5rem' }} />
            <Legend wrapperStyle={{ fontSize: "14px" }} />
            <Bar dataKey="total" name="Total Vendido" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}