import React from 'react';

const InputField = field => {
  return (
    <fieldset className={`${field.className} form-group`}>
      <label htmlFor={field.name}>{field.title}</label>
      <input {...field.input} type={field.type} className="form-control" />
      {field.meta.touched && field.meta.error && <div className="text-danger">{field.meta.error}</div>}
    </fieldset>
  )
}
export default InputField;