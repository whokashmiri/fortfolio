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
import Blogs from "./components/Blogs";



function App() {
  const [loading, setLoading] = useState(true);

  return ( 
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
         
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
          <Blogs/>
        
        </>
      )}
    </>
  );
}

export default App;
