import React from 'react'

function NavBar() {
    return (
        <header className='w-full h-20 bg-white/1 backdrop-blur-[5px] px-16 z-50 fixed flex items-center justify-between'>
            <div>
                <a href="#home"><h1 className='text-4xl text-white font-black'>Mahdi</h1></a>
            </div>
            <div className='flex items-center capitalize font-bold text-lg'>
                <nav className='text-white flex items-center gap-16 '>
                    <a href="#about">about</a>
                    <a href="#skills">skills</a>
                    <a href="#projects">projects</a>
                    <a href="#contact">contact</a>
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