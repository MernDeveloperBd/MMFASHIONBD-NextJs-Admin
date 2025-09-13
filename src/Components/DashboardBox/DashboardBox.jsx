"use client"
import React from 'react';
import { GoGift } from "react-icons/go";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import Box from './Box';

const DashboardBox = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box title="New Orders" icon={<GoGift size={30} className='text-blue-600' />} count={"1390"} progress={true} color='#5b8af0'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Box title="Sales" icon={<AiOutlinePieChart size={30} className='text-green-600' />} count={"TK 12590"} progress={false} color='#15803d'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Box title="Revinue" icon={<BsBank size={30} className='text-violet-600' />} count={"TK 120590"} progress={true} color='#7c3aed'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Box title="Users" icon={<TbUsers size={30} className='text-blue-700' />} count={" 120"} progress={false} color='#326cec'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default DashboardBox;