import React from 'react';

const HeaderButton = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 pb-3 font-medium focus:outline-none ${
        active
          ? 'border-b-2 border-blue-600 text-blue-600'
          : 'text-gray-500 hover:text-gray-700'
      }`}
    >
      <span>{label}</span>
    </button>
  );
};

export default HeaderButton;
