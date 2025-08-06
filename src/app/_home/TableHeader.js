import React from 'react';
import { FiSearch } from 'react-icons/fi'; // Using Feather search icon

export default function TableHeader() {
  return (
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
        </div>
      </th>
      <HeaderCell label="No" />
      <HeaderCell label="Employee Type" withIcon />
      <HeaderCell label="First Name" withIcon />
      <HeaderCell label="Last Name" withIcon />
      <HeaderCell label="Action" />
    </tr>
  );
}

const HeaderCell = ({ label, withIcon = false }) => (
  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    <div className="flex items-center space-x-1">
      <span>{label}</span>
      {withIcon && <FiSearch className="w-4 h-4" />}
    </div>
  </th>
);
