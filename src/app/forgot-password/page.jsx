"use client"
import Image from 'next/image';
import Button from '@mui/material/Button';
import Link from 'next/link';

const ForgotPassword = () => {

    return (
        <section className='login fixed top-0 left-0 z-[60] bg-gray-100 w-full h-screen'>
            <div className='container p-[60px]'>
                <div className='flex items-center  gap-5'>
                    <div className="leftCol w-[50%] pl-52">
                        <div className='w-full '>
                            <Image src={"https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"} width={60} height={60} alt='logo' className='mx-auto' />
                        </div>
                        <h1 className='text-[30px] font-semibold text-gray-800'>Forgot Password</h1>
                        <p className='text-[14px] font-semibold text-gray-700'>Please Enter your email to receive a verification code</p>
                        <form className='mt-4'>
                            <div className='col_ mb-4'>
                                <label className='mb-2 block text-gray-700 text-sm font-semibold'> Your Email</label>
                                <input type="text" className='w-full h-[35px] border border-[rgba(0,0,0,0.2)] outline-none focus:border-[rgba(0,0,0,0.6)] rounded-md px-2 bg-gray-200' placeholder='Enter your email' />
                            </div>
                            <div className='my-3'>
                                <Button className='btn_dark w-full'> Submit </Button>
                            </div>

                        </form>
                        <p className='text-center text-[15px] text-gray-700'>Back to  <Link href={"/login"} className='font-bold text-[15px] px-2 underline hover:text-violet-600'>Login</Link></p>
                        
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

export default ForgotPassword;