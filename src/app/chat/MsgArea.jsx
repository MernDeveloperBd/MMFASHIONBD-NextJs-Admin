"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { CiMenuKebab } from 'react-icons/ci';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaRegBell } from "react-icons/fa";
import { FaShare } from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { IoCloseSharp, IoImageOutline } from 'react-icons/io5';
import { FcImageFile } from "react-icons/fc";

const MsgArea = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [selectedFile, setSelectedFile] = useState(null)
    const[fileType, setFileType] = useState("")
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeFile = (e) => {
        const file = e.target.files[0]
        console.log(file);
        if(file?.type === "image/png" || file?.type === "image/jpeg" || file?.type === "image/webp"  ){
            setFileType("image")
        }
        if(file?.type === "application/x-zip-compressed" ){
            setFileType("file")
        }
        if (file) {
            setSelectedFile(file)
        }
    };
    const formatFileSize = (size) => {
        if (size < 1024) return size + "B";
        else if (size < 1024 * 1024) return (size / 1024).toFixed(1) + "KB";
        else return (size / (1024 * 1024)).toFixed(1) + "MB"
    }
    return (
        <>
            <div className='w-full h-screen border border-[rgba(0,0,0,0.2)] rounded-md'>
                <div className='header_ w-full bg-gray-100 flex items-center justify-between border-b-[1px] border-[rgba(0,0,0,0.2)] px-3 py-2'>
                    <div className='flex items-center gap-4'>
                        <span className='w-12 h-12 rounded-full overflow-hidden'>
                            <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                        </span>
                        <div className="flex flex-col">
                            <h3 className='font-bold text-[13px] text-gray-600'>{props?.currentActiveUser?.name}</h3>
                            <p className='text-[12px] text-gray-600'>Last seen recently</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className='relative'>
                        <Button className='!w-10 !min-w-10 !h-10 !rounded-full !text-gray-800 !text-[14px]' onClick={handleClick}><CiMenuKebab size={25} className='text-gray-700' /></Button>
                        {/* menu */}
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    'aria-labelledby': 'basic-button',
                                },
                            }}
                        >
                            <MenuItem onClick={handleClose} className='gap-1'><FaRegBell size={17} /> Mute</MenuItem>
                            <MenuItem onClick={handleClose} className='gap-1'><FaShare size={17} />Share</MenuItem>
                            <MenuItem onClick={handleClose} className='gap-1 !text-red-600'><RiDeleteBin6Line size={17} />Delete</MenuItem>
                        </Menu>
                    </div>
                </div>
                {/* message area */}
                <div className="w-full p-5 relative">
                    <div className={`msgAreaScroll max-h-[75vh] overflow-y-auto pr-5  ${selectedFile !== null ? 'pb-32':'pb-5'}`}>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]max-w-[300px]'>Hi, can i ase you something?</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's up?</span>
                            </div>
                        </div>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]'>I need help about shopping.</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's upls klsdfkl skdfl ldfskdfls lsflj sdlflaslfjsl flsdfa sfsd fsdf adfss dsf</span>
                            </div>
                        </div>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]'>I need help about shopping.</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's upls klsdfkl skdfl ldfskdfls lsflj sdlflaslfjsl flsdfa sfsd fsdf adfss dsf</span>
                            </div>
                        </div>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]'>I need help about shopping.</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's upls klsdfkl skdfl ldfskdfls lsflj sdlflaslfjsl flsdfa sfsd fsdf adfss dsf</span>
                            </div>
                        </div>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]'>I need help about shopping.</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's upls klsdfkl skdfl ldfskdfls lsflj sdlflaslfjsl flsdfa sfsd fsdf adfss dsf</span>
                            </div>
                        </div>
                        <div className='flex justify-end py-2'>
                            <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] min-w-[200px]'>I need help about shopping.</span>
                        </div>
                        <div className='userMsg flex gap-3 py-2'>
                            <span className='w-10 h-10 rounded-full overflow-hidden'>
                                <Image src={props?.currentActiveUser?.img} width={30} height={30} alt='logo' className='mx-auto w-full' />
                            </span>
                            <div>
                                <span className='inline-block bg-gray-100 p-2 rounded-lg text-[14px] max-w-[300px]'>Sure, What's upls klsdfkl skdfl ldfskdfls lsflj sdlflaslfjsl flsdfa sfsd fsdf adfss dsf</span>
                            </div>
                        </div>
                    </div>
                    {/* text input */}
                    <div className='absolute w-[97%] min-h-10 border border-[rgba(0,0,0,0.2)] rounded-lg overflow-hidden bg-white bottom-0 left-[1%]'>
                        {
                            selectedFile &&
                            <div className='flex p-3'>
                                <div className="flex items-center gap-4 bg-gray-100 rounded-lg  p-3 pr-12 relative">
                                    {
                                        fileType === "image" && <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Preview"
                                        className="w-12 h-12  object-contain" /> 
                                    }
                                    {
                                        fileType === "file" && <FcImageFile />
                                    }
                                    
                                    <div className='flex flex-col'>
                                        <span className='font-semibold text-gray-600 text-[14px]'>{selectedFile?.name}</span>
                                        <span className='text-[12px]'>{formatFileSize(selectedFile?.size)}</span>
                                    </div>
                            <Button className='!min-w-[30px] !-w-[30px] !h-[30px] !rounded-full top-[5px] right-1 !text-gray-800 !bg-gray-100 hover:!bg-gray-300 !absolute !p-1' onClick={()=>setSelectedFile(null)}><IoCloseSharp size={20}/></Button>
                                </div>
                            </div>

                        }
                        <div className='relative'>
                            <Button className='!min-w-[35px] !-w-[35px] !h-[35px] !rounded-full z-50 !absolute top-[5px] left-2'>
                                <IoImageOutline size={20} />
                                <input type="file" className='absolute top-0 left-0 z-50 w-full h-full opacity-0' onChange={handleChangeFile} />
                            </Button>
                            <input type="text" className='w-full h-10 outline-none px-10' placeholder='Enter a prompt here...' />
                            <Button className='!min-w-[35px] !-w-[35px] !h-[35px] !rounded-full z-50 !absolute top-1 right-1'><BsArrowUpRightCircleFill size={24} /></Button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default MsgArea;