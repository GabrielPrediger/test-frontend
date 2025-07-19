import LoadingSpinner from '../../../components/LoadingSpinner';
import { findFirstMissingLetter } from '../../../utils/stringUtils';
import { useClientsPageData } from './hooks/useClientsPageData';

export default function ClientsPage() {
  const { clients, isLoading } = useClientsPageData()

  if (isLoading) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <LoadingSpinner size="lg" text="Buscando clientes..." />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Lista de Clientes</h1>

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
            {clients?.map((client) => (
              <tr key={client.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {client.name}
                </td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">
                  {new Date(client.birthDate).toLocaleDateString('pt-BR', { timeZone: 'UTC' })}
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="font-mono text-xs bg-gray-200 text-gray-700 rounded-full px-2 py-1">
                    {findFirstMissingLetter(client.name)}
                  </span>
                </td>
                <td className="px-6 py-4">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}