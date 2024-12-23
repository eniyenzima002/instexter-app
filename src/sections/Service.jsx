import DTwo from "../assets/images/d-2.png"
import DThree from "../assets/images/d-3.png"
import DFour from "../assets/images/d-4.png"
const Service = () => {
    return (
        <section className="w-4/5 m-auto mt-20 text-white text-center">
            <h1 className="uppercase text-cyan-100 font-logoFont text-center py-2 font-semibold text-3xl md:text-6xl bg-gradient-to-r from-amber-500 to-pink-500 rounded-md opacity-70">
                Services
            </h1>
            <div className="my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 w-4/5 m-auto">
                <div className="flex flex-col justify-center items-center gap-10">
                    <img src={DTwo} alt="" width={"300px"}/>
                    <h2 className="bg-gradient-to-r from-lime-400 to-lime-500 px-3 py-2 text-black font-semibold rounded-md uppercase">Wedding Cards</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <img src={DThree} alt="" width={"300px"}/>
                    <h2 className="bg-gradient-to-r from-amber-200 to-yellow-500 px-3 py-2 text-black font-semibold rounded-md uppercase">Celebration Cards</h2>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <img src={DFour} alt="" width={"300px"}/>
                    <h2 className="bg-gradient-to-r from-teal-400 to-yellow-200 px-3 py-2 text-black font-semibold rounded-md uppercase">Flyers Cards</h2>
                </div>
            </div>
        </section>
    )
}
export default Service