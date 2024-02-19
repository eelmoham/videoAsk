import { FC } from "react";


interface InputProps {
    type: string;
    name: string;
    id: string;
    placeholder: string;
    seter?: any;
    value? : string;
}

const Input: FC<InputProps> = ({ type, name, id, placeholder, seter, value }) => {
    return (
        <input
            className=" text-xl border-b-2 px-2 py-3 outline-none focus:outline-none w-full font-light text-[#6c6c6c9c]"
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            onChange={(e) => seter(e.target.value)}
            value={value}
        />
    );
};

export default Input;