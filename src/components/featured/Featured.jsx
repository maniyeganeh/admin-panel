import { MoreVert } from '@mui/icons-material';
import { CircularProgressbar } from 'react-circular-progressbar';
import React from 'react';
import './featured.scss';
import 'react-circular-progressbar/dist/styles.css';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { useSelector } from 'react-redux';
const Featured = () => {
  const { lang } = useSelector((state) => state.lang);
  const amount = lang === 'en' ? 420 : parseInt(420).toLocaleString('fa-ir');
  return (
    <div className={lang === 'en' ? 'featured' : 'featured fa'}>
      <div className={lang === 'en' ? 'top' : 'top fa'}>
        <h1 className="title">
          {lang === 'en' ? 'Total Revenue' : 'کل درآمد'}
        </h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featured-chart">
          <CircularProgressbar value={70} text={'70%'} strokeWidth={5} />
        </div>
        <p className="title">
          {lang === 'en' ? 'Total saled made today' : 'کل فروش امروز'}
        </p>
        <p className="amount">${amount}</p>
        <p className="desc">
          {lang === 'en' &&
            'Previous transactions processing. Last payments may not be included.'}
        </p>
        <div className="summary">
          <div className="item">
            <div className="item-title">{lang === 'en' ? 'Target' : 'هدف'}</div>
            <div className="item-result negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="item-amount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              {lang === 'en' ? 'Last Week' : 'هفته گذشته'}
            </div>
            <div className="item-result positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="item-amount">$12.4</div>
            </div>
          </div>
          <div className="item">
            <div className="item-title">
              {lang === 'en' ? 'Last Month' : 'ماه گذشته'}
            </div>
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
