import React from 'react';

export default function SelectField({ name, value, onChange, options, className }) {
  return (
    <select name={name} value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
}
