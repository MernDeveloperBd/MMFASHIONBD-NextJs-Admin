"use client";

import DashboardBox from "@/Components/DashboardBox/DashboardBox";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { HiMiniPlus } from "react-icons/hi2";
import { Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, Legend, CartesianGrid, } from 'recharts';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TbSocial } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import YearPickerCom from "@/Components/YearPicker/YearPicker";
import SearchBox from "@/Components/SearchBox/SearchBox";
import Orders from "./orders/page";


// custome tooltip component
const customeToolTipProfit = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#fff", border: "1px solid black", padding: "10px", borderRadius: '5px' }}>
        <p><strong>Day:</strong>{label}</p>
        <p><span style={{ color: "#22c55e" }}>UV:</span>{payload[0].value}</p>
      </div>
    )
  };
  return null
}

const customeToolTipSalesReport = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#fff", border: "1px solid black", padding: "10px", borderRadius: '5px' }}>
        <p><strong>Month:</strong>{label}</p>
        <p><span style={{ color: "#22c55e" }}>Revinue:</span>{payload[0].value}</p>
        <p><span style={{ color: "#7c3aed" }}>Expense:</span>{payload[1].value}</p>
      </div>
    )
  };
  return null
}

export default function Home() {
  const [greeting, setGreeting] = useState("Good Morning");
  const [revinue, setRevinue] = useState('monthly');
  const [selectProfit, setSelectProfit] = useState(0);

  const handleChangeRevinue = (event) => {
    setRevinue(event.target.value);
  };

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 3 && hour <= 10) {
      setGreeting("Good Morning 🌞");
    } else if (hour >= 11 && hour <= 15) {
      setGreeting("Good Afternoon ☀️");
    } else if (hour >= 16 && hour <= 17) {
      setGreeting("Good Evening 🌇");
    } else {
      setGreeting("Good Night 🌙");
    }
  }, []);

  const profitData = [
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
  const data = [
    {
      name: 'Jan',
      Revenue: 590,
      Expense: 800
    },
    {
      name: 'Feb',
      Revenue: 590,
      Expense: 800
    },
    {
      name: 'March',
      Revenue: 1350,
      Expense: 1100
    },
    {
      name: 'April',
      Revenue: 1290,
      Expense: 1050
    },
    {
      name: 'May',
      Revenue: 590,
      Expense: 800
    },
    {
      name: 'June',
      Revenue: 1190,
      Expense: 890
    },
    {
      name: 'July',
      Revenue: 590,
      Expense: 800
    },
    {
      name: 'Aug',
      Revenue: 680,
      Expense: 420
    },
    {
      name: 'Sep',
      Revenue: 590,
      Expense: 800
    },
    {
      name: 'Oct',
      Revenue: 990,
      Expense: 500
    },
    {
      name: 'Nov',
      Revenue: 190,
      Expense: 80
    },
    {
      name: 'Dec',
      Revenue: 590,
      Expense: 800
    },
  ];
  const handleSelectProfit = (index) => {
    setSelectProfit(index)
  };

  const changeYear = (date) => {
    console.log(date);

  };


  return (
    <>
      <div className="box_dashboard mb-4 w-full h-[250px] rounded-md border border-[rgba(0,0,0,0.2)] p-4 flex items-center justify-between">
        <div className="colLeft flex flex-col gap-3">
          <h1 className="text-[30px] font-bold leading-10">
            {greeting}, <br /> <span className="text-violet-700">Marifa</span> <WavingHandIcon />
          </h1>
          <p className="text-[15px] text-gray-700">
            Here's What happening on your store today. See the statistics at once.
          </p>
          <div>
            <Button className="!bg-dark !text-white !capitalize !font-bold">
              <HiMiniPlus className="text-white" size={22} /> Add Product
            </Button>
          </div>
        </div>
        <div className="right p-0">
          <Image
            src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png"
            width={220}
            height={180}
            priority
            alt='logo'
            className="mx-auto"
          />
        </div>
      </div>
      <DashboardBox />

      {/* card */}
      <div className="flex gap-2 my-4">
        {/* left */}
        <div className="card w-[65%]">
          <div className="flex items-center justify-between p-5">
            <div className="leftCol">
              <h2 className="text-[20px] font-semibold">Total Profit</h2>
              <span className="text-[18px] font-semibold">TK 32540</span>
            </div>
            <div className="rightCol">
              <Button variant="outlined" className="!capitalize" size="small">Details</Button>
            </div>
          </div>
          <div className="p-5">
            <div className="w-full rounded-xl border border-[rgba(0,0,0,0.1)] p-1 flex items-center justify-between">
              <span onClick={() => handleSelectProfit(0)} className={`tabBgColor ${selectProfit === 0 && 'bg-gray-300'}`}>5D</span>
              <span onClick={() => handleSelectProfit(1)} className={`tabBgColor ${selectProfit === 1 && 'bg-gray-300'}`}>2W</span>
              <span onClick={() => handleSelectProfit(2)} className={`tabBgColor ${selectProfit === 2 && 'bg-gray-300'}`}>1M</span>
              <span onClick={() => handleSelectProfit(3)} className={`tabBgColor ${selectProfit === 3 && 'bg-gray-300'}`}>3M</span>
              <span onClick={() => handleSelectProfit(4)} className={`tabBgColor ${selectProfit === 4 && 'bg-gray-300'}`}>6M</span>
              <span onClick={() => handleSelectProfit(5)} className={`tabBgColor ${selectProfit === 5 && 'bg-gray-300'}`}>1Y</span>
              <span onClick={() => handleSelectProfit(6)} className={`tabBgColor ${selectProfit === 6 && 'bg-gray-300'}`}>2Y</span>

            </div>
          </div>

          {/* chart */}
          <div className="w-full h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={profitData}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}></stop>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}></stop>
                  </linearGradient>
                </defs>


                <Tooltip content={customeToolTipProfit} />
                <Area type="monotone" dataKey="uv" strokeWidth={3} stroke="#7c3aed" fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Right */}
        <div className=" card w-[35%] p-5">
          <div className="flex items-center justify-between">
            <div className="right p-5">
              <h2 className="text-[20px] font-bold">Channel Review</h2>
              <span className="text-[18px] font-semibold">TK 32540</span>
            </div>
            <div className="rightCol p-5">
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                size="small"
                value={revinue}
                label="Revinue"
                onChange={handleChangeRevinue}
              >
                <MenuItem value={"weekly"}>Weekly</MenuItem>
                <MenuItem value={"monthly"}>Monthly</MenuItem>
                <MenuItem value={'annually'}>Annually</MenuItem>
              </Select>
            </div>
          </div>
          {/* chart */}
          <h3 className="px-5 flex items-center gap-2"><span className="text-[30px] font-bold">3.4%</span><span>Growth rate</span></h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="box__">
              <span className="flex w-full h-[5px] rounded-full bg-blue-400"></span>
              <span className="text-blue-700">20%</span>
            </div>
            <div className="box__">
              <span className="flex w-full h-[5px] rounded-full bg-green-500"></span>
              <span className="text-green-700">38%</span>
            </div>
            <div className="box__">
              <span className="flex w-full h-[5px] rounded-full bg-purple-500"></span>
              <span className="text-purple-700">42%</span>
            </div>
          </div>
          {/*  */}
          <div className="p-4 w-full bg-gray-200 rounded-md dard:bg-[rgba(255,255,255,0.050)] grid grid-cols-3 gap-2 mt-4">
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-400"><ShoppingCartOutlinedIcon /></span>
              <h3 className="text-[18px] font-semibold">TK 2.9K</h3>
              <p className="text-[14px]">Online Store</p>
            </div>
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-400"><BsShop size={22} /></span>
              <h3 className="text-[18px] font-semibold">TK 2.9K</h3>
              <p className="text-[14px]">Offline Store</p>
            </div>
            <div className="col_ flex items-center justify-center flex-col">
              <span className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-blue-400"><TbSocial size={22} /></span>
              <h3 className="text-[18px] font-semibold">TK 2.9K</h3>
              <p className="text-[14px]">Social Media</p>
            </div>
          </div>
        </div>
      </div>

      {/* sales chart */}
      <div className="card w-full border border-[rgba(0,0,0,0.1)] salesReport">
        <div className="p-5 flex items-center justify-between">
          <h2 className="text-[20px] font-bold px-5">Sales Report</h2>
          <div className="ml-auto"><YearPickerCom onChange={changeYear} /></div>
        </div>
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 20,
                right: 0,
                bottom: 20,
                left: 0,
              }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}></stop>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}></stop>
                </linearGradient>
              </defs>
              <CartesianGrid stroke="none" />
              <XAxis dataKey="name" scale="band" tick={{ fontSize: 14 }} />
              <YAxis tick={{ fontSize: 14 }} />
              <Tooltip content={customeToolTipSalesReport} />
              <Legend />
              <Area type="monotone" dataKey="Revenue" strokeWidth={2} fill="url(#colorValue)" stroke="#15803d" />
              <Bar dataKey="Expense" barSize={20} fill="#7c3aed" radius={[10, 10, 0, 0]} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* latest orders */}
      <div className="card w-full border border-[rgba(0,0,0,0.1)] mt-4">
       <Orders/>
      </div>
    </>
  );
}