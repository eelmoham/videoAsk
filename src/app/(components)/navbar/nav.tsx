import Image from "next/image"
import Pages from "./pages"
import SideBar from "./sidebar"

const NavBar = () => {
    return (
        <div className=" w-full flex justify-between sticky top-0 items-center select-none bg-[#ffffff] px-1 py-2 z-50">
            <div className="flex justify-center items-center gap-1 cursor-pointer hover:opacity-50">
                <Image src="/icons/videoPlay.svg" alt="circle icon for play video" width={37} height={37} priority />
                <span className=" text-xl font-bold">Ask</span>
            </div>
            <div className=" hidden md:flex">
                <Pages />
            </div>
            <div className=" flex gap-3">
                <div className="px-2 py-3 rounded-3xl bg-[#dedede] w-20 justify-center items-center text-[#000] font-medium hover:opacity-40 cursor-pointer hidden md:flex">Login</div>
                <div className="px-2 py-3 rounded-3xl bg-black w-20 justify-center items-center text-[#fff] font-medium hover:opacity-40 cursor-pointer">Sign up</div>
                <div className="rounded-full bg-[#dedede] p-3 justify-center items-center text-[#000] font-medium  cursor-pointer flex md:hidden">
                    {/* <Image src="/icons/burger.svg" alt="menu icon" width={20} height={20} priority /> */}
                    <SideBar />
                </div>
            </div>
        </div>
    )
}
export default NavBar
