import Image from 'next/image'
import React from 'react'
import ScrollFloat from './ScrollFloat'
import CountUp from './CountUp'
import SpotlightCard from './SpotLightCard'

function Projects() {
    return (
        <section id='projects' className='projects z-50 w-full h-auto mt-32 text-white flex flex-col justify-center items-center'>
            <ScrollFloat
                containerClassName='w-full h-48 !py-0 !my-0 font-black flex items-center justify-center'
                animationDuration={2}
                ease='back.inOut(2)'
                scrollStart='center bottom+=40%'
                scrollEnd='bottom bottom-=20%'
                stagger={0.03}
            >
                Projects
            </ScrollFloat>
            <div className="container flex gap-16 flex-wrap justify-center items-center">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10'>
                        <div>
                            <Image loading='lazy' alt='startup pitch project photo' src={'/projects/startup.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Startup Pitch</h2>
                                <p className='text-sm text-gray-300 mt-1'>A platform for entrepreneurs to pitch their startup ideas and connect with potential investors.</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>Next Js</span>
                                <span>React</span>
                                <span>Sanity</span>
                                <span>Sentry</span>
                                <span>...</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/StartUps-Pitch" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10'>
                        <div>
                            <Image loading='lazy' alt='Coffee shop project photo' src={'/projects/coffee.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Coffee Shop</h2>
                                <p className='text-sm text-gray-300 mt-1'>A Landing page for a coffee Shop using tailwind Css for styling and Swiper js for swiper's </p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>HTML</span>
                                <span>TailwindCss</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/coffe-Shop-with-TailwindCSS" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10'>
                        <div>
                            <Image loading='lazy' alt='Food Recipe project photo' src={'/projects/foodRecipe.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Food Recipe App</h2>
                                <p className='text-sm text-gray-300 mt-1'>A Full functional app made for searching recipes by dish name</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>React</span>
                                <span>TailwindCss</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/Food-Recipe-App" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10'>
                        <div>
                            <Image loading='lazy' alt='Quiz App project photo' src={'/projects/Quiz.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Quiz App</h2>
                                <p className='text-sm text-gray-300 mt-1'>Small Quiz app using free api for quiz.</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/Quiz-app" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10'>
                        <div>
                            <Image loading='lazy' alt='Expense tracker project photo' src={'/projects/Expense.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Expense Tracker</h2>
                                <p className='text-sm text-gray-300 mt-1'>Expense and Income tracker using context for state management,chakra ui for Pie chart</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>React</span>
                                <span>TailwindCss</span>
                                <span>Chakra UI</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/Expense-Tracker-App" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                    <div aria-label='project wrapper' className='wrapper flex flex-col items-center justify-between w-96 h-auto bg-black-lighter/15 rounded-2xl border border-black-lighter-active p-4 z-10' >
                        <div>
                            <Image loading='lazy' alt='Shopping Cart project photo' src={'/projects/Cart.png'} width={350} height={200} className='rounded-lg border  border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Shopping Cart</h2>
                                <p className='text-sm text-gray-300 mt-1'>Simple shop cart using REDUX for state management ana api for products</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>React</span>
                                <span>TailwindCss</span>
                                <span>Redux</span>
                            </div>
                            <div className='github text-customGray-200'>
                                <a href="https://github.com/mahdii-Dz/Shopping-Cart-using-Redux-on-React" target='_blank' className='text-2xl !cursor-pointer'>
                                    <i className="fi fi-brands-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
            <div aria-label='project view more wrapper' className="count w-60 h-20 flex items-center cursor-pointer justify-center mt-16 border-2 gap-2 border-white rounded-full hover:shadow-custom hover:shadow-white hover:-translate-y-4 hover:translate-x-4 transition duration-200 ease-in-out">
                <a href='https://github.com/mahdii-Dz?tab=repositories' target='_blank' className='text-2xl font-bold flex items-center gap-2'>
                    <div>
                        <span>+</span>
                        <CountUp
                            from={0}
                            to={40}
                            separator=","
                            direction="up"
                            duration={0.5}
                            className="count-up-text"
                        />
                    </div>
                    <span>Repo</span>
                </a>
                <div className='flex items-center justify-center'>
                    <i className="fi fi-rc-arrow-up-right-from-square text-2xl h-6"></i>
                </div>
            </div>
        </section>
    )
}

export default Projects