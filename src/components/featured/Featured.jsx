import { MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import React from 'react';
import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className="title">Total saled made today</p>
        <p className="amount">$420</p>
        <p className="desc">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">Target</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="item-amount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Week</div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="item-amount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">Last Month</div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="item-amount">$12.4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
