import React from 'react';
interface Video {
    url: string;
    options: Option[];
}

interface Option {
    text: string;
    vidio: Video | null;
}




const Create = () => {
    return (
        <div className="flex flex-1 flex-col w-full h-full">
            <div className=" text-3xl w-full flex justify-center items-center">Create new project</div>
            <div className="flex-1 flex">
                {/* uplaod video */}
                <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
                    <div className="w-full h-96 bg-gray-300 flex justify-center items
                    -center">
                        <input type="file" accept="image/*" />
                        </div>
                    <div className="w-full flex justify-center items-center gap-4">
                        <input type="text" placeholder="Title" />
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-full">Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;