import React from "react";

function Input({ id, name, value, onChange, error, label, type }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
