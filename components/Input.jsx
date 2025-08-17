import React from "react";

function Input({ className, id, name, value, onChange, error, label }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
