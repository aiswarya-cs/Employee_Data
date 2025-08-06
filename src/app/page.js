'use client';

import { useState } from 'react';
import Header from '../components/Header';
import EmployeeForm from './_home/EmployeeForm';
import EmployeeTable from './_home/EmployeeTable';
import FormHeader from './_home/FormHeader';

const TABS = ['Employee Details', 'Address', 'Skill Set'];

export default function Home() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      employeeType: 'XXXX',
      firstName: 'XXXXXX',
      lastName: 'XXXXX',
      checked: false
    }
  ]);

  const [activeTab, setActiveTab] = useState(TABS[0]);

  const addEmployee = (newEmployee) => {
    const employeeWithId = {
      ...newEmployee,
      id: Date.now(),
      checked: false
    };
    setEmployees(prev => [...prev, employeeWithId]);
  };

  const updateEmployees = (updatedEmployees) => {
    setEmployees(updatedEmployees);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="w-full">
        <FormHeader activeTab={activeTab} onTabChange={setActiveTab} />
        <div>
          <EmployeeForm onEmployeeSubmit={addEmployee} activeTab={activeTab} />
          <EmployeeTable employees={employees} onEmployeesUpdate={updateEmployees} />
        </div>
      </main>
    </div>
  );
}
