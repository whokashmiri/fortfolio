
import Navbar from './Navbar'

const Contact = () => {
    return (
        <>
        <Navbar/>
      <div className="max-w-full mx-auto  shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 space-y-6 ">
        <h1 className="text-6xl font-bold  text-start">RING A BELL!</h1>
        <p className=" text-start uppercase text-xl font-semibold text-slate-300 [word-spacing:0.4rem] ">
        Reach out and let&apos;s create something amazing together. Let&apos;s achieve greatness.
        </p>
        
        <h3 className="text-xl font-semibold  text-start uppercase pt-4">Fill This Form</h3>
        
        <form className="space-y-4 border-b-1">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="NAME" 
              className="w-full p-5  bg-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
            <input 
              type="email" 
              placeholder="E-MAIL" 
              className="w-full p-5  bg-slate-700  rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
            />
          </div>
          <textarea 
            placeholder="MESSAGE" 
            rows="4" 
            className="w-full p-5  bg-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-400 transition uppercase"
          >
            SEND EMAIL
          </button>
        </form>




        <div className=" mx-auto  shadow-lg rounded-2xl p-6 sm:p-8 md:p-10 space-y-6">
      {/* Follow Me Section */}
      <div>
        <h2 className="text-xl font-bold ">FOLLOW ME</h2>
        <ul className="mt-2 space-y-2 text-slate-400 font-medium uppercase">
          <li>
            <a href="#" className="hover:underline">Instagram</a>
          </li>
          <li>
            <a href="#" className="hover:underline">GITHUB</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Twitter X</a>
          </li>
        </ul>
      </div>

      {/* Current Location Section */}
      <div>
        <h2 className="text-xl font-bold t">CURRENT LOCATION</h2>
        <p className="mt-2 text-slate-400">
          Mirpora St. Kehnusa, <br />
          Kashmir (KMR), 193502 <br />
         Jammu and Kashmir
        </p>
      </div>

      {/* Phone Section */}
      {/* <div>
        <h2 className="text-xl font-bold ">PHONE</h2>
        <p className="mt-2 text-gray-600">
          <span className="font-semibold">USA:</span> +1 13945 88734 <br />
          <span className="font-semibold">AUS:</span> +1 14945 78297
        </p>
      </div> */}

      {/* Email Section */}
      <div>
        <h2 className="text-xl font-bold ">EMAIL ME</h2>
        <p className="mt-2 text-slate-400 font-medium">
          <a href="AAQIBMIR.AB@GMAIL.COM" className="hover:underline">
            AAQIBMIR.AB@GMAIL.COM
          </a>
          <br />
          <a href="AAQIBMIR.AB@YAHOO.COM" className="hover:underline">
          AAQIBMIR.AB@YAHOO.COM
          </a>
        </p>
      </div>
    </div>
      </div>
      </>
    );
  };
  
  export default Contact;
  