"use client"
import Button from '@mui/material/Button';
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import SearchBox from '../SearchBox/SearchBox';
import { MdLightMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { useContext } from 'react';
import { MyContext } from '../Context/ThemeProvider';
import Cookies from 'js-cookie';

const Header = () => {
    const context = useContext(MyContext);

    const changeTheme = () =>{
       const newTheme = context.theme === 'dark' ? 'light': 'dark';
       context.setTheme(newTheme)
       Cookies.set('theme', 'newTheme');
       document.documentElement.classList.toggle('dark', newTheme === 'dark')
    };
    
    return (
        <header className="flex w-[82%] fixed top-0 right-0 z-100 px-4 py-2 justify-between shadow-md">
            <div className='flex items-center gap-2'>
                <Button className='!min-w-[40px] !h-[40px] !w-[40px] !rounded-full !text-gray-800 hover:!bg-gray-200'> <BiMenuAltLeft size={24} /></Button>
                <SearchBox placeholder="Search here..." width="300px" />
            </div>
            <div className='flex items-center gap-2'>
                <Button className='!min-w-[35px] !h-[35px] !w-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200'> <FaRegBell size={22} /></Button>
                <Button className='!min-w-[35px] !h-[35px] !w-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200' onClick={changeTheme}> <MdLightMode size={22} /></Button>
                <div className='flex items-center gap-2'>
                    <Button className='!min-w-[35px] !h-[35px] !w-[35px] !rounded-full flex items-center justify-center !bg-medium'>
                        R
                    </Button>
                </div>

            </div>
        </header>
    );
};

export default Header;