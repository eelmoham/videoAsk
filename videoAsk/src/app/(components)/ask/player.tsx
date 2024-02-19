// import { FC } from "react";
// import dynamic from 'next/dynamic';

// const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });
// interface IPlayer {
//     url: string;
//     options: string[];
// }

// const Player: FC<IPlayer> = ({ url, options }) => {
//     return (
//         <div className="flex flex-1 flex-col items-center gap-4 justify-center ">
//             {/* <h1>Ask  {url}</h1> */}
//             <div className=" relative w-full flex h-full justify-center items-center ">
//                 {/* <video className="w-full" autoPlay loop muted src={url}></video> */}
//                 <DynamicReactPlayer
//                     url={url}
//                     autoplay={true}
//                 />

//                 <div className=" absolute top-0 bottom-5 right-0 left-0 flex justify-end items-center flex-col  gap-2">
//                     {
//                         videos[0].options.map((option, index) => {
//                             return (
//                                 option.vidio?.url &&
//                                 <div key={index}
//                                     onClick={() => {
//                                         if (option.vidio?.url)
//                                             setUrl(option.vidio?.url || '');
                                       
//                                     }}
//                                     className="w-1/3 flex justify-center px-3 py-2 rounded-full bg-inherit text-purple-600 border-purple-500 border
//                                 hover:bg-purple-600 hover:text-white hover:border-transparent transition-all duration-500 ease-in-out cursor-pointer">
//                                     {option.text}
//                                 </div>
//                             )
//                         })
//                     }
//                 </div>

//             </div>
//         </div>
               
//     );
// };

// export default Player;