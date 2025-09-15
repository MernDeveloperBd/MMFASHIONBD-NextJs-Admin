"use client"

import { ordersData, productsData } from '@/Data/Data';
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
import { PiArrowLineUpBold } from "react-icons/pi";
import { GrFilter } from "react-icons/gr";
import { HiMiniPlus } from 'react-icons/hi2';
import { IoEyeOutline } from 'react-icons/io5';
import { MdDeleteOutline } from 'react-icons/md';
import SearchBox from '@/Components/SearchBox/SearchBox';
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Link from 'next/link';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [

    { id: 'Product', label: 'Product', minWidth: 200 },
    { id: 'sku', label: 'SKU', minWidth: 100 },
    { id: 'stockInCount', label: 'Stock', minWidth: 70 },
    {
        id: 'price',
        label: 'Price',
        minWidth: 100,
    },
    {
        id: 'oldPrice',
        label: 'Old Price',
        minWidth: 100,
    },
    {
        id: 'resellingPrice',
        label: 'Reselling Price',
        minWidth: 100,
    },
    {
        id: 'ratings',
        label: 'Ratings',
        minWidth: 70,
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 70,
    },
    {
        id: 'createdAt',
        label: 'Created at',
        minWidth: 120
    },
    {
        id: 'modifiedAt',
        label: 'Modified at',
        minWidth: 120
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 120
    },
];

const ProductsList = () => {
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
            <div className="flex items-center justify-between py-2">
                <h2 className="text-[20px] font-bold">Products</h2>
                <div className="ml-auto flex gap-1">
                    <Button className="!bg-violet-600 !text-white !capitalize !font-semibold">
                        <PiArrowLineUpBold className="text-white" size={18} /> Export
                    </Button>
                    <Button className="!bg-dark !text-white !capitalize !font-bold">
                        <HiMiniPlus className="text-white" size={22} /> Add Product
                    </Button>
                </div>
            </div>
            {/* filter */}
            <div className='flex items-center justify-between w-full mb-2'>
                <SearchBox placeholder="Search Products..." />
                <Button className="!bg-gray-800 !text-white !capitalize !font-semibold">
                    <GrFilter className="text-white" size={18} /> Filter
                </Button>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead className='bg-gray-400'>
                            <TableRow >
                                <TableCell>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, fontWeight: 'bold' }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {productsData
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((product, index) => {
                                    console.log(product);

                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                            <TableCell key={index} >
                                                <Checkbox {...label} size='small' />
                                            </TableCell>
                                            <TableCell key={product?.d} >
                                                <div className='flex items-center gap-2'>
                                                    <span><Image className='flex items-center justify-center rounded-full' src={product?.image} width={40} height={40} alt='products' /></span>
                                                    <div className='info flex flex-col gap-1'>
                                                        <h2 className='font-semibold capitalize'>{product?.title}</h2>
                                                        <h2>{product?.cat}</h2>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                {product?.sku}
                                            </TableCell>
                                            <TableCell>
                                                <div className='relative overflow-hidden rounded-full w-[80px] h-[8px] bg-gray-400'>
                                                    <span className={`absolute top-0 left-0 overflow-hidden rounded-full w-[40%] h-[100%] ${product?.stockInCount >= 20 ? "bg-green-600 " : "bg-orange-500 "}`}></span>
                                                </div>
                                                <span>{product?.stockInCount} In stock</span>
                                            </TableCell>
                                            <TableCell >
                                                Tk {product?.price}
                                            </TableCell>
                                            <TableCell >
                                                Tk {product?.oldPrice}
                                            </TableCell>
                                            <TableCell>
                                                Tk {product?.resellingPrice}
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center gap-1'>
                                                    <span>({product?.ratings?.reviews})</span>
                                                    <Rating name="read-only" value={product?.ratings?.value} readOnly size='small' precision={0.5}/>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center justify-center gap-1'>
                                                    <span className={`flex items-center justify-center w-[8px] h-[8px]  rounded-full ${product?.status === 'draft' ? 'bg-[#4e4949]' : ''} ${product?.status === 'publish' ? 'bg-green-600' : ''} ${product?.status === 'pending' ? 'bg-orange-500' : ''}`}>
                                                    </span>
                                                    <span className={`flex items-center justify-center ${product?.status === 'draft' ? 'text-[#4e4949]' : ''} ${product?.status === 'publish' ? 'text-green-600' : ''} ${product?.status === 'pending' ? 'text-orange-500' : ''}`}>{product?.status}
                                                    </span>
                                                </div>
                                            </TableCell>

                                            <TableCell >
                                                <div className='info flex flex-col gap-1'>
                                                    <h2>{product?.createdAt}</h2>
                                                    <h2>{product?.createdAt}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='info flex flex-col gap-1'>
                                                    <h2>{product?.modifiedAt}</h2>
                                                    <h2>{product?.modifiedAt}</h2>
                                                </div>
                                            </TableCell>
                                            <TableCell >
                                                <div className='info flex items-center gap-1'>
                                                    <Tooltip title="Edit" placement="top">
                                                        <Button size="small" className='!min-w-[25px] !w-[25px] !h-[25px] !text-black !bg-violet-200' variant="text"><CiEdit className='text-xl text-gray-800' /></Button>
                                                    </Tooltip>
                                                    <Tooltip title="View" placement="top">
                                                        <Link href={`/products/view`}>
                                                        <Button size="small" className='!min-w-[25px] !w-[25px] !h-[25px] !text-black !bg-violet-200' variant="text"><IoEyeOutline className='text-xl  text-green-600' /></Button>
                                                        </Link>
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

export default ProductsList;