'use client';
import React, { useEffect } from 'react';
import { useContext } from "react"
import { AuthContext } from "../tools/authContext"
import { useRouter } from "next/navigation";
import Link from "next/link";
import Video from './video';
import Image from 'next/image';
interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string;
    vidio: Video | null;
}




const Create = () => {
    const context = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!context?.isLoggedIn) {
            router.push('/login');
        }
    }, [context]);
    return (
        <div className=' flex w-full h-screen'>
            <div className=' w-[42] h-full bg-black flex flex-col justify-between'>
                <Link href='/' className=' flex justify-center px-2 py-2'>
                    <svg width="46" height="43" viewBox="0 0 46 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46 21.5C46 33.3741 35.7026 43 23 43C10.2975 43 3.10035e-06 33.3741 3.10035e-06 21.5C3.10035e-06 9.62588 10.2975 0 23 0C35.7026 0 46 9.62588 46 21.5Z" fill="white" />
                        <path d="M34.6252 21.0001L16.6252 32.2585V9.74179L34.6252 21.0001Z" fill="black" />
                    </svg>

                </Link>
                <div className=' flex-1 flex flex-col'>
                    
                </div>
                <div className=' text-white flex justify-center items-center px-2 py-3'>
                    <svg width="30" height="30" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6955 0C12.3285 0 11.2255 -1.49012e-08 10.3585 0.117C9.45854 0.237 8.70054 0.497 8.09854 1.098C7.57454 1.623 7.30854 2.268 7.16954 3.026C7.03454 3.763 7.00854 4.664 7.00254 5.746C7.00148 5.94491 7.07948 6.1361 7.21939 6.2775C7.35929 6.4189 7.54963 6.49894 7.74854 6.5C7.94746 6.50106 8.13864 6.42306 8.28005 6.28316C8.42145 6.14326 8.50148 5.95291 8.50254 5.754C8.50854 4.661 8.53654 3.886 8.64454 3.297C8.74954 2.731 8.91654 2.402 9.15954 2.159C9.43654 1.882 9.82554 1.702 10.5595 1.603C11.3145 1.502 12.3155 1.5 13.7505 1.5H14.7505C16.1865 1.5 17.1875 1.502 17.9425 1.603C18.6765 1.702 19.0645 1.883 19.3425 2.159C19.6185 2.436 19.7985 2.824 19.8975 3.559C19.9995 4.313 20.0005 5.315 20.0005 6.75V14.75C20.0005 16.185 19.9995 17.186 19.8975 17.942C19.7985 18.676 19.6185 19.064 19.3415 19.341C19.0645 19.618 18.6765 19.798 17.9425 19.897C17.1875 19.998 16.1865 20 14.7505 20H13.7505C12.3155 20 11.3145 19.998 10.5585 19.897C9.82554 19.798 9.43654 19.617 9.15954 19.341C8.91654 19.097 8.74954 18.769 8.64454 18.203C8.53654 17.614 8.50854 16.839 8.50254 15.746C8.50202 15.6475 8.4821 15.5501 8.44392 15.4593C8.40575 15.3685 8.35006 15.2861 8.28005 15.2168C8.21003 15.1476 8.12706 15.0928 8.03586 15.0556C7.94467 15.0184 7.84704 14.9995 7.74854 15C7.65005 15.0005 7.55263 15.0204 7.46184 15.0586C7.37104 15.0968 7.28866 15.1525 7.21939 15.2225C7.15011 15.2925 7.09531 15.3755 7.0581 15.4667C7.0209 15.5579 7.00202 15.6555 7.00254 15.754C7.00854 16.836 7.03454 17.737 7.16954 18.474C7.30954 19.232 7.57454 19.877 8.09954 20.402C8.70054 21.004 9.45954 21.262 10.3595 21.384C11.2255 21.5 12.3285 21.5 13.6955 21.5H14.8055C16.1735 21.5 17.2755 21.5 18.1425 21.384C19.0425 21.262 19.8005 21.004 20.4025 20.402C21.0045 19.8 21.2625 19.042 21.3845 18.142C21.5005 17.275 21.5005 16.172 21.5005 14.805V6.695C21.5005 5.328 21.5005 4.225 21.3845 3.358C21.2635 2.458 21.0045 1.7 20.4025 1.098C19.8005 0.496 19.0425 0.238 18.1425 0.117C17.2755 -1.49012e-08 16.1725 0 14.8055 0H13.6955Z" fill="white" />
                        <path d="M13.7506 10C13.9495 10 14.1402 10.079 14.2809 10.2197C14.4215 10.3603 14.5006 10.5511 14.5006 10.75C14.5006 10.9489 14.4215 11.1397 14.2809 11.2803C14.1402 11.421 13.9495 11.5 13.7506 11.5H2.77756L4.73856 13.18C4.88973 13.3094 4.9833 13.4936 4.99868 13.692C5.01405 13.8904 4.94998 14.0868 4.82056 14.238C4.69113 14.3892 4.50695 14.4827 4.30854 14.4981C4.11013 14.5135 3.91373 14.4494 3.76256 14.32L0.262558 11.32C0.180223 11.2496 0.114119 11.1622 0.0687945 11.0638C0.0234697 10.9654 0 10.8583 0 10.75C0 10.6417 0.0234697 10.5346 0.0687945 10.4362C0.114119 10.3378 0.180223 10.2504 0.262558 10.18L3.76256 7.18C3.83741 7.11592 3.92415 7.0672 4.01783 7.03664C4.11151 7.00608 4.2103 6.99427 4.30854 7.00188C4.40678 7.0095 4.50257 7.03639 4.59042 7.08102C4.67827 7.12565 4.75647 7.18715 4.82056 7.262C4.88464 7.33685 4.93336 7.4236 4.96392 7.51728C4.99448 7.61096 5.00629 7.70974 4.99868 7.80798C4.99106 7.90623 4.96417 8.00201 4.91954 8.08986C4.87491 8.17771 4.81341 8.25592 4.73856 8.32L2.77856 10H13.7506Z" fill="white" />
                    </svg>

                </div>
            </div>
            <div className=' w-1/5 flex bg-[#ffffff] flex-col px-1 py-2 gap-2'>
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
                <div className=' w-full bg-black text-white flex justify-center items-center px-3 py-2 rounded-xl'>
                    New VidoeAsk
                </div>
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
            <div className=' w-full flex-1 flex bg-[#ededed]'>

            </div>
        </div>
    );
};

export default Create;