'use client';
import React, { useEffect } from 'react';
import { useContext } from "react"
import { AuthContext } from "../tools/authContext"
import { useRouter } from "next/navigation";
import Link from "next/link";
import Video from './video';
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
        <div className=' flex w-full h-full flex-1 flex-col gap-2 justify-center items-center'>
            <h1 className=' text-3xl font-bold text-purple-500'>Coming soon</h1>
            <Link href='/'
                className=' text-purple-500 px-3 py-2 shadow-slate-400 outline-purple-500 outline rounded-full hover:bg-purple-500 hover:text-white'>Go Home
            </Link>
            {/* <div className=' flex-1 flex'>
                <Video />
            </div> */}
            
        </div>
    );
};

export default Create;