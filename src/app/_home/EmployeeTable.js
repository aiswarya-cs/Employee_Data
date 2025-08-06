'use client';

import { useState } from 'react';
import {
  HiOutlineFilter,
  HiOutlinePlus,
  HiOutlineDownload,
  HiOutlineUpload,
  HiOutlineDotsVertical
} from 'react-icons/hi';
import { AiOutlineDelete } from "react-icons/ai";
import Table from './Table';

export default function EmployeeTable({ employees = [], onEmployeesUpdate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-white rounded-none shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 md:gap-4 mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2 md:mb-6">Added Employee Details</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-2 w-full md:w-auto'>
          <div className="relative flex-1 w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              name="search"
              placeholder="Search By"
              value={searchTerm}
              onChange={handleSearch}
              className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md leading-5
               bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400
                focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <HiOutlineFilter className="w-5 h-5" />
            </div>
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <HiOutlinePlus className="w-5 h-5" />
            </div>
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <HiOutlineUpload className="w-5 h-5" />
            </div>
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <HiOutlineDownload className="w-5 h-5" />
            </div>
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <AiOutlineDelete className="w-5 h-5" />
            </div>
            <div className="p-2 border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
              <HiOutlineDotsVertical className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <Table employees={employees} onEmployeesUpdate={onEmployeesUpdate} searchTerm={searchTerm} />
    </div>
  );
} 
