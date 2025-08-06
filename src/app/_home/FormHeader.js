import HeaderButton from '@/components/HeaderButton';
import React from 'react'

const FormHeader = () => {
  return (
    <div>
      <div className="px-6 py-2 w-full bg-blue-100">
        <h1 className="text-lg font-semibold text-black">Employee Creation</h1>
      </div>

      <div className="px-6 pt-4">
        <div className="flex  space-x-8 border-b border-gray-200">
          <HeaderButton label="Employee Details" active />
          <HeaderButton label="Address" />
          <HeaderButton label="Skill Set" />
        </div>
      </div>
    </div>
  )
}

export default FormHeader;