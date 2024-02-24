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
        url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708707127/videoAsk/dog%20vs%20cat.mp4", //intro
        options: [
            {
                text: "you like Dogs?",
                vidio: {
                    url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708707127/videoAsk/funy%20dog.mp4",
                    options: [
                        {
                            text: "black dog",
                            vidio: {
                                url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708708206/videoAsk/black-dog.mp4",
                                options: [
                                    {
                                        text: "null",
                                        vidio: null
                                    },
                                ]
                            
                            }
                        }
                        ,
                        {
                            text: "white dog",
                            vidio: {
                                url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708708206/videoAsk/white-dog.mp4",
                                options: [
                                    {
                                        text: "null",
                                        vidio: null
                                    },
                                ]
                            }
                        }
                    ]
                }
            }
            ,
            {
                text: "you like Cats?",
                vidio: {
                    url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708707127/videoAsk/cats.mp4",
                    options: [
                        {
                            text: "black cat",
                            vidio: {
                                url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708708205/videoAsk/black-cat.mp4",
                                options: [
                                    {
                                        text: "null",
                                        vidio: null
                                    },]
                            }
                            
                        },
                        {
                            text: "white cat",
                            vidio: {
                                url: "https://res.cloudinary.com/drqxjhddm/video/upload/v1708708205/videoAsk/white-cat.mp4",
                                options: [
                                    {
                                        text: "null",
                                        vidio: null
                                    },
                                ]
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
        <div className=" m-auto w-full h-[600px] flex flex-col justify-center items-center animate-fade-up animate-duration-[2000ms] animate-ease-out rounded-xl">
            <Player url={url} options={optionss} setUrl={nextNode} />
        </div>
    );
}

export default Ask