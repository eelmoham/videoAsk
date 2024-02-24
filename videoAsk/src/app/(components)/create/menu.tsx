import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MenuCreate = () => {
    return (
        <div className='w-full md:w-1/5 md:max-w-1/5 md:min-w-1/3 flex bg-[#ffffff] flex-col px-2 py-3 gap-2'>
            <select className=' w-full h-10 bg-[#ededed] mx-auto rounded-xl px-2'>
                <option className=' bg-white' value="My organization">My organization</option>
                <option className=' bg-white' value="opt1">Sales & Marketing</option>
                <option className=' bg-white' value="opt1">More Solutions</option>
            </select>

            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image src='/icons/search-icon.svg' height={30} width={30} alt="video play icon" />
                <span>Search</span>
            </div>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image src='/icons/dashboard.svg' height={30} width={30} alt="video play icon" />
                <span>Dashboard</span>
            </div>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image className='' src='/icons/interactions.svg' height={30} width={30} alt="video play icon" />
                <span>All interactions</span>
            </div>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image className='' src='/icons/address-card.svg' height={30} width={30} alt="video play icon" />
                <span>Contacts</span>
            </div>
            <Link href='/create/new' className=' w-full bg-black text-white flex justify-center items-center px-3 py-2 rounded-xl'>
                New VidoeAsk
            </Link>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image className='' src='/icons/folder-plus.svg' height={30} width={30} alt="video play icon" />
                <span>New folder</span>
            </div>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image className='' src='/icons/folder.svg' height={30} width={30} alt="video play icon" />
                <span>Default</span>
            </div>
            <div className=' flex gap-1 px-3 py-3 items-center'>
                <Image className='' src='/icons/trash.svg' height={30} width={30} alt="video play icon" />
                <span>Trash</span>
            </div>
        </div>
    );
};

export default MenuCreate;