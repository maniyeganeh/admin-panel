import React from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import '../../pages/home/home.scss';

const Layout = ({ children }) => {
  return (
    <div className="home">
      <div>
        <Sidebar />
      </div>
      <div className="home-container">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
