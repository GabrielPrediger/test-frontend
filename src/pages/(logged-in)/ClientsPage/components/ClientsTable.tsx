import { Pencil, Trash2 } from "lucide-react";
import { findFirstMissingLetter } from "../../../../utils/stringUtils";
import type { NormalizedClient } from "../@types";

export type ClientsTableProps = {
  clients: NormalizedClient[];
  handleOpenEditModal: (client: NormalizedClient) => void;
  handleOpenDeleteModal: (clientId: string) => void;
};

export const ClientsTable: React.FC<ClientsTableProps> = ({
  clients,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Nome Completo</th>
            <th scope="col" className="px-6 py-3">Email</th>
            <th scope="col" className="px-6 py-3">Data de Nascimento</th>
            <th scope="col" className="px-6 py-3 text-center">Letra Faltante</th>
            <th scope="col" className="px-6 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          {clients?.map((client: NormalizedClient, index: number) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              <td className="px-6 py-4 font-medium text-gray-900">{client.name}</td>
              <td className="px-6 py-4">{client.email}</td>
              <td className="px-6 py-4">{new Date(client.birthDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
              <td className="px-6 py-4 text-center">
                <span className="font-mono text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                  {findFirstMissingLetter(client.name)}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <button onClick={() => handleOpenEditModal(client)} className="text-primary-600 hover:text-primary-800"><Pencil size={16} /></button>
                  <button onClick={() => handleOpenDeleteModal(client.id)} className="text-red-500 hover:text-red-700"><Trash2 size={16} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}