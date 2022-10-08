import React from 'react';
import { useSelector } from 'react-redux';
import Datatable from '../../components/datatable/Datatable';
import './list.scss';
const List = ({ type }) => {
  const { lang } = useSelector((state) => state.lang);
  return (
    <div className={lang === 'en' ? 'list' : 'list fa'}>
      <Datatable type={type} />
    </div>
  );
};

export default List;
