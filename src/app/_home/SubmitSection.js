import React from 'react'
import Button from '@/components/Buttons';

const SubmitSection = ({ handleCancel, isSubmitting }) => {
  return (
    <div>
      <div className="bg-blue-50 px-6 py-4 rounded-md mt-6 flex flex-col-reverse md:flex-row justify-between">
        <div className='md:w-[300px] lg:w-[500px] items-center pt-5 md:pt-0'>
          <p className="md:text-[12px] lg:text-sm text-gray-700">
            <span className="font-semibold">Note:</span>
            You acknowledge that you have read and understood our Privacy Policy,
            outlining how we collect, use, and protect your personal information.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-end space-x-4 pt-4">
          <Button
            type="button"
            onClick={handleCancel}
            className="w-full md:w-auto border border-red-500 text-red-500 hover:bg-red-50"
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            className="w-full md:w-auto bg-green-600 text-white hover:bg-green-700 disabled:bg-gray-400"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Employee'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SubmitSection;
