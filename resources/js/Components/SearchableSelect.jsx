import { useState } from 'react';

export default function SearchableSelect({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  error = '',
  placeholder = 'Cari...',
  className = '',
}) {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  // filter opsi sesuai input
  const filtered = options.filter((o) => o.name.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (option) => {
    onChange(option.id); // simpan id ke parent
    setSearch(option.name); // tampilkan nama di input
    setOpen(false);
  };

  return (
    <fieldset className="fieldset w-full relative">
      <legend className="fieldset-legend">
        {label}
        {required && <span className="text-error">*</span>}
      </legend>

      <input
        type="text"
        name={name}
        value={search}
        disabled={disabled}
        required={required}
        onChange={(e) => setSearch(e.target.value)}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 200)}
        className={`input w-full focus:outline-none focus:border-2 ${
          error ? 'input-error' : 'focus:border-primary'
        } ${className}`}
        placeholder={placeholder}
      />

      {open && (
        <ul className="menu bg-base-100 border border-neutral-400 rounded-box absolute top-12 w-full max-h-40 overflow-y-auto z-10">
          {filtered.length > 0 ? (
            filtered.map((option) => (
              <li key={option.id}>
                <button
                  type="button"
                  onClick={() => handleSelect(option)}
                  className="justify-start"
                >
                  {option.name}
                </button>
              </li>
            ))
          ) : (
            <li className="text-neutral-700 px-2 py-2">Tidak ditemukan</li>
          )}
        </ul>
      )}

      {error && <span className="label text-error">{error}</span>}
    </fieldset>
  );
}
