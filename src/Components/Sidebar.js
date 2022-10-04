import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import {Link } from "react-router-dom";


export default props => {
  return (
    <Menu>
        <Link onClick={<Menu isOpen={ false } />} to="/" className="menu-item">Home</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/Appetizer" className="menu-item">Appetizers</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/MainCourse" className="menu-item">Main Courses</Link>
        <Link onClick={<Menu isOpen={ false } />}to="/Dessert" className="menu-item">Desserts</Link>
    </Menu>
  );
};

