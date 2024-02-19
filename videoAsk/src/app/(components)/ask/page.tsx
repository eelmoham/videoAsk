'use client';
import { FC, useState, useEffect } from "react";
// import Player from "./player";
import dynamic from 'next/dynamic';

const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });
interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string;
    vidio: Video | null;
}

interface AskProps {
    videos: Video[];
}

const videoLinks = ["https://youtu.be/B4SX5FFE2XE?si=gZxq4NxgXJlZehiZ",
    "https://youtu.be/vnFybzZtVoQ?si=s05FnYS84z6D7Uxn",
    "https://youtu.be/bz_DPnBEffw?si=-O_eSQIFh0DVJqhp",
    "https://youtu.be/g8tquaFDAgI?si=sDNIvlYWFvUnNkJj",
    "https://youtu.be/1-kC0Wg9C6k?si=9xK3Y-p38nQYH-Pt"]

const generateRandomOptions = (depth: number): Option[] => {
    const options: Option[] = [];
    for (let i = 0; i < depth; i++) {
        options.push({
            text: `Option-${i}`,
            vidio: i < depth - 1 ? {
                url: videoLinks[Math.floor(Math.random() * 4)],
                options: generateRandomOptions(depth - 1)
            } : null
        });
    }
    return options;
}

const generateRandomVideos = (num: number, depth: number): Video[] => {
    const videos: Video[] = [];
    for (let i = 0; i < num; i++) {
        videos.push({
            url: 'https://videos.ctfassets.net/7907dlxc16yt/5DgixgwMT6CFWQjl44xtHR/5ce9a2a47985f6d03b33c691523e4d92/-VideoAsk_____WebRevamp_____03-_x2_optimized.mp4',
            // url: 'https://youtu.be/oZDwcrWRQxw?si=jvajGYMwABwzdJo_',
            options: generateRandomOptions(depth)
        });
    }
    return videos;
}
const Ask: FC<AskProps> = () => {
    const videos: Video[] = generateRandomVideos(5, 3);
    const [url, setUrl] = useState<string>(videos[0].url);



    return (
        <div className="flex flex-1 flex-col items-center gap-4 justify-center ">
            {/* <h1>Ask  {url}</h1> */}
            <div className=" relative w-full flex h-full justify-center items-center ">
                {/* <video className="w-full" autoPlay loop muted src={url}></video> */}
                <DynamicReactPlayer
                    url={url}
                    autoplay={true}
                />

                <div className=" absolute top-0 bottom-5 right-0 left-0 flex justify-end items-center flex-col  gap-2">
                    {
                        videos[0].options.map((option, index) => {
                            return (
                                option.vidio?.url &&
                                <div key={index}
                                    onClick={() => {
                                        if (option.vidio?.url)
                                            setUrl(option.vidio?.url || '');
                                       
                                    }}
                                    className="w-1/3 flex justify-center px-3 py-2 rounded-full bg-inherit text-purple-600 border-purple-500 border
                                hover:bg-purple-600 hover:text-white hover:border-transparent transition-all duration-500 ease-in-out cursor-pointer">
                                    {option.text}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default Ask



{
    /*
    
    interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string;
    vidio: Video | null;
}

interface AskProps {
    videos: Video[];
}

const generateRandomOptions = (depth: number): Option[] => {
    const options: Option[] = [];
    for (let i = 0; i < depth; i++) {
        options.push({
            text: `Option ${i}`,
            vidio: i < depth - 1 ? {
                url: `https://www.youtube.com/watch?v=${Math.random().toString(36).substring(7)}`,
                options: generateRandomOptions(depth - 1)
            } : null
        });
    }
    return options;
}

const generateRandomVideos = (num: number, depth: number): Video[] => {
    const videos: Video[] = [];
    for (let i = 0; i < num; i++) {
        videos.push({
            url: `https://www.youtube.com/watch?v=${Math.random().toString(36).substring(7)}`,
            options: generateRandomOptions(depth)
        });
    }
    return videos;
}
const  videos: Video[] = generateRandomVideos(5, 3); 
console.log(videos)
// for (const video of videos) {
//     console.log(video.url);
//     for (const option of video.options) {
//         console.log(option.text);
//         if (option.vidio) {
//             console.log(option.vidio.url);
//             for (const option2 of option.vidio.options) {
//                 console.log(option2.text);
//                 if (option2.vidio) {
//                     console.log(option2.vidio.url);
//                     for (const option3 of option2.vidio.options) {
//                         console.log(option3.text);
//                     }
//                 }
//             }
//         }
//     }
// }
    
    */
}