import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import './home.scss';

import List from '../../components/table/List';
import { useSelector } from 'react-redux';
const Home = () => {
  const { lang } = useSelector((state) => state.lang);
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="home-container">
        {/* <Navbar /> */}
        <div className={lang === 'en' ? 'widgets' : 'widgets fa'}>
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className={lang === 'en' ? 'charts' : 'charts fa'}>
          <Featured />
          <Chart aspect={2 / 1} title={'Last 6 Months (Revenue)'} />
        </div>
        <div className="list-container">
          <div className="list-title">Latest Transactions</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
