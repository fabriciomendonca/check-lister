import React from 'react';
import { Link } from 'react-router-dom';

import InputField from './input-field';

export default ({ data, onNewItemChange, newItemValue }) => {
  return (
    <div className="checklist d-flex flex-column w-100">
      <div className="form-group m-3">
        <InputField
          type="text"
          fieldId="new-item"
          fieldName="new-item"
          fieldValue={newItemValue}
          title="Add new item"
          placeholder="Type the new item description"
          cssClasses="form-control"
          onFieldChange={onNewItemChange}/>

      </div>
      <h3 className="mx-3">{data.name}</h3>
    </div>
  );
}