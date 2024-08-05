import React, { useState, useEffect } from "react";
import Nav1200 from "./Nav1200";
import Nav700 from "./Nav700";

export default function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <Nav700 /> : <Nav1200 />}
    </div>
  );
}
