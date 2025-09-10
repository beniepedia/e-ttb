import React from 'react';
import { BorderWidth } from 'react-bootstrap-icons';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function SelectMulti({
  label,
  name,
  value,
  option,
  isMulti = false,
  closeMenuOnSelect = false,
  required = false,
  disabled = false,
  error = '',
  placeholder = 'Pilih ...',
  onHandleChange,
  defaultValue,
}) {
  const animatedComponents = makeAnimated();

  const customStyles = {
    control: (base, state) => ({
      ...base,
      boxShadow: 'none',
      minHeight: '2.5rem',
      borderWidth: state.isFocused ? '2px' : '1px',
      borderColor: state.isFocused ? '#0075bb' : '#d1d1d4',
      '&:hover': {
        borderColor: state.isFocused ? '#0075bb' : '#d1d1d4',
      },
    }),
  };

  return (
    <fieldset className="fieldset w-full">
      {label && (
        <legend className="fieldset-legend">
          {label}
          {required && <span className="text-error">*</span>}
        </legend>
      )}

      <Select
        name={name}
        value={value}
        options={option}
        styles={customStyles}
        defaultValue={defaultValue}
        components={animatedComponents}
        isMulti={isMulti}
        required={required}
        placeholder={placeholder}
        noOptionsMessage={() => 'Tidak ada opsi lain'}
        closeMenuOnSelect={closeMenuOnSelect}
        isDisabled={disabled}
        onChange={onHandleChange}
      />

      {error && <span className="label text-error">{error}</span>}
    </fieldset>
  );
}
