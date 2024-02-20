'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  return (
    <div className={`rounded-full ${!open ? 'bg-[#dedede]' : 'bg-[#7d00fe]'} p-2 justify-center items-center text-[#000] font-medium  cursor-pointer flex md:hidden w-11 h-11`}>
      <div>
        {
          !open ? <Image src="/icons/burger.svg" alt="menu icon" width={20} height={20} priority
            className={`hover:opacity-40 w-5 h-5`}
            onClick={() => setOpen(true)}
          /> : <Image src="/icons/close.svg" alt="menu icon" width={20} height={20} priority
            className={`hover:opacity-40 w-5 h-5  animate-spin animate-once animate-ease-in-out`}
            onClick={() => setOpen(false)} />
        }
      </div>
      {
        open && (
          <div className=' absolute top-[5rem] right-0 bottom-0 w-full h-screen bg-white z-50 animate-fade-up animate-once animate-ease-in-out text-3xl font-light'>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Product</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Solutions</div>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Pricing</div>
            <Link href='/ask' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Examples</Link>
            <div className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Recources</div>
            <Link href='/login' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35 animate-fade-right animate-once animate-ease-linear">Login</Link>
          </div>
        )

      }

    </div>
  );
}
export default SideBar;