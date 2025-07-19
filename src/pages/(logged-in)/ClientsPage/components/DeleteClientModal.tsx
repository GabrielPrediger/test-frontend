export type DeleteClientModalProps = {
  handleCloseDeleteModal: () => void;
  confirmDelete: () => void;
  deleteClientMutation: {
    isPending: boolean;
  };
};

export const DeleteClientModal: React.FC<DeleteClientModalProps> = ({
  handleCloseDeleteModal,
  confirmDelete,
  deleteClientMutation,
}) => {
  return (
    <div>
      <p className="text-sm text-gray-600">
        Você tem certeza que deseja deletar este cliente? Esta ação não pode ser desfeita.
      </p>
      <div className="flex justify-end gap-4 mt-6">
        <button
          type="button"
          onClick={handleCloseDeleteModal}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancelar
        </button>
        <button
          type="button"
          onClick={confirmDelete}
          disabled={deleteClientMutation.isPending}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 disabled:opacity-50"
        >
          {deleteClientMutation.isPending ? 'Deletando...' : 'Sim, Deletar'}
        </button>
      </div>
    </div>
  )
}