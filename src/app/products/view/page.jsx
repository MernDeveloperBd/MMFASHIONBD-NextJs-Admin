"use client"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

const ProductSize = () => {
    const [selectedSize, setSelectedSize] = useState();

    const selectSize = (index) => {
        setSelectedSize(index)
    }
    return (
        <div className='py-2 flex flex-col gap-1'>
            <span className='text-[15px] font-semibold text-gray-700'>Select Size</span>
            <div className='flex items-center gap-2'>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[35px] h-[25px] rounded cursor-pointer font-semibold  ${selectedSize === 0 && 'border-[rgba(0,0,0,0.5)] bg-violet-400'}`} onClick={() => selectSize(0)}>S</span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[35px] h-[25px] rounded cursor-pointer font-semibold  ${selectedSize === 1 && 'border-[rgba(0,0,0,0.5)] bg-violet-400'}`} onClick={() => selectSize(1)}>M</span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[35px] h-[25px] rounded cursor-pointer font-semibold  ${selectedSize === 2 && 'border-[rgba(0,0,0,0.5)] bg-violet-400'}`} onClick={() => selectSize(2)}>L</span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[35px] h-[25px] rounded cursor-pointer font-semibold  ${selectedSize === 3 && 'border-[rgba(0,0,0,0.5)] bg-violet-400'}`} onClick={() => selectSize(3)}>XL</span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[35px] h-[25px] rounded cursor-pointer font-semibold  ${selectedSize === 4 && 'border-[rgba(0,0,0,0.5)] bg-violet-400'}`} onClick={() => selectSize(4)}>XXL</span>
            </div>
        </div>

    )
}

const ProductColor = () => {
    const [selectedColor, setSelectedColor] = useState();

    const selectColor = (index) => {
        setSelectedColor(index)
    }
    return (
        <div className='py-2 flex flex-col gap-1'>
            <span className='text-[15px] font-semibold text-gray-700'>Select Color</span>
            <div className='flex items-center gap-3 colorsWrap'>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[20px] h-[20px] rounded-full bg-red-600 cursor-pointer font-semibold  ${selectedColor === 0 && 'border-[rgba(0,0,0,0.5)] act'}`} onClick={() => selectColor(0)}></span>
              
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[20px] h-[20px] rounded-full bg-pink-600 cursor-pointer font-semibold  ${selectedColor === 1 && 'border-[rgba(0,0,0,0.5)] act'}`} onClick={() => selectColor(1)}></span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[20px] h-[20px] rounded-full bg-sky-600 cursor-pointer font-semibold  ${selectedColor === 2 && 'border-[rgba(0,0,0,0.5)] act'}`} onClick={() => selectColor(2)}></span>
                <span className={`flex items-center justify-center border border-[rgba(0,0,0,0.1)] w-[20px] h-[20px] rounded-full bg-black cursor-pointer font-semibold  ${selectedColor === 3 && 'border-[rgba(0,0,0,0.5)] act'}`} onClick={() => selectColor(3)}></span>
              
            </div>
        </div>

    )
}


const ProductDetails = () => {

    return (
        <>
            <div className="flex flex-col gap-1 bg-gray-200 p-3">
                <h1 className='text-[18px] font-semibold'>Shop</h1>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        E-commerce
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/products"
                    >
                        shop
                    </Link>
                    <Typography sx={{ color: 'text.primary' }}>product details id</Typography>
                </Breadcrumbs>
            </div>
            {/*  */}
            <div className="grid grid-cols-2 gap-10 mt-6">
                <div className="leftSec">
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="image overflow-hidden rounded-md group">
                            <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={273} height={318} alt='products' />
                        </div>
                        <div className="image overflow-hidden rounded-md group">
                            <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={273} height={318} alt='products' />
                        </div>
                        <div className="image overflow-hidden rounded-md group">
                            <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={273} height={318} alt='products' />
                        </div>
                        <div className="image overflow-hidden rounded-md group">
                            <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={273} height={318} alt='products' />
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="right space-y-2">
                    <h2 className='text-[25px] font-bold text-gray-800'>Casual dresses for all ages</h2>
                    <h3 className='text-[20px] font-bold text-gray-600'>Digital print panjabi</h3>
                    <div className='my-3 w-full h-[1px] bg-gray-300'></div>
                    <div className='flex items-center gap-2'>
                        <span className='text-[17px] font-bold text-gray-600'>Price: TK 250</span>
                        <span className='text-[14px] font-bold text-red-600'>TK 280</span>
                        <span className='text-[12px] font-bold text-red-600'>(7.81% Off)</span>
                    </div>
                    <span className='text-[12px] font-bold text-green-600'>Inclusive of all taxes</span>
                    <h3 className='text-[15px] font-bold text-gray-600'>Reselling Price: <span className='text-green-600'>TK 250</span></h3>

                    {/* size */}
                    <ProductSize />
                    {/* color */}
                    <ProductColor/>
                    <Button className='btn_dark w-full flex items-center gap-2'><FaShoppingCart size={18} className='text-white'/>Add To Cart</Button>
                    <Button className='btn_violet w-full flex items-center gap-2'><FaHeart size={18} className='text-white'/>Wishlist</Button>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;