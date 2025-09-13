"use client"
import { sidebarMenu } from '@/Data/Data';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';
import { IoIosArrowDown } from "react-icons/io";
import { Collapse } from 'react-collapse';
import { useContext, useState } from 'react';
import { MyContext } from '../Context/ThemeProvider';

const Sidebar = () => {
    const [isToggleSubMenu, setIsToggleSubMenu] = useState(false)
    const [toggleIndex, setToggleIndex] = useState(null)
    const context = useContext(MyContext);
    const toggleTab = (index) => {
        setToggleIndex(index);
        setIsToggleSubMenu(!isToggleSubMenu)
    };
    return (
        <aside className={`${context.isToggleSidebar === true ? 'w-[18%]':'w-[0%] hidden'}  h-screen max-h-screen overflow-y-scroll overflow-x-hidden p-3 border-r-[1px] border-[rgba(0,0,0,0.2)] fixed top-0 left-0 `}>
            <Link href='/'>
                {
                    context.theme === 'light' && <Image src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png" width={80} height={40} priority alt='logo' className="w-1/3 h-16 mx-auto" />
                }
            </Link>
            {/* sidebar menu */}
            <div className="sidebarMenu mt-4">
                {
                    sidebarMenu?.length !== 0 &&
                    <ul className="w-full">
                        {
                            sidebarMenu?.map((menu, index) => {
                                return (
                                    <li className='w-full relative group' key={index} >
                                        {
                                            menu?.items?.length > 0 ? <Button variant="text" className={`w-full !capitalize text-left !justify-start group-hover:!bg-gray-200 !text-gray-700 gap-2 dark:!text-gray-100 !font-semibold !text-[13px] !py-[8px] ${toggleIndex === index && isToggleSubMenu === true ? '!bg-gray-200' : ''}`} onClick={() => toggleTab(index)}>{menu?.icon}{menu?.title}</Button>
                                                :
                                                <Link href={menu?.href}><Button variant="text" className='w-full !capitalize text-left !justify-start group-hover:bg-gray-200 !text-gray-700 gap-2 dark:!text-gray-100 !font-semibold !text-[13px] !py-[8px]'>{menu?.icon}{menu?.title}</Button></Link>
                                        }

                                        {
                                            menu?.items?.length > 0 &&

                                            <Button className='!absolute !min-w-[30px] !w-[30px] !rounded-full !h-[30px] z-[50] !top-[5px] !right-[10px] flex items-center cursor-pointer !text-medium dark:!text-white' onClick={() => toggleTab(index)}>
                                                <IoIosArrowDown size={18} className={`${toggleIndex === index && isToggleSubMenu === true ? 'rotate-180' : ''}`} />

                                            </Button>

                                        }
                                        {/* submenu */}
                                        {
                                            menu?.items?.length !== 0 &&
                                            <Collapse isOpened={toggleIndex === index ? isToggleSubMenu : false}>
                                                <div className='submenu w-full flex flex-col'>
                                                    {
                                                        menu?.items?.map((item, index_) => {
                                                            return (
                                                                <Link className='block w-full ' key={index_} href={item?.href}>
                                                                    <Button className='!text-[12px] hover:bg-gray-300 w-full !text-left !justify-start !text-medium !pl-4 gap-1 !capitalize'>
                                                                        <span className='w-[5px] h-[5px] rounded-full bg-medium '></span>
                                                                        {item?.title}</Button>
                                                                </Link>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </Collapse>
                                        }

                                    </li>
                                )
                            })
                        }
                    </ul>
                }

            </div>
        </aside>
    );
};

export default Sidebar;