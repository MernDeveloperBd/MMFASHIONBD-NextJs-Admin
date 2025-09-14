"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegEye } from 'react-icons/fa6';
import { FaRegTrashAlt } from "react-icons/fa";
import Editor, {
    BtnBold,
    BtnItalic,
    Toolbar
} from 'react-simple-wysiwyg';
import { CiImageOn } from 'react-icons/ci';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { IoArrowBackCircle, IoSend } from 'react-icons/io5';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'


const AddProduct = () => {
    const [html, setHtml] = useState('');
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState([]);

    const handleChangeTag = (tags) => {
        setTags(tags)
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    };

    function onChange(e) {
        setHtml(e.target.value);
    }

    return (
        <>
            <h1 className='text-[26px] font-bold'>Create Product</h1>
            <form>
                <div className='flex gap-3 mt-3 mb-8'>
                    <div className='left w-[50%] flex flex-col gap-3'>
                        <div className='card shadow-md w-full !p-4 border border-[rgba(0,0,0,0.1)] pb-5 mt-4 '>
                            <h2 className='text-[20px] font-bold mb-4'>Basic information</h2>

                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Product name</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Product name' />
                            </div>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Product Code</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Product Code' />
                            </div>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Description</label>
                                <Editor value={html} onChange={onChange} />
                            </div>
                        </div>
                        {/* Price */}
                        <div className='card shadow-md w-full !p-4 border border-[rgba(0,0,0,0.1)] pb-5 mt-4 '>
                            <h2 className='text-[20px] font-bold mb-4'>Pricing</h2>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Price</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='TK 00' />
                            </div>
                            <div className='col_ mb-4'>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="box">
                                        <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Old Price</label>
                                        <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='TK 00' />
                                    </div>
                                    <div className="box">
                                        <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Reselling Price</label>
                                        <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='TK 00' />
                                    </div>
                                </div>

                            </div>
                            <div className='col_ mb-4'>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="box">
                                        <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Cost Price</label>
                                        <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='TK 00' />
                                    </div>
                                    <div className="box">
                                        <label className='mb-2 block text-gray-700 text-sm  font-semibold'>Tax Rate %</label>
                                        <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='0' />
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* Rightr */}
                    <div className='right w-[50%] flex flex-col gap-3'>
                        <div className='card shadow-md w-full !p-4 border border-[rgba(0,0,0,0.1)] pb-5 mt-4 '>
                            <h2 className='text-[20px] font-bold mb-4'>Product Image</h2>
                            <p className='text-[13px]'>Choose a product photo or simply drag and drop upto 5 photos here.</p>
                            {/* Add photo */}
                            <div className='grid grid-cols-4 gap-3 mt-3'>
                                {/* upload image 01 */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg"} fill className="object-cover rounded-lg" alt='upload proudct' />
                                        <div className='overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-2 hidden group-hover:flex '>
                                            <FaRegEye size={18} className='text-white cursor-pointer' /> <FaRegTrashAlt size={16} className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                {/* upload image 02 */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg"} fill className="object-cover rounded-lg" alt='upload proudct' />
                                        <div className='overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-2 hidden group-hover:flex '>
                                            <FaRegEye size={18} className='text-white cursor-pointer' /> <FaRegTrashAlt size={16} className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                {/* upload image 03 */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg"} fill className="object-cover rounded-lg" alt='upload proudct' />
                                        <div className='overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-2 hidden group-hover:flex '>
                                            <FaRegEye size={18} className='text-white cursor-pointer' /> <FaRegTrashAlt size={16} className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                {/* upload image 04 */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg"} fill className="object-cover rounded-lg" alt='upload proudct' />
                                        <div className='overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-2 hidden group-hover:flex '>
                                            <FaRegEye size={18} className='text-white cursor-pointer' /> <FaRegTrashAlt size={16} className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>
                                {/* upload image 05 */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1752337985/profile/zoe6nevgkroxp0peofvf.jpg"} fill className="object-cover rounded-lg" alt='upload proudct' />
                                        <div className='overlay w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] z-50 items-center justify-center gap-2 hidden group-hover:flex '>
                                            <FaRegEye size={18} className='text-white cursor-pointer' /> <FaRegTrashAlt size={16} className='text-white cursor-pointer' />
                                        </div>
                                    </div>
                                </div>

                                {/* upload box */}
                                <div className="box p-1 border border-[rgba(0,0,0,0.1)] rounded-md  relative group">
                                    <div className='relative overflow-hidden w-full h-[100px] rounded-md '>
                                        <div className='uploadBox p-1 border-2 border-dashed border-[rgba(0,0,0,0.1)] hover:border-[rgba(63,105,255,0.1)] rounded-md w-full h-full flex items-center justify-center flex-col gap-0 cursor-pointer relative'>
                                            <CiImageOn size={25} />
                                            <span className='text-gray-600 text-[12px] text-center'>drop your image here or,</span>
                                            <span className='text-violet-600 text-[12px] text-center font-semibold'>Click to browse</span>
                                            <input type="file" className='absolute top-0 left-0 w-full h-full z-50 opacity-0' />
                                        </div>

                                    </div>

                                </div>

                            </div>
                            {/* bottom text */}
                            <p className='text-[13px] mt-3 text-gray-700 capitalize'>Image formats: .jpg, .jpeg, .png, Prefered size: 1:1, file size is restricted to a maximum of 500 kb</p>
                        </div>
                        {/* category and tags */}
                        <div className='card shadow-md w-full !p-4 border border-[rgba(0,0,0,0.1)] pb-5 mt-4 '>
                            <h2 className='text-[20px] font-bold mb-4'>Attribute</h2>
                            {/* Category*/}
                            <div className="col_ mb-4">
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Category</label>
                                <Select
                                    value={category}
                                    onChange={handleChangeCategory}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                    className='w-full'
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"womenFashion"}>Women Fashion</MenuItem>
                                    <MenuItem value={"menFashion"}>Men Fashion</MenuItem>
                                    <MenuItem value={"babyFashion"}>Baby Fashion</MenuItem>
                                </Select>
                            </div>
                            <div className="col_ mb-4">
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Tags</label>
                                <TagsInput value={tags} onChange={handleChangeTag} />
                            </div>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Brand name</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Brand name' />
                            </div>

                        </div>
                    </div>

                </div>
                {/* bottom button */}
                <div className='actionWrap w-[82%] h-[60px] fixed bottom-0 right-0 z-[99] bg-gray-200 shadow-md flex items-center justify-between gap-5 px-4'>
                    <Button variant="outlined" className='!text-red-700 !font-bold !outline-none' startIcon={<IoArrowBackCircle />}>
                        Back
                    </Button>
                    <Button variant="contained" endIcon={<IoSend />}>
                        Save Product
                    </Button>
                </div>
            </form>
        </>
    );
};

export default AddProduct;