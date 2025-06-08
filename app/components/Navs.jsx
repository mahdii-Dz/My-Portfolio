'use client'
import React,{ useEffect, useState }  from 'react'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useWindowSize } from 'react-haiku';

function Navs() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });
  useEffect(() => {
/*************  ✨ Windsurf Command ⭐  *************/
  /**
   * Handles window resize event.
   * 
   * Updates the windowSize state variable with the new window dimensions.
   * 
   * @function
   * @returns {void}
   */
/*******  504504f0-62c2-47a9-aea9-f1eaeadc964f  *******/
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {
        windowSize.width > 1024 ? <DesktopNav /> : <MobileNav />
      }
    </>
  )
}

export default Navs