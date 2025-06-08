'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useClickOutside } from 'react-haiku'

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    function handleClickOutSide() {
        setIsOpen(false)
    }
    useClickOutside(ref, handleClickOutSide)

    return (
        <>
            <div className='menuBtn text-customGray-300 text-3xl' onClick={() => setIsOpen(true)}>
                <Image aria-label='menu button' src="/menu.svg" width={32} height={32} alt="menu" />
            </div>
            <aside
                ref={ref}
                className={`flex absolute overflow-auto top-0 right-0 w-72 h-dvh bg-white/30 backdrop-blur-[20px] flex-col items-center font-bold justify-between pt-12 pb-6 px-4 ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition duration-300 ease-in-out`}>
                <div onClick={() => setIsOpen(!isOpen)} className='exitBtn absolute top-2 left-2 text-3xl text-customGray-200'>
                    <Image aria-label='exit button' src="/X.svg" width={32} height={32} alt="X" />
                </div>
                <nav role='navigation' aria-label="Main navigation" className='text-white mt-4 z-50 text-2xl flex flex-col items-center gap-12 w-full'>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='about section Link' href="#about">about</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='skills section Link' href="#skills">skills</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='projects section Link' href="#projects">projects</a>
                    <a className='w-full h-16 bg-customGray-300 rounded-lg text-center pt-4' aria-label='contact section Link' href="#contact">contact</a>
                </nav>
                <button className='flex items-center w-full justify-between cursor-pointer text-white font-black px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-500/90'>
                    <h1>Resume</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24" viewBox="0 0 24 24" ><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>
                </button>
            </aside>
        </>
    )
}

export default MobileNav