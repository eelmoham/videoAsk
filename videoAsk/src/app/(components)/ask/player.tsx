import { FC, useState } from "react";
import dynamic from 'next/dynamic';
import Image from "next/image";

const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string;
    vidio: Video | null;
}
interface IPlayer {
    url: string;
    options: Option[];
    setUrl?: any;
}


const Player: FC<IPlayer> = ({ url, options, setUrl }) => {
    const [play, setPlay] = useState(false);
    return (
        <div className="flex flex-1 flex-col items-center gap-4 justify-center w-full h-full animate-fade-up animate-duration-[2000ms] animate-ease-out ">
            <div className=" relative w-full flex h-full justify-center items-center">
                <div className=" w-full h-full relative flex justify-center items-center">
                    <DynamicReactPlayer
                        url={url}
                        // url="https://res.cloudinary.com/drqxjhddm/video/upload/v1708702482/videoAsk/ipaisn5i5iqnk0uabzah.mp4"
                        autoPlay={true}
                        playing={play}
                        width={"100%"}
                        height={"100%"}

                        muted={true}
                    />
                    {!play&&<div onClick={()=>setPlay(true)} className=" absolute w-max text-white font-bold bg-[#ffffff68] px-3 py-3 z-[999999999] rounded-full hover:bg-[#ffffff28] cursor-pointer"> <Image src='/icons/videoPlay.svg' height={30} width={30} alt="video play icon" /> </div>}
                </div>
                <div className=" absolute top-0 bottom-[10%] right-0 left-0 flex justify-end items-center flex-col  gap-2">
                    {
                        options.map((option, index) => {
                            return (
                                option.vidio &&
                                <div key={index}
                                    onClick={() => {
                                        if (option.vidio?.url)
                                            setUrl(option.vidio?.options, option.vidio.url)
                                    }}
                                    className="w-max flex justify-center px-3 py-2 rounded-full bg-inherit hover:text-white hover:outline-purple-500 hover:outline hover:bg-[#00000059] bg-purple-600 text-white  transition-all duration-500 ease-in-out cursor-pointer">
                                    {option.text}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Player;