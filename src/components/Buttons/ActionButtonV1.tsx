import { Pencil, Trash2 } from 'lucide-react';
import { ActionButton } from './ActionButtonRoot';

export function ActionButtonsV1() {
  return (
    <div className="flex items-center gap-2">
      <ActionButton
        className="text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        aria-label="Editar"
      >
        <Pencil className="w-4 h-4" />
      </ActionButton>

      <ActionButton
        className="text-gray-500 hover:bg-red-100 hover:text-red-600"
        aria-label="Deletar"
      >
        <Trash2 className="w-4 h-4" />
      </ActionButton>
    </div>
  );
}