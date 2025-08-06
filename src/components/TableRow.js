import React from 'react';
import ActionButtons from './ActionButton';

export default function TableRow({ index, employee, onCheckboxChange, onEdit, onDelete, isMobile }) {
  if (isMobile) {
    return (
      <ActionButtons
        onEdit={() => onEdit(employee.id)}
        onDelete={() => onDelete(employee.id)}
      />
    );
  }
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          checked={employee.checked}
          onChange={() => onCheckboxChange(employee.id)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {String(index + 1).padStart(2, '0')}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {employee.employeeType}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {employee.firstName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
        {employee.lastName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <ActionButtons
          onEdit={() => onEdit(employee.id)}
          onDelete={() => onDelete(employee.id)}
        />
      </td>
    </tr>
  );
}

