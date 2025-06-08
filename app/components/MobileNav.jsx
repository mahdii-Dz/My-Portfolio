'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useClickOutside } from 'react-haiku'

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrollY, setScrollY] = useState(0)
    const ref = useRef()
    function handleClickOutSide() {
        setIsOpen(false)
    }
    useClickOutside(ref, handleClickOutSide)

    return (
        <>
            <div className='menuBtn text-customGray-300 text-3xl' onClick={() => setIsOpen(true)}><i className="fi fi-br-menu-burger"></i></div>
            <aside
                ref={ref}
                className={`flex absolute overflow-auto z-50 top-0 right-0 w-72 h-dvh bg-white/10 backdrop-blur-[20px] flex-col items-center font-bold justify-between pt-12 pb-6 px-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
                <div onClick={() => setIsOpen(!isOpen)} className='exitBtn absolute top-2 left-2 text-3xl text-customGray-200'><i className="fi fi-br-cross-small"></i></div>
                <nav role='navigation' aria-label="Main navigation" className='text-white mt-4 text-2xl flex flex-col items-center gap-12 w-full'>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='about section Link' href="#about">about</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='skills section Link' href="#skills">skills</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='projects section Link' href="#projects">projects</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='contact section Link' href="#contact">contact</a>
                </nav>
                <button className='flex items-center w-full justify-between cursor-pointer text-white font-black px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-500/90'>
                    <h1>Resume</h1>
                    <i className="fi fi-br-download"></i>
                </button>
            </aside>
        </>
    )
}

export default MobileNav