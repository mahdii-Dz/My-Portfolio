import React from 'react'

function NavBar() {
    return (
        <header className='w-full h-20 bg-white/1 backdrop-blur-[5px] px-16 z-50 fixed flex items-center justify-between'>
            <div role='heading'>
                <a aria-label='home section Link' href="#home"><h1 className='text-4xl text-white font-black'>Mahdi</h1></a>
            </div>
            <div role='navigation' className='flex items-center capitalize font-bold text-lg'>
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
        </header>
    )
}

export default NavBar