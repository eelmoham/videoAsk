import { useRef, useState } from "react";

interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string | null;
    // vidio: Video | null;
}
const Video = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [option, setOption] = useState<Option[]>([]);
    const uploadVideo = () => {
        // upload video
        const formData = new FormData();
        if (fileInputRef.current?.files?.length) {
            const file = fileInputRef.current.files[0];
            formData.append('file', file);
        }

    };
    return (
        <div className=" flex flex-col w-max">
            <input onChange={uploadVideo} ref={fileInputRef} type="file" accept="video/*" />
            
            <div className=" w-full h-[100px] overflow-auto">
                {
                    option.length && option.map((opt, index) => {
                        return (
                            <div key={index} className=" flex flex-col">
                                {opt.text}
                            </div>
                        );
                    })
                }
            </div>
            <div
                onClick={() => {
                    setOption([...option, { text: `option ${option.length}` }]);
                }}
                className="w-5 h-5 rounded-full text-3xl">+</div>
        </div>
    );
}
export default Video;