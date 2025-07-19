import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { NormalizedClient } from "../@types";
import { clientService } from "../../../../services/client.service";
import { useState } from "react";
import type { ClientFormData } from "../../../../@types/ClientApi";
import toast from "react-hot-toast";

export const useClientsPageData = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<NormalizedClient | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingClientId, setDeletingClientId] = useState<number | null>(null);

  const queryClient = useQueryClient();

  const { data: clients, isLoading } = useQuery({
    queryKey: ['clients'],
    queryFn: clientService.getClients,
    select: (rawResponse): NormalizedClient[] => {
      const normalizedData = rawResponse.data.clientes.map(client => ({
        id: client.id,
        name: client.info.nomeCompleto,
        email: client.info.detalhes.email,
        birthDate: client.info.detalhes.nascimento,
      }));
      return normalizedData;
    },
    staleTime: 1000 * 60 * 5,
  });


  const createClientMutation = useMutation({
    mutationFn: clientService.createClient,
    onSuccess: () => {
      toast.success('Cliente criado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      handleCloseFormModal();
    },
    onError: () => {
      toast.error('Houve um erro ao criar o cliente.');
    }
  });

  const updateClientMutation = useMutation({
    mutationFn: clientService.updateClient,
    onSuccess: () => {
      toast.success('Cliente atualizado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['clients'] });
      handleCloseFormModal();
    },
    onError: () => {
      toast.error('Houve um erro ao atualizar o cliente.');
    }
  });

  const deleteClientMutation = useMutation({
    mutationFn: clientService.deleteClient,
    onSuccess: () => {
      toast.success('Cliente deletado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['clients'] });
    },
    onError: () => {
      toast.error('Houve um erro ao deletar o cliente.');
    }
  });

  const handleOpenAddModal = () => {
    setEditingClient(null);
    setIsFormModalOpen(true);
  };

  const handleOpenEditModal = (client: NormalizedClient) => {
    setEditingClient(client);
    setIsFormModalOpen(true);
  };

  const handleCloseFormModal = () => {
    setIsFormModalOpen(false);
    setEditingClient(null);
  };

  const handleOpenDeleteModal = (id: number) => {
    setDeletingClientId(id);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeletingClientId(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = () => {
    if (deletingClientId) {
      deleteClientMutation.mutate(deletingClientId, {
        onSuccess: () => {
          handleCloseDeleteModal();
        },
      });
    }
  };

  const handleFormSubmit = (data: ClientFormData) => {
    if (editingClient) {
      updateClientMutation.mutate({ id: editingClient.id, clientData: data });
    } else {
      createClientMutation.mutate(data);
    }
  };

  return {
    clients,
    isLoading,
    isFormModalOpen,
    setIsFormModalOpen,
    editingClient,
    setEditingClient,
    handleFormSubmit,
    handleOpenAddModal,
    handleOpenEditModal,
    createClientMutation,
    updateClientMutation,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    deletingClientId,
    setDeletingClientId,
    handleCloseFormModal,
    handleOpenDeleteModal,
    confirmDelete,
    handleCloseDeleteModal,
    deleteClientMutation,
  }
}