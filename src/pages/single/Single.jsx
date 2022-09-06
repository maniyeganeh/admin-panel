import React from 'react';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';
import './single.scss';
const Single = () => {
  return (
    <div className="single">
      <div className="top">
        <div className="left">
          <div className="edit-btn">Edit</div>
          <h1 className="title">Information</h1>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?cs=srgb&dl=pexels-harsch-shivam-2007647.jpg&fm=jpg"
              alt="avatar"
            />
            <div className="details">
              <h1 className="item-title">Jon Doe</h1>
              <div className="detail-item">
                <span className="itemKey">Email: </span>
                <span className="itemValue">jondoe@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="itemKey">Phone: </span>
                <span className="itemValue">+1 23112324</span>
              </div>
              <div className="detail-item">
                <span className="itemKey">Address: </span>
                <span className="itemValue">Tehran , Sanaat sq</span>
              </div>
              <div className="detail-item">
                <span className="itemKey">Country: </span>
                <span className="itemValue">Iran</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title={'User Spending ( Last 6 Months)'} />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <List />
      </div>
    </div>
  );
};

export default Single;
