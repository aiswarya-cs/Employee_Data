import React from 'react';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function ActionButtons({ onEdit, onDelete }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={onEdit}
        className="text-blue-600 hover:text-blue-900 p-1"
        title="Edit"
      >
        <FiEdit2 className="w-4 h-4" />
      </button>
      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-900 p-1"
        title="Delete"
      >
        <FiTrash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
