import DOne from "../assets/images/d-1.png"
const About = () => {
    return (
        <div className="w-4/5 m-auto my-20 bg-gradient-to-r from-stone-900 to-stone-950 shadow shadow-stone-900 text-slate-300 px-12 py-6 rounded-lg opacity-80">
            <div className="flex justify-center gap-10">
                <div className="">
                    <h1 className="text-6xl font-semibold pb-6">About <span className="italic text-lime-400">Us</span></h1>
                    <p className="font-extralight text-lg pb-4">
                    We have made it easier for you to create and send Thank You Notes, Celebration Cards, electronic Letters and more. Use our digital pre-designed templates or design your won inside our Studio. 
                    </p>
                    <p className="font-extralight text-lg pb-4">
                    You also have the ability to create your own templates, Simple Flyers, quick Social Media Posts or design other inspiring arts such as Christmas Cards, Celebration Crads etc...
                    </p>

                    <button className="bg-gradient-to-r from-teal-400 to-yellow-200 mt-6 px-4 py-3 text-black font-semibold rounded-full uppercase transition duration-200 ease-in-out hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500">
                        Learn more
                    </button>
                </div>
                <img src={ DOne } alt="" width={"500px"}/>
            </div>
        </div>
    )
}
export default About