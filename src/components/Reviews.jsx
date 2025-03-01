export default function Reviews() {
  return (
    <>
      <div className="min-h-fit w-full flex flex-col items-center justify-center bg-accent dark:bg-primary p-6 sm:p-10 lg:p-14">
        <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[62%] h-auto bg-white dark:bg-secondary p-6 sm:p-8 md:p-10 rounded-xl shadow-lg flex flex-col items-center">
          {/* Review Stars */}
          <div className="font-bold mb-2 text-yellow-400 dark:text-yellow-500 text-2xl sm:text-3xl">
            ★ ★ ★ ★ ☆
          </div>

          {/* User Photo */}
          <img
            src="https://images.pexels.com/photos/30463381/pexels-photo-30463381/free-photo-of-moody-black-and-white-portrait-of-a-stylish-man.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="User"
            className="w-16 h-16 rounded-full object-cover border-2 border-white"
          />

          {/* User Name & Review */}
          <div className="text-white text-center items-center mt-4 sm:mt-6">
            <h3 className="text-xl sm:text-2xl text-black font-semibold dark:text-white">
              Parveez Ahmed,{" "}
              <span className="text-base sm:text-lg font-mono text-gray-600 dark:text-gray-400">
                Director @GoExalt System
              </span>
            </h3>

            <p className="text-lg sm:text-2xl text-gray-400 mt-3">
              &quot;Working with Aaqib was a{" "}
              <span className="text-blue-700">game-changer</span> for our brand.
              His designs are not only visually stunning but also incredibly
              functional.&quot;
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
