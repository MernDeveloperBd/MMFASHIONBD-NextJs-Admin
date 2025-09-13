"use client"
import SearchBox from '@/Components/SearchBox/SearchBox';
import { ordersData } from '@/Data/Data';
import { Button, Tooltip } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import { useState } from 'react';
import { CiEdit } from "react-icons/ci";
import { IoEyeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';

const columns = [
    { id: 'orderId', label: 'Order Id', minWidth: 100 },
    { id: 'customer', label: 'customer', minWidth: 120 },
    { id: 'items', label: 'items', minWidth: 70 },
    {
        id: 'price',
        label: 'price',
        minWidth: 70,
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'createdAt',
        label: 'created',
        minWidth: 100
    },
    {
        id: 'modifiedAt',
        label: 'modified',
        minWidth: 100
    },
    {
        id: 'status',
        label: 'status',
        minWidth: 100
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 100
    },
];



const Orders = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div className='card'>
            <div className="p-5 flex items-center justify-between">
                <h2 className="text-[20px] font-bold px-5">Recent Orders</h2>
                <div className="ml-auto"><SearchBox placeholder="Search here..." width="300px" /></div>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight:'bold',backgroundColor:'#D4D4D4' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ordersData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((order) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={order?.orderId}>
                                            <TableCell key={order?.orderId} >
                                                {order?.orderId}
                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                <div className='flex items-center gap-2'>
                                                    <span><Image className='flex items-center justify-center rounded-full' src={order?.customer?.avatar} width={40} height={40} alt='customer' /></span>
                                                    <div className='info flex flex-col gap-1'>
                                                        <h2>{order?.customer?.name}</h2>
                                                        <h2>{order?.customer?.email}</h2>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                {order?.items}
                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                {order?.price}
                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                <div className='info flex flex-col gap-1'>
                                                    <h2>{order?.createdAt?.date}</h2>
                                                    <h2>{order?.createdAt?.time}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                <div className='info flex flex-col gap-1'>
                                                    <h2>{order?.modifiedAt?.date}</h2>
                                                    <h2>{order?.modifiedAt?.time}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell key={order?.orderId}>
                                                <div className='flex items-center justify-center gap-1'>
                                                    <span className={`flex items-center justify-center w-[8px] h-[8px]  rounded-full ${order?.status === 'canceled' ? 'bg-[#e96464]' : ''} ${order?.status === 'refunded' ? 'bg-green-600' : ''} ${order?.status === 'pending' ? 'bg-yellow-600' : ''}`}>
                                                    </span>
                                                    <span className={`flex items-center justify-center ${order?.status === 'canceled' ? 'text-[#e96464]' : ''} ${order?.status === 'refunded' ? 'text-green-600' : ''} ${order?.status === 'pending' ? 'text-yellow-600' : ''}`}>{order?.status}
                                                    </span>
                                                </div>


                                            </TableCell>
                                            <TableCell key={order?.orderId} >
                                                <div className='info flex items-center gap-1'>
                                                    <Tooltip title="Edit" placement="top">
                                                        <Button size="small" className='!min-w-[25px] !w-[25px] !h-[25px] !text-black !bg-violet-200' variant="text"><CiEdit className='text-xl text-gray-800' /></Button>
                                                    </Tooltip>
                                                    <Tooltip title="View" placement="top">
                                                        <Button size="small" className='!min-w-[25px] !w-[25px] !h-[25px] !text-black !bg-violet-200' variant="text"><IoEyeOutline className='text-xl  text-green-600' /></Button>
                                                    </Tooltip>
                                                    <Tooltip title="Delete" placement="top">
                                                        <Button size="small" className='!min-w-[25px] !w-[25px] !h-[25px] !text-black !bg-violet-200' variant="text"><MdDeleteOutline className='text-xl text-red-600' /></Button>
                                                    </Tooltip>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={ordersData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default Orders;