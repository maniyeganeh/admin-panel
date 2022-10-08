import React, { useState } from 'react';

import { DataGrid } from '@mui/x-data-grid';
import './datatable.scss';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Datatable = () => {
  const { lang } = useSelector((state) => state.lang);
  const {
    authData: { result },
  } = useSelector((state) => state.auth);
  console.log(result);
  const [data, setData] = useState(userRows);
  const deletHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>

            <div
              className="deleteButton"
              onClick={() => deletHandler(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="data-table">
      {result.role === 'admin' && (
        <div className="data-table-title">
          {lang === 'en' ? '   Add New User' : 'کاربر جدید اضافه کنید'}
          <Link to="/users/new" className="link">
            {lang === 'en' ? 'Add New' : 'اضافه کنید'}
          </Link>
        </div>
      )}

      <DataGrid
        className="data-grid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
