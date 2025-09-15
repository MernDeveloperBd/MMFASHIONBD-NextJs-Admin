"use client"
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';
import { LiaAngleDownSolid } from "react-icons/lia";
import { Collapse } from 'react-collapse';
import { IoPricetagOutline } from 'react-icons/io5';
import { IoMdStar } from 'react-icons/io';
import Rating from '@mui/material/Rating';

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
};
const DeliveryOptions = () => {
    const [isOpenDelivery, setIsOpenDelivery] = useState(true)
    return (
        <div className='box'>
            <div className='flex items-center justify-between py-3 pr-4 cursor-pointer' onClick={() => setIsOpenDelivery(!isOpenDelivery)}>
                <h4 className='text-[18px] text-gray-800 font-semibold'>Delivery Options</h4>
                <LiaAngleDownSolid size={22} className={`transition-all ${isOpenDelivery ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <div className='my-2 w-full h-[1px] bg-gray-400'></div>
            <Collapse isOpened={isOpenDelivery}>
                <div className="content pr-4">
                    <form className={`searchBox relative w-full`} >
                        <input type="text" placeholder={"Enter pin code"} className="w-full h-[35px] outline-none border border-[rgba(0,0,0,0.2)] focus:border-[rgba(0,0,0,0.4)] rounded-md px-3  text-[13px]" />
                        <button type="button" className='border-0 bg-transparent text-[14px] font-semibold absolute top-2 right-2 z-[50] cursor-pointer'>Check</button>
                    </form>
                    <p className='text-[13px] text-gray-500 mt-2'>Please enter pin code to check delivery time and pay on delivery availability</p>
                    <p className='text-[13px] text-gray-500 mt-2'>100% Original product</p>
                    <p className='text-[13px] text-gray-500 mt-2'>Pay on delivery might be available</p>
                    <p className='text-[13px] text-gray-500 mt-2'>Easy 7 days return and exchanges</p>
                    <p className='text-[13px] text-gray-500 mt-2'>Try and buy might be available for some products</p>
                </div>
            </Collapse>
        </div>
    )
};
const ProductDetailsBox = () => {
    const [isOpenProductDetailsBox, setIsOpenProductDetailsBox] = useState(true)
    return (
        <div className='box'>
            <div className='flex items-center justify-between py-3 pr-4 cursor-pointer border-b-2 border-[rgba(0,0,0,0.1)]' onClick={() => setIsOpenProductDetailsBox(!isOpenProductDetailsBox)}>
                <h4 className='text-[18px] text-gray-800 font-semibold'>Product Details</h4>
                <LiaAngleDownSolid size={22} className={`transition-all ${isOpenProductDetailsBox ? 'rotate-180' : 'rotate-0'}`} />

            </div>
            <Collapse isOpened={isOpenProductDetailsBox}>
                <div className="content pr-4 space-y-2">
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis, optio libero perferendis officiis explicabo quidem fugiat voluptatem quas soluta ex ab fugit iste quaerat aspernatur voluptates atque vitae! Similique?</p>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis, optio libero perferendis</p>
                    <h3 className='text-[15px] font-semibold'>Materials & care</h3>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis, optio libero perferendis officiis explicabo quidem fugiat voluptatem quas soluta ex ab fugit iste quaerat aspernatur voluptates atque vitae! Similique?</p>
                    <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis, optio libero perferendis</p>

                    <div className='flex items-center my-3 gap-1'>
                        <span className='flex items-center gap-1 font-semibold'><IoPricetagOutline />Tags:</span>
                        <div className='flex items-center gap-2'>
                            <span className='flex items-center justify-center py-1 px-2 bg-gray-100 rounded-sm text-[12px] border border-[rgba(0,0,0,0.1)]'>Shoe</span>
                            <span className='flex items-center justify-center py-1 px-2 bg-gray-100 rounded-sm text-[12px] border border-[rgba(0,0,0,0.1)]'>Three piece</span>
                            <span className='flex items-center justify-center py-1 px-2 bg-gray-100 rounded-sm text-[12px] border border-[rgba(0,0,0,0.1)]'>Panjabi</span>
                        </div>
                    </div>

                </div>
            </Collapse>
        </div>
    )
}
const RatingAndReviewBox = () => {
    const [isOpenRatingAndReview, setIsOpenRatingAndReview] = useState(false)
    return (
        <div className='box mb-4'>
            <div className='flex items-center justify-between py-3 pr-4 cursor-pointer border-b-2 border-[rgba(0,0,0,0.1)]' onClick={() => setIsOpenRatingAndReview(!isOpenRatingAndReview)}>
                <h4 className='text-[18px] text-gray-800 font-semibold'>Ratings and Reviews</h4>
                <LiaAngleDownSolid size={22} className={`transition-all ${isOpenRatingAndReview ? 'rotate-180' : 'rotate-0'}`} />

            </div>
            <Collapse isOpened={isOpenRatingAndReview}>
                <div className="content pr-4 space-y-1">
                    <h3 className='text-[35px] text-gray-800'>4.1</h3>
                    <p className='text-[15px] text-gray-700'>15 Verified buyers</p>
                    <div className='flex flex-col gap-2 py-1'>
                        <div className='flex items-center gap-1'>
                            <span className='font-semibold'>5</span>
                            <span><IoMdStar size={20} className='text-yellow-600' /></span>
                            <div className='progress w-[60%] h-[6px] rounded-md overflow-hidden relative bg-gray-200'>
                                <span className='absolute top-0 left-0 bg-gray-700 rounded-full w-[70%] h-full'></span>
                            </div>
                            <span className='font-semibold'>18</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-semibold'>4</span>
                            <span><IoMdStar size={20} className='text-yellow-600' /></span>
                            <div className='progress w-[60%] h-[6px] rounded-md overflow-hidden relative bg-gray-200'>
                                <span className='absolute top-0 left-0 bg-gray-700 rounded-full w-[40%] h-full'></span>
                            </div>
                            <span className='font-semibold'>9</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-semibold'>3</span>
                            <span><IoMdStar size={20} className='text-yellow-600' /></span>
                            <div className='progress w-[60%] h-[6px] rounded-md overflow-hidden relative bg-gray-200'>
                                <span className='absolute top-0 left-0 bg-gray-700 rounded-full w-[60%] h-full'></span>
                            </div>
                            <span className='font-semibold'>12</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-semibold'>2</span>
                            <span><IoMdStar size={20} className='text-yellow-600' /></span>
                            <div className='progress w-[60%] h-[6px] rounded-md overflow-hidden relative bg-gray-200'>
                                <span className='absolute top-0 left-0 bg-gray-700 rounded-full w-[20%] h-full'></span>
                            </div>
                            <span className='font-semibold'>4</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <span className='font-semibold'>1</span>
                            <span><IoMdStar size={20} className='text-yellow-600' /></span>
                            <div className='progress w-[60%] h-[6px] rounded-md overflow-hidden relative bg-gray-200'>
                                <span className='absolute top-0 left-0 bg-gray-700 rounded-full w-[10%] h-full'></span>
                            </div>
                            <span className='font-semibold'>2</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>                    
                    <ReviewBox />
                    <ReviewBox />
                    <ReviewBox />
                    </div>
                </div>
            </Collapse>
        </div>
    )
}
const ReviewBox = () => {
    return (
        <div className='flex flex-col gap-1 my-2 py-4 border-b-2 border-[rgba(0,0,0,0.2)] bg-gray-100 shadow-md p-4'>
            <h3 className='text-[16px] font-bold'>John Doe</h3>
            <p className='text-[14px] text-gray-800'>25 July, 2025</p>
            <Rating name="read-only" value={5} readOnly size='small' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quo facilis odit delectus animi distinctio voluptate totam officiis. Sit, quidem.</p>
            <div className='flex items-center gap-1 my-3'>
                <div className='imgBox overflow-hidden rounded-md'>
                    <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={60} height={70} alt='reviews image' />
                </div>
                <div className='imgBox overflow-hidden rounded-md'>
                    <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={60} height={70} alt='reviews image' />
                </div>
                <div className='imgBox overflow-hidden rounded-md'>
                    <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"} width={60} height={70} alt='reviews image' />
                </div>

            </div>
        </div>
    )
}
const SimilarProducts = () => {
    return (
        <div className='similarProducts w-full flex flex-col gap-3 mt-4'>
            <h2 className='text-[22px] font-semibold text-gray-700'>Similar Products</h2>
            <div className='grid grid-cols-5 gap-7'>
                <ProductItem img={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"}
                    title="Women trendy borkha for bangladeshi fashion"
                    price="250"
                    oldPrice="290"
                    resellingPrice="210"
                    color={["bg-[#6aa39c]", "bg-[#6bdcff]", "bg-[#5d30dd]", "bg-[#d72222]"]}
                    cat="women fashion"
                />
                <ProductItem img={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"}
                    title="Women trendy borkha for bangladeshi fashion"
                    price="250"
                    oldPrice="290"
                    resellingPrice="210"                   
                    cat="Men fashion"
                />
                 <ProductItem img={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"}
                    title="Women trendy borkha for bangladeshi fashion"
                    price="250"
                    oldPrice="290"
                    resellingPrice="210"
                    color={["bg-[#6aa39c]", "bg-[#6bdcff]", "bg-[#5d30dd]", "bg-[#d72222]"]}
                    cat="women fashion"
                />
                 <ProductItem img={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"}
                    title="Women trendy borkha for bangladeshi fashion"
                    price="250"
                    oldPrice="290"
                    resellingPrice="210"
                    color={["bg-[#6aa39c]", "bg-[#6bdcff]", "bg-[#5d30dd]", "bg-[#d72222]"]}
                    cat="Baby fashion"
                />
                 <ProductItem img={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752334130/products/xonccjvm5fcn1czbcjzl.jpg"}
                    title="Women trendy borkha for bangladeshi fashion"
                    price="250"
                    oldPrice="290"
                    resellingPrice="210"
                    color={["bg-[#6aa39c]", "bg-[#6bdcff]", "bg-[#5d30dd]", "bg-[#d72222]"]}
                    cat="Baby fashion"
                />

            </div>
        </div>
    )
}
const ProductItem = (props) => {
    return (
        <div className='productItem bg-white shadow-md'>
            <div className="image overflow-hidden rounded-md group h-[220px]">
                <Image className='flex items-center justify-center group-hover:scale-105 transition-all ' src={props.img} width={273} height={318} alt='products' />
            </div>
            <div className='info space-y-1'>
                <h3 className='text-[14px] font-semibold text-gray-800'>{props.title?.substr(0, 30) + ' ...'}</h3>
                <h3 className='text-[12px] font-semibold text-gray-600'>{props.cat}</h3>
                <div className='flex items-center gap-2'>
                    <span className='text-[15px] text-gray-800 font-bold'>TK {props.price}</span>
                    <span className='text-[12px] text-red-600 font-bold line-through'>TK {props.oldPrice}</span>
                </div>                
                    <span className='text-[12px] text-green-600 font-bold'>Reselling:TK {props.resellingPrice}</span>
                    {
                        props.color && <ProductColor/>
                    }
                    
            </div>
        </div>
    )
}

const ProductDetails = () => {
    const [value, setValue] = useState(2);
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
                    <div className='grid grid-cols-2 gap-5 sticky top-[100px]'>
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
                    <h3 className='text-[16px] font-bold text-gray-600'>Digital print panjabi</h3>
                    <div className='my-4 w-full h-[1px] bg-gray-300'></div>
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
                    <ProductColor />
                    <div className='flex flex-col gap-2 pb-4'>

                        <Button className='btn_dark w-full flex items-center gap-2'><FaShoppingCart size={18} className='text-white' />Add To Cart</Button>
                        <Button className='btn_violet w-full flex items-center gap-2'><FaHeart size={18} className='text-white' />Wishlist</Button>
                    </div>
                    <div className='my-3 w-full h-[1px] bg-gray-300'></div>
                    {/* Delivery options, Product details,Rating and review ,review */}
                    <div className='flex flex-col gap-3 mb-4'>
                        <DeliveryOptions />
                        <ProductDetailsBox />
                        <RatingAndReviewBox />
                    </div>
                    <form className='flex flex-col gap-3'>
                        <Rating
                            name="simple-controlled"
                            size='small'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <textarea type="text" className='w-full h-[125px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] hover:border-[rgba(0,0,0,0.4)] rounded-md px-2 bg-gray-100' placeholder='Review..' />
                        <div className='flex'>
                            <Button type='submit' className='btn_dark !px-4 !capitalize items-center gap-2'>Submit</Button>
                        </div>
                    </form>


                </div>
            </div>


            {/* Similar products */}
            <SimilarProducts />
        </>
    );
};

export default ProductDetails;