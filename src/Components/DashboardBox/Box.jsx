import React from 'react';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';
import { FaAnglesUp } from "react-icons/fa6";

const Box = (props) => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className={`w-full min-h-[120px] p-3 border border-[rgba(0,0,0,0.1)]  rounded-md py-4 bg-gray-100 dark:bg-themeDark`}>
            <div className='w-full flex justify-between'>
                <div className='flex items-center justify-between gap-3'>
                    <div className='leftCol flex items-center gap-3'>
                        {props.icon}
                        <div className='info flex flex-col'>
                            <h4> {props.title}</h4>
                            <h4 className='text-[18px] font-bold'> {props.count}</h4>
                        </div>

                    </div>

                </div>
                <div className='chart w-[70px] h-[50px]'>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={70} height={50} data={data} barGap={1}>
                            <Bar dataKey="uv" fill={props.color} barSize={3} radius={[10,10,10,10]}/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        <hr className='my-2'/>
        <div className='flex items-center gap-3'>
            <span className={`${props.progress === true ? 'text-green-700':'text-red-700'} text-[14px] font-semibold flex items-center gap-1`}>                
                <FaAnglesUp className={`${props.progress === true ? 'text-green-700':'text-red-700 -rotate-180'}`} size={14}/> +32.45%</span>
            <span className='text-[14px] text-medium '>
                {
                    props.progress === true ? 'Increased last month' : 'Decreased last month'
                }
                
                </span>
        </div>
        </div>
    );
};

export default Box;