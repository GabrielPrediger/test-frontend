import { motion } from 'framer-motion';
import type { StatCardProps } from './@types';

export const StatCard = ({ icon, title, clientName, value, unit }: StatCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 p-6 rounded-xl flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white p-3 rounded-lg">{icon}</div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
      </div>
      <div className="mt-4">
        <p className="text-2xl font-bold text-gray-800">{clientName || 'N/A'}</p>
        {value && <p className="text-sm text-gray-600">{value} {unit}</p>}
      </div>
    </motion.div>
  );
};