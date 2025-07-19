import LoadingSpinner from '../../../components/LoadingSpinner';
import { useClientsPageData } from './hooks/useClientsPageData';
import Modal from '../../../components/Modal';
import ClientForm from './components/ClientForm';
import { DeleteClientModal } from './components/DeleteClientModal';
import { ClientsTable } from './components/ClientsTable';
import type { NormalizedClient } from './@types';
import { ClientPageHeader } from './components/ClientPageHeader';

export default function ClientsPage() {
  const {
    clients,
    isLoading,
    handleOpenAddModal,
    handleOpenEditModal,
    editingClient,
    isFormModalOpen,
    handleCloseFormModal,
    isDeleteModalOpen,
    handleCloseDeleteModal,
    confirmDelete,
    deleteClientMutation,
    handleOpenDeleteModal,
    handleFormSubmit,
    createClientMutation,
    updateClientMutation,
  } = useClientsPageData()

  if (isLoading) {
    return (
      <div className="flex h-[60vh] w-full items-center justify-center">
        <LoadingSpinner size="lg" text="Buscando clientes..." />
      </div>
    );
  }

  return (
    <>
      <div className="p-8">
        <ClientPageHeader handleOpenAddModal={handleOpenAddModal} />

        <ClientsTable clients={clients as NormalizedClient[]} handleOpenDeleteModal={handleOpenDeleteModal} handleOpenEditModal={handleOpenEditModal} />

        <Modal
          isOpen={isFormModalOpen}
          onClose={handleCloseFormModal}
          title={editingClient ? 'Editar Cliente' : 'Adicionar Novo Cliente'}
        >
          <ClientForm
            onSubmit={handleFormSubmit}
            onClose={handleCloseFormModal}
            initialValues={editingClient ?? undefined}
            isLoading={createClientMutation.isPending || updateClientMutation.isPending}
          />
        </Modal>

        <Modal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          title="Confirmar Exclusão"
        >
          <DeleteClientModal confirmDelete={confirmDelete} deleteClientMutation={deleteClientMutation} handleCloseDeleteModal={handleCloseDeleteModal} />
        </Modal>
      </div>
    </>
  );
}