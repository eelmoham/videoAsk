'use client';

import Image from 'next/image';
import { useState } from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="">
      <Image src="/icons/burger.svg" alt="menu icon" width={20} height={20} priority
        className='hover:opacity-40'
        onClick={() => setOpen(true)}
      />
      {
        open && (
          <div className=' absolute top-0 right-0 bottom-0 w-full h-full bg-white z-50'>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">Product</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">Solutions</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">Pricing</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">Examples</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">Recources</div>
            <div 
            onClick={() => setOpen(false)}
            className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 ">close</div>
          </div>
        )

      }

    </div>
  );
}
export default SideBar;