import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widgets/Widget';
import Chart from '../../components/chart/Chart';
import './home.scss';

import List from '../../components/table/List';
const Home = () => {
  return (
    <div className="home">
      {/* <Sidebar /> */}
      <div className="home-container">
        {/* <Navbar /> */}
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
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
