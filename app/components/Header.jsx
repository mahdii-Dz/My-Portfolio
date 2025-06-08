import React from 'react'
import Navs from './Navs'


function NavBar() {
    return (
        <header className='w-full h-20 bg-white/1 backdrop-blur-[5px] px-4 sm:px-16 z-50 fixed flex items-center justify-between'>
            <div>
                <a aria-label='home section Link' href="#home"><h1 className='text-4xl text-white font-black'>Mahdi</h1></a>
            </div>
            <Navs/>
        </header>
    )
}

export default NavBar