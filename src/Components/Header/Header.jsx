"use client"
import Button from '@mui/material/Button';
import { BiMenuAltLeft, BiMenuAltRight } from "react-icons/bi";
import { IoMoonSharp, IoSettingsOutline } from "react-icons/io5";
import SearchBox from '../SearchBox/SearchBox';
import { MdLightMode } from "react-icons/md";
import { FaRegBell, FaRegUser } from "react-icons/fa6";
import { useContext, useState } from 'react';
import { MyContext } from '../Context/ThemeProvider';
import Cookies from 'js-cookie';
import Image from 'next/image';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { IoIosLogOut } from 'react-icons/io';

const Header = () => {
    const context = useContext(MyContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const onClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const changeTheme = () => {
        const newTheme = context.theme === 'dark' ? 'light' : 'dark';
        context.setTheme(newTheme)
        Cookies.set('theme', 'newTheme');
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
    };
    const toggleNav = () => {
        context.setIsToggleSidebar(!context.isToggleSidebar)
    }

    return (
        <header className={`flex ${context.isToggleSidebar === true ? 'w-[82%]' : 'w-[100%]'}  fixed top-0 right-0 z-[50] px-4 py-2 justify-between shadow-md bg-white`}>
            <div className='flex items-center gap-2'>
                <Button className='!min-w-[40px] !h-[40px] !w-[40px] !rounded-full !text-gray-800 hover:!bg-gray-200' onClick={toggleNav}> {context.isToggleSidebar === true ? <BiMenuAltLeft size={24} className='text-green-600' /> : <BiMenuAltRight size={24} className='text-red-600' />} </Button>
                <SearchBox placeholder="Search here..." width="300px" />
            </div>
            <div className='flex items-center gap-2'>
                <Button className='!min-w-[35px] !h-[35px] !w-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200'> <FaRegBell size={22} /></Button>
                <Button className='!min-w-[35px] !h-[35px] !w-[35px] !rounded-full !text-gray-800 hover:!bg-gray-200' onClick={changeTheme}>
                    {
                        context.theme === 'light' ? <MdLightMode size={22} /> : <IoMoonSharp size={22} />
                    }
                </Button>
                <div className='flex items-center gap-2'>
                    <Button className='!min-w-[35px] !p-0 !h-[35px] !w-[35px] !rounded-full flex items-center justify-center !bg-medium' onClick={onClickMenu}>
                        <Image className='flex items-center justify-center rounded-full' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={40} height={40} alt='customer' />
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleCloseMenu}
                        onClick={handleCloseMenu}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem>
                            <div className='flex items-center gap-2'>
                                <span><Image className='flex items-center justify-center rounded-full' src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={40} height={40} alt='customer' /></span>
                                <div className='info flex flex-col gap-0'>
                                    <h2 className='text-sm font-semibold'>{"Marifa akter"}</h2>
                                    <p className='text-xs'>{"marifa@misam.com"}</p>
                                </div>
                            </div>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleCloseMenu}>
                            <ListItemIcon>
                                <FaRegUser size={20} />
                            </ListItemIcon>
                            <span className='text-sm'>My Profile</span>
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <ListItemIcon>
                                <IoSettingsOutline size={20} />
                            </ListItemIcon>
                            <span className='text-sm'>Settings</span>                            
                        </MenuItem>
                        <MenuItem onClick={handleCloseMenu}>
                            <ListItemIcon>
                                <IoIosLogOut size={20} />
                            </ListItemIcon>
                            <span className='text-sm'>Logout</span>                            
                        </MenuItem>
                    </Menu>
                </div>

            </div>
        </header>
    );
};

export default Header;