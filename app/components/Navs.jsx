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
    const handleResize = () => {
      if (typeof window !== "undefined") {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }
    };
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  console.log(windowSize);
  
  return (
    <>
      {
        windowSize.width > 1024 ? <DesktopNav /> : <MobileNav />
      }
    </>
  )
}

export default Navs