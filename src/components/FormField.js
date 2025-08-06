import React from 'react';
import InputField from './form/Input';
import SelectField from './form/Select';

export default function FormField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  options = [], className = ''
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {type === 'select' ? (
        <SelectField
          name={name}
          value={value}
          onChange={onChange}
          options={options}
          className={className}
        />
      ) : (
        <InputField
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
          required={required}
        />
      )}
    </div>
  );
}
