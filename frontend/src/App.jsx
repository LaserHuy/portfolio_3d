import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Cursor, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import useBlobity from "./components/blobity/useBlobity";

const App = () => {
  const [isHover, setIsHover] = useState(false);

  useBlobity(
    {
        licenseKey: "opensource",
        focusableElementsOffsetX: 4,
        focusableElementsOffsetY: 4,
        color: "#ffffff",
        dotColor: "#ffffff",
        invert: true,
        focusableElements:
            "[data-blobity], h4:not([data-no-blobity]), li:not([data-no-blobity]), [data-blobity-tooltip]",
        font: "'Inter', sans-serif",
        fontSize: 16,
        fontWeight: 900,
        opacity: 1.0,
        fontColor: "#ffffff",
        zIndex: 35,
        size: 50,
        radius: 5,
        magnetic: false,
    }
  );

  return (
    <BrowserRouter>
      <Cursor isActive={isHover} />
      <div className="relative z-0 bg-primary overflow-x-hidden">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero isHover={isHover} setIsHover={setIsHover} />
        </div>
        <About isHover={isHover} setIsHover={setIsHover} />
        <div className="bg-primary text-white bg-gradient-to-b from-primary to-tertiary">
          <Experience isHover={isHover} setIsHover={setIsHover} />
        </div>
        <div className="bg-primary text-white py-[72px] sm:py-24 bg-gradient-to-b from-tertiary to-primary ">
          <Tech />
        </div>
        <Works isHover={isHover} setIsHover={setIsHover} />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
