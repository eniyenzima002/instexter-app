const Header = () => {
    return (
        <nav className="w-4/5 flex justify-between items-center m-auto py-6 text-yellow-600 font-semibold">
            <div className="text-3xl font-logoFont border border-slate-900 shadow-md shadow-yellow-500 rounded-full p-3 cursor-pointer">Instexter</div>
            <div className="flex justify-between items-center gap-6 uppercase">
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Home</div>
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Studio</div>
                <div className="transition duration-200 ease-in-out hover:bg-yellow-500 hover:text-black cursor-pointer p-2 rounded">Login</div>
            </div>
            <div className="bg-yellow-400 text-black px-6 py-3 rounded-full uppercase shadow shadow-amber-600 transition duration-200 ease-in-out hover:bg-yellow-500 cursor-pointer">Sign Up</div>
        </nav>
    )
}
export default Header