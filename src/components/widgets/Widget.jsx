import React from 'react';
import './widget.scss';
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  PersonOutline,
  ShoppingCartOutlined,
  MonetizationOnOutlined,
  AccountBalanceOutlined,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
const Widget = ({ type }) => {
  const { lang } = useSelector((state) => state.lang);
  let data;
  const amount = lang === 'en' ? 100 : parseInt(100).toLocaleString('fa-ir');
  const diff = lang === 'en' ? 20 : parseInt(20).toLocaleString('fa-ir');
  switch (type) {
    case 'user':
      data = {
        title: 'USERS',
        faTitle: 'کاربران',
        isMoney: false,
        link: lang === 'en' ? 'See all users' : 'مشاهده تمام کاربران',
        icon: (
          <PersonOutline
            className="icon"
            style={{ color: 'crimson', backgroundColor: 'rgba(255 , 0,0,0.2)' }}
          />
        ),
      };
      break;
    case 'order':
      data = {
        title: 'ORDERS',
        faTitle: 'سفارشات',
        isMoney: false,
        link: lang === 'en' ? 'View all orders' : 'مشاهده سفارشات',
        icon: (
          <ShoppingCartOutlined
            className="icon"
            style={{
              color: 'goldenrod',
              backgroundColor: 'rgba(218 , 165,32,0.2)',
            }}
          />
        ),
      };
      break;
    case 'earnings':
      data = {
        title: 'EARNINGS',
        faTitle: 'درآمد',
        isMoney: true,
        link: lang === 'en' ? 'View net earning' : 'مشاهده جزییات',
        icon: (
          <MonetizationOnOutlined
            className="icon"
            style={{ color: 'green', backgroundColor: 'rgba(0 , 128,0,0.2)' }}
          />
        ),
      };
      break;
    case 'balance':
      data = {
        title: 'BALANCE',
        faTitle: 'بالانس',
        isMoney: true,
        link: lang === 'en' ? 'See details' : 'مشاهده جزییات',

        icon: (
          <AccountBalanceOutlined
            className="icon"
            style={{
              color: 'purple',
              backgroundColor: 'rgba(128 , 0,128,0.2)',
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className={lang === 'en' ? 'widget' : 'widget fa'}>
      <div className="left">
        <span className="title">
          {lang === 'en' ? data.title : data.faTitle}
        </span>
        <span className="counter">
          {data.isMoney && '$'}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive  ">
          <KeyboardArrowUp />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
