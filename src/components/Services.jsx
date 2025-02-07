const Services = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-primary p-14">
        <div className="w-[65%] h-fit flex flex-col justify-between items-start text-black  dark:text-white  rounded-2xl pl-5 pr-5">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8"> Services I Provide</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Card 1 */}
          <div className="relative  h-[350px] p-6 bg-white dark:bg-secondary rounded-xl shadow-lg transition duration-300 overflow-hidden group">
  {/* Background effect */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 to-blue-700 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>

  {/* Content */}
  <p className="relative text-lg font-sm bg-blue-500 w-fit px-7 py-1 border-2 hover:border-double rounded-2xl z-10">
    Framer To Code
  </p>
  <p className="relative text-gray-700 dark:text-gray-300 mt-4 z-10 group-hover:text-white">Starting at</p>
  <h1 className="relative text-3xl font-bold mt-2 z-10 group-hover:text-white dark:text-white">$1200</h1>
  <p className="relative text-sm text-gray-600 dark:text-gray-300 mt-4 z-10 group-hover:text-white">
  Transform your static Figma designs into fully interactive, responsive websites using Framer
.
  </p>
  <button className="relative mt-6 px-6 py-3 bg-black text-white dark:text-black font-semibold rounded-3xl hover:bg-gray-800 transition dark:bg-white z-10 group-hover:text-black group-hover:bg-white">
    Book a Call →
  </button>
</div>
  
          {/* Card 2 */}

          <div className="relative  h-[350px] p-6 bg-white dark:bg-secondary rounded-xl shadow-lg transition duration-300 overflow-hidden group">
  {/* Background effect */}
  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-500 to-orange-700 transform scale-y-0 origin-top transition-transform duration-300 group-hover:scale-y-100"></div>

  {/* Content */}
  <p className="relative text-lg font-sm bg-orange-500 w-fit px-7 py-1 border-2 hover:border-double rounded-2xl z-10">
    Custom Web
  </p>
  <p className="relative text-gray-700 dark:text-gray-300 mt-4 z-10 group-hover:text-white">Starting at</p>
  <h1 className="relative text-3xl font-bold mt-2 z-10 group-hover:text-white dark:text-white">$2000</h1>
  <p className="relative text-sm text-gray-600 dark:text-gray-300 mt-4 z-10 group-hover:text-white">
    Build stunning websites, from high-converting landing pages to dynamic multipage designs.
  </p>
  <button className="relative mt-6 px-6 py-3 bg-black text-white dark:text-black font-semibold rounded-3xl hover:bg-gray-800 transition dark:bg-white z-10 group-hover:text-black group-hover:bg-white">
    Book a Call →
  </button>
</div>




        </div>
        </div>
      </div>
    );
  };
  
  export default Services;
  