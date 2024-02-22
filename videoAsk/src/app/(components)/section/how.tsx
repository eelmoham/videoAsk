import Image from "next/image";
import Link from "next/link";
const How = () => {
    //https://videos.ctfassets.net/7907dlxc16yt/25q2jZcKFlNgBJuTUxqw7r/2b54e53a24b962b43412709b299e8a01/-VideoAsk_____Web_Revamp_____01-_x2_optimized.mp4
    return (
        <div className=" w-full md:flex justify-between gap-1 animate-fade-up animate-ease-linear md:container">
            <div className=" w-full md:w-2/3 animate-fade-down animate-once animate-delay-500 animate-ease-linear">
                <video autoPlay loop muted src="https://videos.ctfassets.net/7907dlxc16yt/25q2jZcKFlNgBJuTUxqw7r/2b54e53a24b962b43412709b299e8a01/-VideoAsk_____Web_Revamp_____01-_x2_optimized.mp4"></video>
            </div>
            <div className=" flex flex-col justify-center gap-3 md:w-1/2 w-[90%] mx-auto">
                <h1 className=" text-3xl md:text-5xl justify-center items-center flex w-[90%] mx-auto my-2 line-clamp-3 animate-fade-down animate-once animate-delay-500 animate-ease-linear">Gather better data with video forms</h1>
                <p className="md:text-xl w-[90%] mx-auto my-2 justify-center items-center flex font-light animate-fade-down animate-once animate-delay-500 animate-ease-linear">Collecting data has never been easier. Video forms let you collect valuable contact details and feedback in an engaging, interactive, and personal way.</p>
                <Link href='/example' className=" bg-black text-white text-2xl md:text:xl rounded-full flex gap-1 justify-center items-center px-6 md:px-12 py-4 md:py-5 md:text-xl md:w-max w-max  mx-auto md:mx-7 my-2 animate-fade-down animate-once animate-delay-500 animate-ease-linear cursor-pointer hover:bg-opacity-45">
                    <span className=" w-max px-4 flex gap-1 justify-center  items-center animate-fade animate-once animate-duration-[2000ms] animate-ease-in-out">How</span>
                </Link>
            </div>
        </div>
    );
};
export default How;