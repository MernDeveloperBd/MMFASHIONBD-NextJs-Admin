"use client"
import { chatUserData } from '@/Data/Data';
import Button from '@mui/material/Button';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaRegUser, FaUsers } from 'react-icons/fa6';
import { GoSearch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const Sidebar = (props) => {
    const [isActiveTab, setIsActiveTab] = useState(0)
    const[isOpenSearch, setIsOpenSearch] = useState(false)
    const[isActive, setIsActive] = useState(null)
    const[searchTerm, setSearchTerm] = useState("")

    const filterData = chatUserData?.filter((item)=>
        item?.name?.toLowerCase().includes(searchTerm?.toLowerCase())
    ) 

    const activeUser = (user, index)=>{
        setIsActive(index)
        props.activeUser(user, index)
    }

    return (
        <aside className=' w-[25%] h-screen p-3'>
            <FaHome className="cursor-pointer" size="20"/>
            <div className='flex items-center justify-between relative my-2 gap-1'>
                <h3 className='text-[20px] font-bold'>Chat</h3>
                <Button className='!w-[33px] !min-w-[33px] !h-[33px] !rounded-full !bg-[#f1f1f1] absolute top-0 right-0 z-[55]' onClick={()=>{
                    setIsOpenSearch(!isOpenSearch)
                    setSearchTerm("")
                }} >
                    {
                        isOpenSearch === true ? <IoMdClose size={20} className='text-gray-700'/> : <GoSearch size={20} className='text-gray-700' />
                    }
                    
                    </Button>
                {isOpenSearch && <div className='search w-full h-[35px] absolute top-0 right-0 z-50'>
                    <input type="text" className='w-full h-full border-0 rounded-full focus:border-[rgba(0,0,0,0.3)] outline-none bg-white px-3 placeholder-gray-700' placeholder='Search Chat' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
                }
            </div>
            <div className='bg-gray-200 rounded-lg w-full p-2 grid grid-cols-2 gap-2'>
                <Button className={`gap-2 !py-1.5 !capitalize items-center !text-gray-700 !font-bold !rounded-lg ${isActiveTab === 0 && '!bg-white !text-violet-700'}`} onClick={() => setIsActiveTab(0)}><FaRegUser size={18} className='text-gray-700' />Personal</Button>
                <Button className={`gap-2 !py-1.5 !capitalize items-center !text-gray-700 !font-bold !rounded-lg ${isActiveTab === 1 && '!bg-white !text-violet-700'}`} onClick={() => setIsActiveTab(1)}><FaUsers size={18} className='text-gray-700' />Groups
                </Button>
            </div>
            {/* chat users */}
            <div className="userChatScrool my-4 max-h-[65vh] overflow-y-scroll">
                <div className='flex flex-col gap-2 px-1'>
                    {
                        filterData?.length !== 0 && filterData?.map((tab, index) => (
                            <div className={`tab flex items-center rounded-md gap-3 py-2 px-2 hover:bg-gray-200 cursor-pointer ${isActive === index && 'bg-gray-200'} `} key={index} onClick={()=>activeUser(tab, index)}>
                                <span className='flex items-center justify-center overflow-hidden w-[40px] h-[40px] rounded-full'>
                                    <Image src={tab?.img} width={60} height={60} alt='logo' className='mx-auto' />
                                </span>
                                <div className='info flex flex-col' title={tab?.name}>
                                    <h4 className='font-semibold text-[13px] leading-4' >{tab?.name?.substr(0, 18) + "..."}</h4>
                                    <span className='text-[12px]'>{tab?.msg?.substr(0, 18) + "..."}</span>
                                </div>
                                <span className='text-[13px] ml-auto'>{tab?.time}</span>
                            </div>
                        ))
                    }

                </div>
            </div>
            <Button className='!bg-violet-600 w-full !text-white !text-[14px]'>New chat</Button>
        </aside>
    );
};

export default Sidebar;