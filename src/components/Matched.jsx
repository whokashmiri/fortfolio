const Matched = () => {
    return (
      <div className="flex justify-center items-center h-screen w-screen  bg-accent dark:bg-primary md:px-16">
        <div className="w-full lg:w-[61%] h-fit lg:h-[90%] bg-accent text-black dark:bg-secondary  rounded-3xl shadow-lg flex justify-center items-center flex-col ">
          <h1 className="text-4xl text-gray-900 dark:text-white font-bold mb-2">We are matched</h1>
          <h3 className="lg:text-lg  text-gray-600 dark:text-gray-300 mb-4">If you’re here, it’s meant to be. Let’s turn your vision into reality</h3>
          <div className="flex justify-center space-x-4 m-7">
          <button className="px-6 py-3 bg-black text-white dark:text-black font-semibold rounded-3xl hover:bg-gray-800 transition dark:bg-white">
            Book a Call
          </button>
          <button className="px-6 py-3 border border-gray-700 dark:border-white rounded-3xl text-gray-900 dark:text-white font-semibold hover:bg-slate-300 dark:hover:bg-gray-800 transition">
            About Me
          </button>
          </div>
          <div className="relative flex justify-center items-center space-x-3 overflow-hidden">
             <video className="h-60 w-1/3 rounded-lg object-cover" src="https://videos.pexels.com/video-files/15518211/15518211-hd_1920_1080_30fps.mp4" autoPlay loop muted></video>
            <video className="h-60 w-1/2 rounded-lg shadow-lg object-cover" src="https://videos.pexels.com/video-files/13750318/13750318-uhd_2560_1440_60fps.mp4" autoPlay loop muted></  video>
            <video className="h-60 w-1/3 rounded-lg object-cover" src="https://videos.pexels.com/video-files/18522353/18522353-uhd_2560_1440_24fps.mp4" autoPlay loop muted></video>    
            </div>

        </div>
      </div>
    );
  };
  
  export default Matched;
  