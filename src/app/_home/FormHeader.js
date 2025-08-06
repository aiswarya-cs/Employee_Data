import React, { useState } from 'react';
import HeaderButton from '@/components/HeaderButton';

const FormHeader = () => {
  const [activeSection, setActiveSection] = useState('Employee Details');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="px-6 py-2 w-full bg-blue-100">
        <h1 className="text-lg font-semibold text-black">Employee Creation</h1>
      </div>

      <div className="px-6 pt-4">
        <div className="flex space-x-8 border-b border-gray-200">
          <HeaderButton
            label="Employee Details"
            active={activeSection === 'Employee Details'}
            onClick={() => handleSectionClick('Employee Details')}
          />
          <HeaderButton
            label="Address"
            active={activeSection === 'Address'}
            onClick={() => handleSectionClick('Address')}
          />
          <HeaderButton
            label="Skill Set"
            active={activeSection === 'Skill Set'}
            onClick={() => handleSectionClick('Skill Set')}
          />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
