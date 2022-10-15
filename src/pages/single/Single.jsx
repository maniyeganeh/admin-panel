import React from 'react';
import { Avatar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/List';
import './single.scss';
import { useEffect } from 'react';
import { getUser } from '../../redux/actions/auth';
const Single = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const { lang } = useSelector((state) => state.lang);
  const {
    authData: { result },
  } = useSelector((state) => state.auth);
  console.log(result);
  return (
    <div className={lang === 'en' ? 'single' : 'single fa'}>
      <div className="top">
        <div className="left">
          <div className={lang === 'en' ? 'edit-btn' : 'edit-btn fa'}>
            {lang === 'en' ? 'Edit' : 'ویرایش'}
          </div>
          <h1 className="title">{lang === 'en' ? 'Information' : 'اطلاعات'}</h1>
          <div className="item">
            <Avatar className="avatar" sx={{ bgcolor: '#6439ff' }}>
              {result.name.slice(0, 1)}
            </Avatar>
            <div className="details">
              <h1 className="item-title">{result.name}</h1>
              <div className="detail-item">
                <span className="itemKey">Email: </span>
                <span className="itemValue">{result.email}</span>
              </div>
              {result.phone && (
                <div className="detail-item">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+{result?.phone}</span>
                </div>
              )}
              {result.address && (
                <div className="detail-item">
                  <span className="itemKey">Address: </span>
                  <span className="itemValue">{result.address}</span>
                </div>
              )}

              <div className="detail-item">
                <span className="itemKey">Role: </span>
                <span className="itemValue">{result.role}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart
            aspect={3 / 1}
            title={
              lang === 'en'
                ? 'User Spending ( Last 6 Months)'
                : 'فروش ۶ ماه گذشته'
            }
          />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">
          {lang === 'en' ? 'Last Transactions' : 'آخرین تراکنش ها'}
        </h1>
        <List sales={result.sales} />
      </div>
    </div>
  );
};

export default Single;
