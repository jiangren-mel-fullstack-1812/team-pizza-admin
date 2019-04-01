import React from 'react';
import './Sidebar.css';

const Sidebar = () => (
  <div className='sidebar'>
    <div className="sidebarBrand">
      <span>Pizza Creator Admin</span>
    </div>
    <div className="menu">
      <a href='#'><span>SIZE</span></a>
      <a href='#'><span>TOPPING</span></a>
    </div>
  </div>
);

export default Sidebar;