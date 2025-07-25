'use client'
import React from 'react'

function DesktopNav() {
    return (
        <>
            <div role='navigation' className='hidden sm:flex items-center capitalize font-bold text-lg'>
                <nav role='navigation' aria-label="Main navigation" className='text-white flex items-center gap-16 '>
                    <a aria-label='about section Link' href="#about">about</a>
                    <a aria-label='skills section Link' href="#skills">skills</a>
                    <a aria-label='projects section Link' href="#projects">projects</a>
                    <a aria-label='contact section Link' href="#contact">contact</a>
                </nav>
                <a href="/Mahdi_hadjidj-Resume.pdf" download={true}>
                <button className='flex items-center gap-4 cursor-pointer text-white ml-24 font-black px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-500/90'>
                    <h1>Resume</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' width="24" height="24" viewBox="0 0 24 24" ><path d="m12 16 4-5h-3V4h-2v7H8z"></path><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path></svg>
                </button>
                </a>
            </div>
        </>
    )
}

export default DesktopNav