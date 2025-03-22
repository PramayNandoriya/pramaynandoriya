import React, { useEffect, useState } from 'react';
import './style/App.css';
import Header from './component/Header';
import Loadingpage from './component/loadingpage';
import Expertise from './component/expertise';
import Education from './component/education';
import Work from './component/work';
import Experience from './component/Experience';
import Contact from './component/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from './component/projects';


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Define a function to handle the window load event.
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Listen for the window's load event.
    window.addEventListener("load", handleLoad);

    // If the document is already fully loaded, update the state immediately.
    if (document.readyState === "complete") {
      setIsLoading(false);
    }

    // Cleanup the event listener on unmount.
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
          <Expertise />
          <Education />
          <Work />
          <Experience />
          <Contact />
        </>
      )}
    </>
  );
};

export default App;
