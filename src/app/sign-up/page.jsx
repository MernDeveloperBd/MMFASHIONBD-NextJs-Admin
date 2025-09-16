"use client"
import Image from 'next/image';
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { useState } from 'react';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
    const [isPasswordShow, setIsPasswordShow] = useState(false)
    const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false)

    return (
        <section className='login fixed top-0 left-0 z-[60] bg-gray-100 w-full h-screen'>
            <div className='container p-[60px]'>
                <div className='flex items-center  gap-5'>
                    <div className="leftCol w-[50%] pl-52">
                        <div className='w-full '>
                            <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={60} height={60} alt='logo' className='mx-auto' />
                        </div>
                        <h1 className='text-[30px] font-semibold text-gray-800'>Welcome back!</h1>
                        <p className='text-[16px] font-semibold text-gray-700'>Please Enter your credential to login</p>
                        <form className='mt-5'>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'> Your Name</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your Name' />
                            </div>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'> Your Email</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your email' />
                            </div>
                            <div className='col_ mb-1'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Password</label>
                                <div className='relative'>
                                    <input type={`${isPasswordShow ? 'text' : 'password'}`} className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your Password' />

                                    <Button className='!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !absolute !top-0 !right-2' onClick={() => setIsPasswordShow(!isPasswordShow)}>
                                        {
                                            isPasswordShow ? <IoEyeOffOutline size={25} className='text-gray-800' /> : <IoEyeOutline size={25} className='text-gray-800' />
                                        }

                                    </Button>
                                </div>
                            </div>
                            <div className='col_ mb-1'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'>Confirm Password</label>
                                <div className='relative'>
                                    <input type={`${isConfirmPasswordShow ? 'text' : 'password'}`} className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Confirm Password' />

                                    <Button className='!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !absolute !top-0 !right-2' onClick={() => setIsConfirmPasswordShow(!isConfirmPasswordShow)}>
                                        {
                                            isConfirmPasswordShow ? <IoEyeOffOutline size={25} className='text-gray-800' /> : <IoEyeOutline size={25} className='text-gray-800' />
                                        }

                                    </Button>
                                </div>
                            </div>
                            <Link href={"/forgot-password"} className='text-gray-800 font-bold text-[14px] underline'>Forgot password</Link>
                            <div className='my-3'>
                                <Button className='btn_dark w-full'> Sign Up</Button>
                            </div>

                        </form>
                        <p className='text-center text-[15px] text-gray-700'>Already have an account? <Link href={"/login"} className='font-bold text-[15px] px-2 underline hover:text-violet-600'>Login</Link></p>
                        <div className='my-3 flex items-center justify-between gap-2'>
                            <span className='bg-gray-400 h-[1px] block w-20'></span>
                            <span className=''>Or, Continue with</span>
                            <span className='bg-gray-400 h-[1px] block w-20'></span>
                        </div>
                        <div className='my-3 flex items-center justify-center'>
                            <Button variant="outlined" className='!font-semibold'> <FcGoogle size={20} />Google </Button>
                        </div>
                    </div>
                    {/* right */}
                    <div className="leftCol w-[50%] h-[70vh] overflow-hidden rounded-md">
                        <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={500} height={700} alt='logo' />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignUp;