import { useEffect, useState } from "react";
import ButtonTop from "./components/Model/ButtonTop";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer";

import About from "./Page/About";
import Contact from "./Page/Contact";
import Home from "./Page/Home";
import Project from "./Page/Project";
import Skills from "./Page/Skills";

function App() {
     const [loading, setLoading] = useState(false);
   useEffect(() => {
     setLoading(true);
     setTimeout(() => {
       setLoading(false);
     }, 3000);
   }, []);
  
   
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Home  />
          <About />
          <Skills />
          <Project />
            <Contact />
            <Footer />

          <ButtonTop />
        </div>
      )}
    </>
  );
}

export default App;
