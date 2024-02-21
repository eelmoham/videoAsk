import { use, useEffect } from "react"

export default function Loading() {
    useEffect(() => {
        //disable scrolling
        document.body.style.overflow = "hidden";
    }, []);
    return (
        <div className="w-full h-screen flex justify-center items-center bg-white absolute top-0 bottom-0 right-0 left-0 z-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#000]"></div>
        </div>
    )
}