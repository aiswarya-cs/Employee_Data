import React from 'react'

export default function InputField({ type, name, value, onChange, placeholder, className, required }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      required={required}
    />
  );
};
