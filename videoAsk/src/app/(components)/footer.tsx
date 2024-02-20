const Footer = () => {
    return(
        <div className=" w-full flex md:flex-row flex-col justify-center items-center bg-black text-white rounded-t-full px-2 py-3">
            <div className="w-1/3 h-12 flex justify-center items-center">
                <p>© 2024 V-Ask</p>
            </div>
            <div className="w-1/3 h-12 flex justify-center items-center">
                <p>Privacy Policy</p>
            </div>
            <div className="w-1/3 h-12 flex justify-center items-center">
                <p>Terms of Service</p>
            </div>
        </div>
    );
};

export default Footer; 