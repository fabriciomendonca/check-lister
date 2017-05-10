import React from 'react';
import { Link } from 'react-router-dom';

export default ({data}) => {
  return (
    <div className="list">
      <h3>{data.name}</h3>
    </div>
  );
}