export default function NavBar() {
    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex flex-items">
                            <h1 className="text-xl font-bold text-black">TeamUp</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Sign Up</a>
                                <a href="#" className="text-black hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Log In</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}