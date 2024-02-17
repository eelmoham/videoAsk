// ({ children, ...props })

import Image from "next/image";
import Link from "next/link";

const Section = () => {
    return (
        <section className=" w-full md:h-screen md:flex justify-between gap-1 animate-fade-up animate-ease-linear container">
            <div className=" flex flex-col justify-center gap-3    ">
                <h1 className=" text-3xl md:text-6xl justify-center items-center flex w-[90%] mx-auto my-2 line-clamp-3">Get face to face with interactive video</h1>
                <p className="md:text-xl w-[90%] mx-auto my-2 justify-center items-center flex font-light">VideoAsk helps you streamline your conversations and build business relationships at scale.</p>
                <div className=" bg-black text-white rounded-full flex gap-1 justify-center items-center px-3 md:px-6 py-3 md:py-5 md:text-xl w-max  mx-auto my-2 ">
                    <span className=" w-full px-2">Start for free</span>
                    <Image src="/icons/arrow-icon.svg" alt="arrow-right" width={20} height={20} />
                </div>
                <span className=" w-full text-center font-light text-[#3636369f]">✌️ No credit card required.</span>
            </div>
            <div className=" w-full md:w-2/3">
                <video autoPlay loop muted src="https://videos.ctfassets.net/7907dlxc16yt/5DgixgwMT6CFWQjl44xtHR/5ce9a2a47985f6d03b33c691523e4d92/-VideoAsk_____WebRevamp_____03-_x2_optimized.mp4"></video>
            </div>
        </section>
    );
}
export default Section;