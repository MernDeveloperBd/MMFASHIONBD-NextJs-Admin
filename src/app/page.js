"use client"
import DashboardBox from "@/Components/DashboardBox/DashboardBox";
import WavingHandIcon from '@mui/icons-material/WavingHand';
import { HiMiniPlus } from "react-icons/hi2";
import { Button } from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="box_dashboard mb-4 w-full h-[250px] rounded-md border border-[rgba(0,0,0,0.2)] p-4 flex items-center justify-between">
        <div className="colLeft flex flex-col gap-3">
          <h1 className="text-[30px] font-bold leading-10">Goog Morning, <br /> Marifa <WavingHandIcon /></h1>
          <p className="text-[15px] text-gray-700">Here's What happening on your store today. See the statistics at once.</p>
          <div>
            <Button className="!bg-dark !text-white !capitalize !font-bold"><HiMiniPlus className="text-white" size={22} />Add Product</Button>
          </div>
        </div>
        <div className="right p-0">
          <Image src="https://res.cloudinary.com/dpd5xwjqp/image/upload/v1757668954/Misam_Marifa_Fashion_World_oo94yx.png" width={220} height={180} priority alt='logo' className=" mx-auto" />
        </div>

      </div>
      <DashboardBox />
    </>
  );
}
