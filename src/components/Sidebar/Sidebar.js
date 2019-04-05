import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className='sidebar'>
    <div className="sidebarBrand">
      <span>Pizza Creator Admin</span>
    </div>
    <div className="menu">
      <Link to='/'>HOME</Link>
      <Link to='/topping'>TOPPING</Link>
      <Link to='/size'>SIZE</Link>
    </div>
  </div>
);

export default Sidebar;