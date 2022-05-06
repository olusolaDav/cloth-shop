import React from 'react'
import './form-input.scss'

export default function FormInput({label, handleChange, ...otherProps}) {
  return (
    <div className='group'>
      <input className="form-input" onChange={handleChange} {...otherProps} />

      {label ? (
        <label
          className={`${otherProps.value.lenght ? "string" : null} form-input-label`}
        >
          {label}
        </label>
      ) : null}

      
    </div>
  );
}
