"use client"
import Image from 'next/image';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
   const[isPasswordShow, setIsPasswordShow] = useState(false)
    
    return (
        <section className='login fixed top-0 left-0 z-[60] bg-gray-100 w-full h-screen'>
            <div className='container p-[60px]'>
                <div className='flex items-center gap-5'>
                    <div className="leftCol w-[50%] pl-64">
                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={60} height={60} alt='logo' />
                        <h1 className='text-[30px] font-semibold text-gray-800'>Welcome back!</h1>
                        <p className='text-[16px] font-semibold text-gray-700'>Please Enter your credential to login</p>
                        <form className='mt-5'>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'> Your Email</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your email' />
                            </div>
                            <div className='col_ mb-1'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Password</label>
                                <div className='relative'>
                                    <input type={`${isPasswordShow ? 'text': 'password'}`} className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your Password' />

                                    <Button className='!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !absolute !top-0 !right-2' onClick={()=>setIsPasswordShow(!isPasswordShow)}>
                                        {
                                            isPasswordShow ? <IoEyeOffOutline size={25} className='text-gray-800'/> :<IoEyeOutline size={25} className='text-gray-800'/>
                                        }
                                        
                                    </Button>
                                </div>                                
                            </div>
                            <Link href={"/forgot-password"} className='text-gray-800 font-bold text-[14px] underline'>Forgot password</Link>
                                            <div className='my-3'>
                                            <Button className='btn_dark w-full'> Log In </Button>
                                            </div>
                            
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Login;