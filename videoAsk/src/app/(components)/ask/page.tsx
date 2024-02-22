'use client';
import { useState } from "react";
import Player from "./player";

interface Video {
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
        <div className=" m-auto w-[90%] h-[500px] flex flex-col justify-center items-center animate-fade-up animate-duration-[2000ms] animate-ease-out rounded-xl">
            <Player url={url} options={optionss} setUrl={nextNode} />
        </div>
    );
}

export default Ask