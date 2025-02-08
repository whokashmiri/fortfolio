import { ArrowUpRightIcon } from "lucide-react";

const Contact = () => {
    return (
      <>
        <div className="min-h-fit flex flex-col justify-center items-center h-fit w-screen bg-accent dark:bg-primary p-14">
          <div className="w-[61%] h-[90%] bg-accent text-black dark:bg-secondary rounded-3xl shadow-lg flex flex-col justify-start items-center p-8">
          <h1 className="text-4xl text-gray-900 dark:text-white font-bold mb-2  text-start">RING A BELL!</h1>
            
            {/* Form Section */}
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 uppercase pt-4">Fill This Form</h3>
            <form className="space-y-4 w-full mt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="NAME" 
                  className="w-full p-5 bg-slate-200 dark:bg-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input 
                  type="email" 
                  placeholder="E-MAIL" 
                  className="w-full p-5 bg-slate-200 dark:bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>
              <textarea 
                placeholder="MESSAGE" 
                rows="4" 
                className="w-full p-5 bg-slate-200 dark:bg-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-400 transition uppercase"
              >
                SEND EMAIL
              </button>
            </form>
  
            {/* Contact Info Section */}
            <div className="w-full mt-6 p-6 rounded-2xl">
              <h1 className="text-4xl text-gray-900 dark:text-white font-bold mb-2">RING A BELL!</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
              </p>
  
              {/* Follow Me Section */}
              <div>
  <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">FOLLOW ME</h2>
  <ul className="mt-2 space-y-2 text-slate-400 font-medium uppercase">
    {[
      { name: "Instagram", link: "https://www.instagram.com/yourusername" },
      { name: "GitHub", link: "https://github.com/yourusername" },
      { name: "Twitter X", link: "https://twitter.com/yourusername" },
    ].map((platform, index) => (
      <li
        key={index}
        className="flex flex-row text-lg items-center group transition-all duration-300"
      >
        <a
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-all duration-300 ease-in-out flex items-center"
        >
          {platform.name}
        </a>
        <ArrowUpRightIcon
          size={17}
          className="ml-2 h-5 w-5 rounded-full text-black bg-green-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
        />
      </li>
    ))}
  </ul>
</div>

  
              {/* Current Location Section */}
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">CURRENT LOCATION</h2>
                <p className="mt-2 text-slate-400">
                  Mirpora St. Kehnusa, <br />
                  Kashmir (KMR), 193502 <br />
                  Jammu and Kashmir
                </p>
              </div>
  
              {/* Email Section */}
              <div className="mt-4">
                <h2 className="text-xl font-bold text-gray-600 dark:text-gray-300">EMAIL ME</h2>
                <p className="mt-2 text-slate-400 font-medium">
                  <a href="mailto:AAQIBMIR.AB@GMAIL.COM" className="hover:underline">
                    AAQIBMIR.AB@GMAIL.COM
                  </a>
                  <br />
                  <a href="mailto:AAQIBMIR.AB@YAHOO.COM" className="hover:underline">
                    AAQIBMIR.AB@YAHOO.COM
                  </a>
                </p>
              </div>
            </div>
  
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;
  