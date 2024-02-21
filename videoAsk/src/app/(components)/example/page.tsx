'use client';
import { useEffect } from "react";
import Ask from "../ask/page";
import NavBar from "../navbar/nav";
import { useContext } from "react"
import { AuthContext } from "../tools/authContext"
import { useRouter } from "next/navigation";
import Link from "next/link";
const Demo = () => {
    const context = useContext(AuthContext);
    const router = useRouter();
    useEffect(() => {
        if (!context?.isLoggedIn) {
            router.push('/login');
        }
    }, [context]);
    return (
        <div className="w-full justify-center flex flex-col gap-2 h-full">
            <NavBar />
            <h1 className=" text-2xl font-semibold text-purple-600 border-l-4 border-purple-600 px-2 my-2 mx-1">Watch a Demo</h1>
            <Ask />
            <div className=" w-full flex justify-center items-center">
                <Link href='/create' className=" w-max px-2 py-3 text-white bg-purple-600 rounded-full font-semibold hover:text-purple-500 hover:bg-white hover:outline outline-purple-500">Create videoAsk</Link>
            </div>
        </div>
    );
};
export default Demo;