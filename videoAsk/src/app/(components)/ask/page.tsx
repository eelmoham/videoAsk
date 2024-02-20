'use client';
import { useState } from "react";
import Player from "./player";

interface Video {
    // id: string;
    url: string;
    options: Option[];
}

interface Option {
    text: string | null;
    vidio: Video | null;
}

const Ask = () => {
    const videos: Video = {
        url: "https://www.youtube.com/watch?v=mPymRFeTJa4",
        options: [
            {
                text: "Dolly",
                vidio: {
                    url: "https://youtu.be/H6guS2OR_TY?si=-3mt5iZt7vSeaHxP",
                    options: [
                        {
                            text: "7liwa",
                            vidio: {
                                url: "https://www.youtube.com/watch?v=7ZHfD4NfgHU",
                                options: [
                                    {
                                        text: "relax",
                                        vidio: {
                                            url: "https://www.youtube.com/watch?v=oVzt0ZwIC84",
                                            options: [
                                                {
                                                    text: null,
                                                    vidio: null
                                                },]
                                        }
                                    }
                                    ,
                                    {
                                        text: "random",
                                        vidio: {
                                            url: "https://youtu.be/B4SX5FFE2XE?si=gZxq4NxgXJlZehiZ",
                                            options: [
                                                {
                                                    text: "congratulations",
                                                    vidio: {
                                                        url: "https://youtu.be/SC4xMk98Pdc?si=TWV3bU1OLeRIpj_P",
                                                        options: [
                                                            {
                                                                text: "null",
                                                                vidio: null
                                                            },]
                                                    }
                                                }
                                            ]
                                        }
                                    }

                                ]
                            }
                        }
                    ]
                }
            }
            ,
            {
                text: "random",
                vidio: {
                    url: "https://youtu.be/B4SX5FFE2XE?si=gZxq4NxgXJlZehiZ",
                    options: [
                        {
                            text: "7liwa",
                            vidio: {
                                url: "https://www.youtube.com/watch?v=7ZHfD4NfgHU",
                                options: [
                                    {
                                        text: "null",
                                        vidio: null
                                    },]
                            }
                        }
                    ]
                }
            }
        ]
    };
    const [url, setUrl] = useState<string>(videos.url);
    const [optionss, setOptionss] = useState<any>(videos.options);

    const nextNode = (opt: Option, url: string) => {
        console.log("opt>>", url, opt);
        setUrl(url);
        setOptionss(opt);
    }


    return (
        <div className=" w-full h-full flex flex-col justify-center items-center">
            <Player url={url} options={optionss} setUrl={nextNode} />
        </div>
    );
}

export default Ask








// const videoLinks = ["https://youtu.be/B4SX5FFE2XE?si=gZxq4NxgXJlZehiZ",
//     "https://youtu.be/vnFybzZtVoQ?si=s05FnYS84z6D7Uxn",
//     "https://videos.ctfassets.net/7907dlxc16yt/5DgixgwMT6CFWQjl44xtHR/5ce9a2a47985f6d03b33c691523e4d92/-VideoAsk_____WebRevamp_____03-_x2_optimized.mp4",
//     "https://youtu.be/bz_DPnBEffw?si=-O_eSQIFh0DVJqhp",
//     "https://youtu.be/1-kC0Wg9C6k?si=9xK3Y-p38nQYH-Pt",
//     "https://youtu.be/g8tquaFDAgI?si=sDNIvlYWFvUnNkJj",
// ]

// const generateRandomOptions = (depth: number): Option[] => {
//     const options: Option[] = [];
//     for (let i = 0; i < depth; i++) {
//         options.push({
//             text: `Option-${i}`,
//             vidio: i < depth - 1 ? {
//                 url: videoLinks[Math.floor(Math.random() * 5)],
//                 options: generateRandomOptions(depth - 1)
//             } : null
//         });
//     }
//     return options;
// }

// const generateRandomVideos = (num: number, depth: number): Video[] => {
//     const videos: Video[] = [];
//     for (let i = 0; i < num; i++) {
//         videos.push({
//             url: 'https://videos.ctfassets.net/7907dlxc16yt/5DgixgwMT6CFWQjl44xtHR/5ce9a2a47985f6d03b33c691523e4d92/-VideoAsk_____WebRevamp_____03-_x2_optimized.mp4',
//             // url: 'https://youtu.be/oZDwcrWRQxw?si=jvajGYMwABwzdJo_',
//             options: generateRandomOptions(depth)
//         });
//     }
//     return videos;
// }