import { useEffect, useRef } from 'react';

export default function Input({
  type = 'text',
  name,
  value,
  className,
  autoComplete,
  placeHolder = '',
  required,
  isFocused,
  handleChange,
  disabled,
  label,
  error,
}) {
  const input = useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">
        {label}
        {required && <span className="text-error">*</span>}
      </legend>
      <input
        type={type}
        name={name}
        value={value}
        ref={input}
        autoComplete={autoComplete}
        required={required}
        onChange={(e) => handleChange(e)}
        disabled={disabled}
        className={
          `input w-full focus:outline-none focus:border-2 ${
            error ? 'input-error' : 'focus:border-primary'
          } ` + className
        }
        placeholder={placeHolder}
      />
      {error && <span className="label text-error">{error}</span>}
    </fieldset>
  );
}
