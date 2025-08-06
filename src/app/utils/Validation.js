export default function validateEmployeeForm(formData) {
  const errors = {};

  // Employee ID
  if (!formData.employeeId.trim()) {
    errors.employeeId = 'Employee ID is required';
  }

  // First Name
  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  } else if (formData.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  // Last Name
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  } else if (formData.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  // Email
  if (formData.personalEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalEmail)) {
    errors.personalEmail = 'Please enter a valid email address';
  }

  // Mobile Phone
  if (formData.mobilePhone && !/^\d{10}$/.test(formData.mobilePhone.replace(/\s/g, ''))) {
    errors.mobilePhone = 'Please enter a valid 10-digit mobile number';
  }

  // Home Phone
  if (formData.homePhone && !/^\d{10}$/.test(formData.homePhone.replace(/\s/g, ''))) {
    errors.homePhone = 'Please enter a valid 10-digit home phone number';
  }

  // Employee Type
  if (!formData.employeeType) {
    errors.employeeType = 'Employee type is required';
  }

  return errors;
}
