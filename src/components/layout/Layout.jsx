import React, { useContext } from 'react';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import '../../pages/home/home.scss';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const { lang } = useSelector((state) => state.lang);
  const { authData } = useSelector((state) => state.auth);
  console.log(authData);
  return (
    <div className={lang === 'en' ? 'home' : 'home fa'}>
      <div>{localStorage.getItem('profile') && <Sidebar />}</div>
      <div className="home-container">
        {localStorage.getItem('profile') && <Navbar />}

        {children}
      </div>
    </div>
  );
};

export default Layout;
