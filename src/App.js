import React, { useEffect, useState } from 'react';
import './style/App.css';
import Header from './component/Header';
import Loadingpage from './component/loadingpage';
import Expertise from './component/expertise';
import Education from './component/education';
import Work from './component/work';
import Experience from './component/Experience';
import Contact from './component/contact';
import { ToastContainer } from 'react-toastify';
import EmblaCarousel from './component/EmblaCarousel';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);

    if (document.readyState === "complete") {
      setIsLoading(false);
    }

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          Loading...
        </div>
      ) : (
        <>
          <Header />
          <Loadingpage />
          <EmblaCarousel />
          <Contact />
          <Work />
          <Expertise />
          <Education />
          <Experience />
          <ToastContainer />
        </>
      )}
    </>
  );
};

export default App;
