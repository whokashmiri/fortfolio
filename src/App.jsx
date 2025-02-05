import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import LoadingScreen from "./components/LoadingScreen";
import ProjectImages from "./components/ProjectImages";
import TechText from "./components/TechText";
import Values from "./components/Values";


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
         
          <Navbar />
          <Hero />
          <Projects />
          <ProjectImages/>
          <TechText/>
          <Values/>
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
