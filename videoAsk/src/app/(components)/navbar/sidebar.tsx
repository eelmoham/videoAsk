'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useContext } from "react"
import { AuthContext } from "../tools/authContext"

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const context = useContext(AuthContext);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);
  return (
    <div 
    onClick={() => setOpen(!open)}
    className={`rounded-full ${!open ? 'bg-[#dedede]' : 'bg-[#7d00fe]'} p-2 justify-center items-center text-[#000] font-medium  cursor-pointer flex md:hidden w-11 h-11`}>
      <div>
        
        {
          !open ? <Image src="/icons/burger.svg" alt="menu icon" width={20} height={20} priority
            className={`hover:opacity-40 w-5 h-5`}
          /> : <Image src="/icons/close.svg" alt="menu icon" width={20} height={20} priority
            className={`hover:opacity-40 w-5 h-5  animate-spin animate-once animate-ease-in-out`}
            />
        }
      </div>
      {
        open && (
          <div className=' absolute top-[5rem] right-0 bottom-0 w-full h-screen bg-white z-50 animate-fade-up animate-once animate-ease-in-out text-2xl font-light flex flex-col'>
            <Link href='/' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Home</Link>
            {/* <Link href='/' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Solutions</Link>
            <Link href='/' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Pricing</Link> */}
            <Link href='/example' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Examples</Link>
            <Link href='/' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">about</Link>
            {
              context?.isLoggedIn ?
              <div
                onClick={() => { context?.logout(); }}
                className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Log out</div> : 
              <Link href='/login' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-20 animate-fade-right animate-once animate-ease-linear ">Login</Link>}
          </div>
        )
      }
    </div>
  );
}
export default SideBar;