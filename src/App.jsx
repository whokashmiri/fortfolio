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
          <Services/>
          <Reviews/>
          <Questions/>
          <Matched/>
          <Socials/>
        
        </>
      )}
    </>
  );
}

export default App;
