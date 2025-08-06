'use client';

import { useState } from 'react';
import TabButton from './TabButton';

export default function Header() {
  const [activeTab, setActiveTab] = useState('employee-creation');

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="flex justify-around md:justify-between items-center px-0 md:px-6 py-3">
        <div className="flex">
          <TabButton
            label="Employee Master"
            isActive={activeTab === 'employee-master'}
            onClick={() => setActiveTab('employee-master')}
          />
          <TabButton
            label="Employee Creation"
            isActive={activeTab === 'employee-creation'}
            onClick={() => setActiveTab('employee-creation')}
          />
          <TabButton
            icon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
            isActive={activeTab === 'employee-add'}
            onClick={() => setActiveTab('employee-add')}
          />
        </div>

        <a href="#" className="text-blue-600 hover:text-blue-800 text-[10px] md:text-sm font-medium flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
           Back
        </a>
      </div>
      <hr className=" border-gray-200" />
    </div>
  );
} 