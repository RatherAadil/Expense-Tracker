import React from "react";

function Select({
  label,
  id,
  name,
  onChange,
  value,
  options,
  error,
  defaultOption,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && <option hidden>{defaultOption}</option>}

        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
