'use client';

import { useFormik } from 'formik';
import PersonalDetails from './PersonalDetails';
import BasicDetails from './BasicDetails';
import validateEmployeeForm from '../utils/Validation';
import SubmitSection from './SubmitSection';
import { toast } from 'react-toastify';

const employeeInitialValues = {
  employeeId: '',
  employeeType: 'Own',
  firstName: '',
  middleName: '',
  lastName: '',
  mobilePhone: '',
  homePhone: '',
  personalEmail: '',
  physicallyHandicapped: ''
};

export default function EmployeeForm({ onEmployeeSubmit }) {
  const formik = useFormik({
    initialValues: employeeInitialValues,
    validate: validateEmployeeForm,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await onEmployeeSubmit(values);
        toast.success('Employee created successfully!');
        resetForm();
      } catch (error) {
        console.error('Error creating employee:', error);
        toast.error('Error creating employee. Please try again.');
      } finally {
        setSubmitting(false);
      }
    }
  });

  const handleCancel = () => {
    formik.resetForm();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Employee Details
      </h2>

      <form onSubmit={formik.handleSubmit} className="space-y-6">
        <BasicDetails
          formData={formik.values}
          handleInputChange={formik.handleChange}
          errors={formik.errors}
        />
        <PersonalDetails
          formData={formik.values}
          handleInputChange={formik.handleChange}
          errors={formik.errors}
        />

        <SubmitSection
          handleCancel={handleCancel}
          isSubmitting={formik.isSubmitting}
        />
      </form>
    </div>
  );
}
