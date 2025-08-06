import React from 'react'
import TableHeader from './TableHeader'
import TableRow from '@/components/TableRow'

const Table = ({ employees, onEmployeesUpdate, searchTerm }) => {
  const handleCheckboxChange = (id) => {
    const updatedEmployees = employees.map(emp =>
      emp.id === id ? { ...emp, checked: !emp.checked } : emp
    );
    onEmployeesUpdate(updatedEmployees);
  };

  const handleEdit = (id) => {
    console.log('Edit employee:', id);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(emp => emp.id !== id);
    onEmployeesUpdate(updatedEmployees);
  };

  const filteredEmployees = employees.filter(emp =>
    emp.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.employeeType.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div><div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-blue-50">
          <TableHeader />
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee, index) => (
              <TableRow
                key={employee.id}
                index={index}
                employee={employee}
                onCheckboxChange={handleCheckboxChange}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                {searchTerm ? 'No employees found matching your search.' : 'No employees added yet.'}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div></div>
  )
}

export default Table;
