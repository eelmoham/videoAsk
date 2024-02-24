'use client';
import React, { useEffect } from 'react';
import { useContext } from "react"
import { AuthContext } from "../tools/authContext"
import { useRouter } from "next/navigation";
import Link from 'next/link';


const Create = () => {
    const context = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!context?.isLoggedIn) {
            router.push('/login');
        }
    }, [context]);
    return (
        <div className=' w-full h-full flex flex-col items-center justify-center'>
            <div
            className=' text-3xl font-bold text-black'
            >
                Coming soon !
            </div>
        </div>
    );
};

export default Create;