import { Pencil, Trash2 } from "lucide-react";
import { findFirstMissingLetter } from "../../../../utils/stringUtils";
import type { NormalizedClient } from "../@types";

export type ClientsTableProps = {
  clients: NormalizedClient[];
  handleOpenEditModal: (client: NormalizedClient) => void;
  handleOpenDeleteModal: (clientId: number) => void;
};

export const ClientsTable: React.FC<ClientsTableProps> = ({
  clients,
  handleOpenEditModal,
  handleOpenDeleteModal,
}) => {

  if (!clients || clients.length === 0) {
    return <p className="p-4 text-center text-gray-500">Nenhum cliente encontrado.</p>;
  }

  return (
    <>
      <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Nome Completo</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Nascimento</th>
              <th scope="col" className="px-6 py-3 text-center">Letra Faltante</th>
              <th scope="col" className="px-6 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client) => (
              <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{client.name}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{new Date(client.birthDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</td>
                <td className="px-6 py-4 text-center">
                  <span className="font-mono text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                    {findFirstMissingLetter(client.name)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-4">
                    <button onClick={() => handleOpenEditModal(client)} className="text-primary-600 hover:text-primary-800"><Pencil size={16} /></button>
                    <button onClick={() => handleOpenDeleteModal(client.id)} className="text-red-600 hover:text-red-800"><Trash2 size={16} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden space-y-4">
        {clients.map((client) => (
          <div key={client.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start mb-4">
              <div className="font-bold text-gray-900">{client.name}</div>
              <div className="flex items-center gap-4 flex-shrink-0">
                <button onClick={() => handleOpenEditModal(client)} className="text-primary-600"><Pencil size={16} /></button>
                <button onClick={() => handleOpenDeleteModal(client.id)} className="text-red-600"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="text-gray-800">{client.email}</div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-500">Nascimento</div>
                  <div className="text-gray-800">{new Date(client.birthDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">Letra Faltante</div>
                  <span className="font-mono text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                    {findFirstMissingLetter(client.name)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};