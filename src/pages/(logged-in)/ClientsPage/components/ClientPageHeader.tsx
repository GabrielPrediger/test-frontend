import { PlusCircle } from "lucide-react";

export type ClientPageHeaderProps = {
  handleOpenAddModal: () => void;
};

export const ClientPageHeader: React.FC<ClientPageHeaderProps> = ({
  handleOpenAddModal
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Clientes</h1>
      <button
        onClick={handleOpenAddModal}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700"
      >
        <PlusCircle className="w-5 h-5" />
        Adicionar Cliente
      </button>
    </div>
  )
}