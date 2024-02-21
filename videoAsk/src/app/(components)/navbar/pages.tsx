import Link from "next/link";

const Pages = () => {
    return (
        <div className=" w-full flex gap-3">
            <Link href='/' className="px-2 py-3 cursor-pointer font-semibold text-[#111] hover:opacity-35">Home</Link>
            {/* <Link href='/example' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35">Solutions</Link>
            <Link href='/example' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35">Pricing</Link> */}
            <Link href='/example' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35">Examples</Link>
            <Link href='/example' className="px-2 py-3 cursor-pointer font-semibold text-[#000] hover:opacity-35">about </Link>
        </div>
    );
};
export default Pages;
