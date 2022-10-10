import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './list.scss';
import { useSelector } from 'react-redux';

const List = ({ sales }) => {
  console.log(sales);
  const { lang } = useSelector((state) => state.lang);
  const { prods } = useSelector((state) => state.products);

  return (
    <TableContainer
      component={Paper}
      className={lang === 'en' ? 'table' : 'table fa'}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className={lang === 'fa' && 'tableRow'}>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Tracking ID' : 'کد رهگیری'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Product' : 'محصول'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Customer' : 'مشتری'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Date' : 'تاریخ'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Amount' : 'تعداد'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Payment Method' : 'روش پرداخت'}
            </TableCell>
            <TableCell className="tableCell">
              {lang === 'en' ? 'Status' : ' وضعیت'}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prods?.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cell-wrapper">
                  {row.img && (
                    <img
                      src={row.img}
                      className={lang === 'en' ? 'image' : 'image fa'}
                      alt={row.product}
                    />
                  )}

                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
