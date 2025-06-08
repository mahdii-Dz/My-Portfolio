'use client'
import React, { useState } from 'react'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { useSize, useWindowSize } from 'react-haiku';

function Navs() {
    const {width} = useWindowSize()
    
  return (
    <>
        {
            width > 1024 ? <DesktopNav/> : <MobileNav/>
        }
    </>
  )
}

export default Navs