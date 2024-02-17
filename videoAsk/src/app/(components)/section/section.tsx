// ({ children, ...props })

import Image from "next/image";
import Link from "next/link";

const Section = () => {
    return (
        <section className=" w-full md:flex justify-between gap-1 animate-fade-up animate-ease-linear md:container">
            <div className=" flex flex-col justify-center gap-3 md:w-1/2 w-[90%] mx-auto">
                <h1 className=" text-3xl md:text-7xl justify-center items-center flex w-[90%] mx-auto my-2 line-clamp-3 animate-fade-down animate-once animate-delay-500 animate-ease-linear">Get face to face with interactive video</h1>
                <p className="md:text-xl w-[90%] mx-auto my-2 justify-center items-center flex font-light animate-fade-down animate-once animate-delay-500 animate-ease-linear">VideoAsk helps you streamline your conversations and build business relationships at scale.</p>
                <div className=" bg-black text-white text-2xl md:text:xl rounded-full flex gap-1 justify-center items-center px-3 md:px-6 py-4 md:py-5 md:text-xl md:w-max w-full  mx-auto md:mx-7 my-2 animate-fade-down animate-once animate-delay-500 animate-ease-linear">
                    <span className=" w-full px-2 flex gap-1 justify-center  items-center">Start for free <Image src="/icons/arrow-icon.svg" alt="arrow-right" width={20} height={20} /></span>
                    
                </div>
                <span className=" w-full text-center font-light text-[#3636369f] animate-fade-down animate-once animate-delay-500 animate-ease-linear">✌️ No credit card required.</span>
            </div>
            <div className=" w-full md:w-2/3 animate-fade-down animate-once animate-delay-500 animate-ease-linear">
                <video autoPlay loop muted src="https://videos.ctfassets.net/7907dlxc16yt/5DgixgwMT6CFWQjl44xtHR/5ce9a2a47985f6d03b33c691523e4d92/-VideoAsk_____WebRevamp_____03-_x2_optimized.mp4"></video>
            </div>
        </section>
    );
}
export default Section;