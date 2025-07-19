import { useForm } from 'react-hook-form';
import type { ClientFormData } from '../../../../@types/ClientApi';
import { useEffect } from 'react';



interface ClientFormProps {
  onSubmit: (data: ClientFormData) => void;
  initialValues?: Partial<ClientFormData>;
  isLoading?: boolean;
  onClose: () => void;
}

export default function ClientForm({ onSubmit, initialValues, isLoading, onClose }: ClientFormProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ClientFormData>({
    defaultValues: initialValues || { name: '', email: '', birthDate: '' },
  });

  const handleFormSubmit = (data: ClientFormData) => {
    onSubmit(data);
  };

  useEffect(() => {
    if (initialValues) {
      reset({
        name: initialValues.name || '',
        email: initialValues.email || '',
        birthDate: initialValues.birthDate || '',
      });
    } else {
      reset({
        name: '',
        email: '',
        birthDate: '',
      });
    }
  }, [initialValues, reset]);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
        <input
          id="name"
          placeholder='ex: Maria da Silva'
          {...register('name', { required: 'O nome é obrigatório' })}
          className="mt-1 px-3 py-2 block w-full rounded-md border-b border-gray-400 focus:outline-none focus:inset-shadow-2 transition sm:text-sm"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          placeholder='ex: email@provedor.com'
          {...register('email', { required: 'O email é obrigatório' })}
          className="mt-1 px-3 py-2 block w-full rounded-md border-b border-gray-400 focus:outline-none focus:inset-shadow-2 transition sm:text-sm"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
        <input
          id="birthDate"
          type="date"
          {...register('birthDate', { required: 'A data é obrigatória' })}
          className="mt-1 px-3 py-2 block w-full rounded-md border-b border-gray-400 focus:outline-none focus:inset-shadow-2 transition sm:text-sm"
        />
        {errors.birthDate && <p className="mt-1 text-xs text-red-500">{errors.birthDate.message}</p>}
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 disabled:opacity-50"
        >
          {isLoading ? 'Salvando...' : 'Salvar'}
        </button>
      </div>
    </form>
  );
}