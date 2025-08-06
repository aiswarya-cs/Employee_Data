'use client';

import { useState } from 'react';
import PersonalDetails from './PersonalDetails';
import BasicDetails from './BasicDetails';
import validateEmployeeForm from '../utils/Validation';
import SubmitSection from './SubmitSection';

export default function EmployeeForm({ onEmployeeSubmit }) {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeType: 'Own',
    firstName: '',
    middleName: '',
    lastName: '',
    mobilePhone: '',
    homePhone: '',
    personalEmail: '',
    physicallyHandicapped: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validateEmployeeForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      try {
        onEmployeeSubmit(formData);

        setFormData({
          employeeId: '',
          employeeType: 'Own',
          firstName: '',
          middleName: '',
          lastName: '',
          mobilePhone: '',
          homePhone: '',
          personalEmail: '',
          physicallyHandicapped: ''
        });

        setErrors({});
        setSuccessMessage('Employee created successfully!');
        setTimeout(() => setSuccessMessage(''), 3000);
      } catch (error) {
        console.error('Error creating employee:', error);
        alert('Error creating employee. Please try again.');
      }
    } else {
      setErrors(validationErrors);
    }

    setIsSubmitting(false);
  };

  const handleCancel = () => {
    setFormData({
      employeeId: '',
      employeeType: 'Own',
      firstName: '',
      middleName: '',
      lastName: '',
      mobilePhone: '',
      homePhone: '',
      personalEmail: '',
      physicallyHandicapped: ''
    });
    setErrors({});
    setSuccessMessage('');
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Employee Details
      </h2>

      {successMessage && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-green-800 text-sm">{successMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <BasicDetails 
          formData={formData} 
          handleInputChange={handleInputChange} 
          errors={errors}
        />
        <PersonalDetails 
          formData={formData} 
          handleInputChange={handleInputChange} 
          errors={errors}
        />

        <SubmitSection handleCancel={handleCancel} isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};
