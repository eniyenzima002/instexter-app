const Header = () => {
    return (
        <nav className="container px-4 md:w-4/5 flex justify-between items-center m-auto py-6 text-yellow-600 font-semibold">
            <div className="text-xl md:text-3xl font-logoFont border border-slate-900 shadow-md shadow-yellow-500 rounded-full p-3 cursor-pointer">Instexter</div>
            <div className="flex justify-between text-sm md:text-lg items-center md:gap-6 uppercase">
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Home</div>
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Studio</div>
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Login</div>
            </div>
            <div className="bg-yellow-400 text-black px-3 py-2 text-sm md:text-xl md:px-6 md:py-3 rounded-full uppercase shadow shadow-amber-600 transition duration-200 ease-in-out hover:bg-yellow-500 cursor-pointer">Sign Up</div>
        </nav>
    )
}
export default Header