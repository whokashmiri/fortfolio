const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md text-white shadow-md z-50">
        <div className="container mx-auto w-[55vw] flex items-center justify-between relative h-20 px-4 md:px-8">
          {/* First UL */}
          <ul className="flex space-x-4 md:space-x-8 bg-white p-2 rounded-full shadow-lg z-10">
            <li className="transition-transform transform hover:-translate-y-1 hover:duration-300">
              <a href="#" className="text-sm font-semibold md:text-lg text-black hover:text-gray-500">Home</a>
            </li>
            <li className="transition-transform transform hover:-translate-y-1 hover:duration-300">
              <a href="#" className="text-sm font-semibold md:text-lg text-black hover:text-gray-500">About</a>
            </li>
            <li className="transition-transform transform hover:-translate-y-1 hover:duration-300">
              <a href="#" className="text-sm font-semibold md:text-lg text-black hover:text-gray-500">Services</a>
            </li>
          </ul>
  
          {/* Middle UL */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <ul className="p-3 rounded-full shadow-lg bg-opacity-30 backdrop-blur-lg">
              <li className="group transition-transform transform hover:-translate-y-1 hover:duration-300">
                <a href="#" className="text-2xl md:text-3xl font-bold text-black group-hover:hidden">A;</a>
                <a href="#" className="hidden text-2xl md:text-3xl font-bold text-teal-900 group-hover:inline">V:</a>
              </li>
            </ul>
          </div>
  
          {/* Last UL */}
          <ul className="flex space-x-4 md:space-x-8 bg-white p-2 rounded-full shadow-lg z-10">
            <li className="transition-transform transform hover:-translate-y-1 hover:duration-300">
              <a href="#" className="text-sm md:text-lg font-semibold text-black hover:text-gray-500">Contact</a>
            </li>
            <li className="transition-transform transform  hover:-translate-y-1 hover:duration-300">
              <a href="#" className="text-sm md:text-lg font-semibold text-black hover:text-gray-500">Stack</a>
            </li>
            <li className="transition-transform transform hover:-translate-y-1 hover:duration-300">
              <a href="https://hashnode.com/@whokashmiri" className="text-sm md:text-lg font-semibold text-black hover:text-gray-500">Blogs</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  