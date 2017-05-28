import React from 'react';
import { Link } from 'react-router-dom';

const renderLinks = ({authenticated}) => {
  if (authenticated) {
    return [
      <li key="my_checklists" className="nav-item mx-3"><Link to="/check-lists" className="nav-link">My checklists</Link></li>,
      <li key="signout" className="nav-item mx-3"><Link to="/signout" className="nav-link">Sign out</Link></li>
    ];
  }

  return [
    <li key="signin" className="nav-item mx-3"><Link to="/signin" className="nav-link">Sign in</Link></li>,
    <li key="signup" className="nav-item mx-3"><Link to="/signup" className="nav-link">Sign up</Link></li>
  ];
}
export default props => {
  return (
    <nav className="navbar navbar-inverse fixed-top bg-info d-flex flex-row">
      <Link to="/" className="navbar-brand">Check lister</Link>
      <ul className="navbar-nav d-flex flex-row">
        {renderLinks(props)}
      </ul>
    </nav>
  );
};