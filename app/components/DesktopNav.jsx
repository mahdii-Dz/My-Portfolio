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
                <button className='flex items-center gap-4 cursor-pointer text-white ml-24 font-black px-6 py-2 rounded-xl bg-primary-500 hover:bg-primary-500/90'>
                    <h1>Resume</h1>
                    <i className="fi fi-br-download"></i>
                </button>
            </div>
        </>
    )
}

export default DesktopNav