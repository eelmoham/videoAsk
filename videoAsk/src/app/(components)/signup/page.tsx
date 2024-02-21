'use client'
import axios from "axios"
import Image from "next/image"
import Link from "next/link"
import Input from "../tools/Input"
import { useState } from "react"


const SignUp = () => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const signUp = () => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:5000/auth/register', {
            username: userName,
            email: email,
            password: password
        }).then((response) => {
            if (response.status === 201) window.location.href = '/login'
        }).catch((error) => {
                setLoading(false)
                setError(true)
            console.log(error);
        });
    }
    return (
        <div className=" flex flex-col w-full h-full items-center flex-1 ">
            <div className="w-full justify-between flex">
                <Link href='/' className="flex w-full items-center gap-1 cursor-pointer hover:opacity-50 my-2">
                    <Image src="/icons/videoPlay.svg" alt="circle icon for play video" width={37} height={37} priority />
                    <span className=" text-xl font-bold">Ask</span>
                </Link>
                <div className=" flex items-center justify-center gap-2 w-max px-2 py-2">
                    <div className=" text-sm">or</div>
                    <Link href='/login' className=" flex px-1 py-2 rounded-3xl bg-[#dedede] w-20 justify-center items-center text-[#000] font-medium hover:opacity-40 cursor-pointer">log in</Link>
                </div>

            </div>
            <div className="flex w-full h-full justify-center items-center m-auto gap-4  px-1 py-2 animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out">
                <div className=" w-full h-full flex flex-col  md:max-w-[20rem] max-w-[19rem] md:min-w-[20rem] min-w-[19rem] p-1 justify-center items-center gap-3">
                    <div className="flex w-full items-center gap-1 cursor-pointer hover:opacity-50 my-2">
                        <Image src="/icons/videoPlay.svg" alt="circle icon for play video" width={44} height={44} priority />
                        <span className=" text-2xl font-bold">Ask</span>
                    </div>
                    <p className=" text-2xl font-light w-full">Welcome back!</p>
                    <h1 className=" text-2xl font-semibold w-full">Please Sign up</h1>
                    <div className=" flex flex-col w-full gap-2">
                        <div className=" w-full flex relative">
                            <Input value={userName} seter={setUserName} type="username" name="username-login" id="username-login" placeholder="Username" />
                        </div>
                        <div className=" w-full flex relative">
                            <Input value={email} seter={setEmail} type="email" name="email-login" id="email-login" placeholder="Email" />
                        </div>
                        <div className=" w-full flex relative">
                            <Input value={password} seter={setPassword} type="password" name="password-login" id="password-login" placeholder="Password" />
                        </div>
                        {/* <div className=" text-green-400 text-sm my-1"> I forgot my password </div> */}
                        {
                            error &&
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in-out" role="alert">
                                <strong className="font-bold">Sorry!</strong>
                                <span className="block sm:inline">
                                    Please fill all the fields or check your email and password.
                                </span>
                            </div>
                        }
                        <div
                            onClick={() => {
                                setLoading(true)
                                setError(false)
                                if (!userName || !email || !password) {
                                    setError(true)
                                    setLoading(false)
                                }
                                else
                                    signUp()
                            }}
                            className=" gap-2 cursor-pointer w-full px-2 py-3 flex justify-center items-center text-white text-lg font-medium bg-[#7d00fe] rounded-xl my-3    relative overflow-hidden border border-indigo-600 shadow-5xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#825aa3e5] before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-full hover:before:w-full hover:before:opacity-80">
                            <span className=" z-50">Create Account</span>
                            {
                                loading &&
                                <span className="animate-spin animate-infinite text-white">
                                    <Image src="/material/spin-load.svg" alt="circle icon for play video" width={20} height={20} priority />
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default SignUp