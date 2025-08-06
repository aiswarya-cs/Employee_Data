import React from 'react';
import FormField from '@/components/FormField';

function PersonalDetails({ formData, handleInputChange, errors = {} }) {
  const handicappedOptions = [
    { value: '', label: 'Select' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  return (
    <div className='my-4'>
      <div className='w-full px-6 py-2 bg-blue-100 mb-5'>
        <h3 className="text-md font-medium text-gray-900 ">Personal Details</h3>
      </div>

      <div className="flex flex-col md:flex-row md:justify-start  gap-8 my-3">
        <div className="flex flex-col">
          <FormField
            label="Mobile Phone"
            name="mobilePhone"
            type="tel"
            value={formData.mobilePhone}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px] text-black px-2 border rounded-md ${errors.mobilePhone ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleInputChange}
            placeholder="Enter mobile number"
          />
          {errors.mobilePhone && (
            <span className="text-red-500 text-sm mt-1">{errors.mobilePhone}</span>
          )}
        </div>

        <div className="flex flex-col">
          <FormField
            label="Home Phone"
            name="homePhone"
            type="tel"
            value={formData.homePhone}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px] text-black px-2 border rounded-md ${errors.homePhone ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleInputChange}
            placeholder="Enter home phone"
          />
          {errors.homePhone && (
            <span className="text-red-500 text-sm mt-1">{errors.homePhone}</span>
          )}
        </div>

        <div className="flex flex-col">
          <FormField
            label="Personal Email"
            name="personalEmail"
            type="email"
            value={formData.personalEmail}
            className={`2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px] text-black px-2 border rounded-md ${errors.personalEmail ? 'border-red-500' : 'border-gray-300'}`}
            onChange={handleInputChange}
            placeholder="Enter personal email"
          />
          {errors.personalEmail && (
            <span className="text-red-500 text-sm mt-1">{errors.personalEmail}</span>
          )}
        </div>

        <div className="flex flex-col">
          <FormField
            label="Physically Handicapped"
            name="physicallyHandicapped"
            type="select"
            value={formData.physicallyHandicapped}
            className='2xl:w-[350px] xl:w-[320px] lg:w-[220px] md:w-[160px] w-full h-[50px] text-black px-2 border border-gray-300 rounded-md'
            onChange={handleInputChange}
            options={handicappedOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
