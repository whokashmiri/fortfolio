import { useState } from "react";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import  Projects  from "./components/Projects";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import Matched from "./components/Matched";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";




function App() {
  const [loading, setLoading] = useState(true);

  return ( 
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
         <div className="overflow-y-hidden">
          <Navbar />
          <Hero/>
          <Projects/>
          <Clients/>
          <TechStack/>
          <Services/>
          <Reviews/>
          <Questions/>
          <Matched/>
          <Socials/>
          <Contact/>
          
          </div>
        </>
      )}
    </>
  );
}

export default App;
