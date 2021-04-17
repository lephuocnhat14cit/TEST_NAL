/* eslint-disable no-nested-ternary */
// @flow
// libs
import React from 'react';

export const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <div className="nav-link">
            <i className="ti-shield menu-icon" />
            <span className="menu-title">Dashboard</span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
