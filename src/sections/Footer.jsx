import Apple from "../assets/images/apple-1.png"
import Google from "../assets/images/google-1.png"
import { LuFacebook, LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="w-full m-auto bg-gradient-to-r from-slate-900 to-slate-950 p-6 text-slate-300 text-center opacity-80">
            <div className="w-1/2 m-auto grid grid-cols-3 gap-7 justify-center pb-12 pt-7">
                <div className="text-6xl text-yellow-700 font-logoFont cursor-pointer">Instexter</div>
                <div className="flex justify-center gap-20 text-left text-xl">
                    <div className="flex flex-col gap-4 font-extralight">
                        <div className="hover:text-yellow-500">Home</div>
                        <div className="hover:text-yellow-500">About</div>
                        <div className="hover:text-yellow-500">Studio</div>
                        <div className="hover:text-yellow-500">Contact</div>
                    </div>
                    <div className="flex flex-col gap-4 font-extralight">
                        <div className="hover:text-yellow-500">Careers</div>
                        <div className="hover:text-yellow-500">Help</div>
                        <div className="hover:text-yellow-500">Press</div>
                        <div className="hover:text-yellow-500">Business</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <img src={ Apple } alt="Apple" width={"170px"}/>
                    <img src={ Google } alt="Google" width={"170px"}/>
                </div>
            </div>
            <div className="flex justify-center items-center gap-7 pb-12">
                <LuFacebook className=" bg-orange-500 w-14 h-14 rounded-full p-2 text-black"/>
                <FaInstagram className=" bg-orange-500 w-14 h-14 rounded-full p-2 text-black"/>
                <RiLinkedinLine className=" bg-orange-500 w-14 h-14 rounded-full p-2 text-black"/>
                <LuTwitter className=" bg-orange-500 w-14 h-14 rounded-full p-2 text-black"/>
            </div>
            <div className="border-b w-1/2 m-auto"></div>
            <div className="flex justify-center gap-7 py-5">
                <h2 className="font-extralight py-4 cursor-pointer">Privacy Police</h2>
                <h2 className="font-extralight py-4 cursor-pointer">Terms & Conditions</h2>
            </div>
        </footer>
    )
}
export default Footer