import React from 'react'
import FormField from '@/components/FormField'

const BasicDetails = ({ formData, handleInputChange, errors = {} }) => {

  const employeeTypeOptions = [
    { value: 'Own', label: 'Own' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Temporary', label: 'Temporary' }
  ];

  return (
    <div><div className="flex flex-col space-y-4">
      <div className='flex flex-col md:flex-row md:justify-start gap-8 mb-3'>
        <div className="flex flex-col">
          <FormField
            label="Employee ID (Not yet created)"
            name="employeeId"
            type="text"
            value={formData.employeeId}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px] text-black
             px-2 border rounded-md 
             ${errors.employeeId ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleInputChange}
            placeholder="Employee ID"
            required
          />
          {errors.employeeId && (
            <span className="text-red-500 text-sm mt-1">{errors.employeeId}</span>
          )}
        </div>

        <div className="flex flex-col">
          <FormField
            label="Employee Type"
            name="employeeType"
            type="select"
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full 
              h-[50px] text-black px-2 border rounded-md pl-2 
              ${errors.employeeType ? 'border-red-500' : 'border-gray-300'}`}
            value={formData.employeeType}
            onChange={handleInputChange}
            options={employeeTypeOptions}
            required
          />
          {errors.employeeType && (
            <span className="text-red-500 text-sm mt-1">{errors.employeeType}</span>
          )}
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:justify-start gap-8 my-3'>
        <div className="flex flex-col">
          <FormField
            label="First Name"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px]
               text-black px-2 border rounded-md 
               ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter first name"
            required
          />
          {errors.firstName && (
            <span className="text-red-500 text-sm mt-1">{errors.firstName}</span>
          )}
        </div>

        <div className="flex flex-col">
          <FormField
            label="Middle Name"
            name="middleName"
            type="text"
            value={formData.middleName}
            onChange={handleInputChange}
            className='2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px]
             text-black px-2 border border-gray-300 rounded-md'
            placeholder="Enter middle name"
          />
        </div>

        <div className="flex flex-col">
          <FormField
            label="Last Name"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px]
               text-black px-2 border rounded-md 
               ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter last name"
            required
          />
          {errors.lastName && (
            <span className="text-red-500 text-sm mt-1">{errors.lastName}</span>
          )}
        </div>
      </div>
    </div></div>
  )
}

export default BasicDetails;
