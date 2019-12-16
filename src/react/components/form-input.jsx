import React from "react";
import "css/components/_custom-form.scss";

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className='form-input'>
      <input className='input' onChange={handleChange} {...otherProps} />
      {/*if label exists */}
      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : ""} label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
