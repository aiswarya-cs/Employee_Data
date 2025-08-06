import React from 'react';

export default function TabButton({ label, isActive, onClick, icon = null }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center py-2 rounded-md text-[10px] md:text-sm font-medium transition-colors
        ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
    >
      {icon && <span className='px-3'>{icon}</span>}
      {label && <span className='px-3'>{label}</span>}
    </button>
  );
}
