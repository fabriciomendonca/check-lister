import React from 'react';
import { Link } from 'react-router-dom';

export default props => {
  return (
    <nav className="navbar navbar-inverse bg-info d-flex flex-row w-100">
      <Link to="/" className="navbar-brand">Check lister</Link>
      <div className="navbar-nav">
        <div className="nav-item">
          <Link to="/check-lists" className="nav-link">View all checklists</Link>
        </div>
      </div>
    </nav>
  );
};