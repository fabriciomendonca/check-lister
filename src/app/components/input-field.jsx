import React from 'react';

const InputField = ({
  fieldId,
  fieldName,
  title,
  fieldValue,
  fieldType,
  placeholder,
  cssClasses,
  onValueChange
}) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldId} className="form-label">{title}</label>
      <input 
        id={fieldId}
        name={fieldName}
        type={fieldType}
        className={`form-input ${cssClasses}`}
        value={fieldValue}
        placeholder={placeholder}
        onChange={onValueChange}/>
    </div>
  );
}

export default InputField;