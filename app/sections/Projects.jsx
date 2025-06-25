import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'

const SpotlightCard = dynamic(() => import('../components/SpotLightCard'));
const CountUp = dynamic(() => import('../components/CountUp'));
const ScrollFloat = dynamic(() => import('../components/ScrollFloat'));

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
                            <Image loading='lazy' alt='Renovate it project photo' src={'/projects/Renovate-IT.png'} width={350} height={200} className='rounded-lg border border-customGray-50' />
                            <div className="content">
                                <h2 className='text-lg font-extrabold mt-2'>Renovate IT (3D app)</h2>
                                <p className='text-sm text-gray-300 mt-1'>Transform your home in 3D with easy, intuitive renovation tools.</p>
                            </div>
                        </div>
                        <div className='foot w-full flex mt-4 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>Three.js</span>
                                <span>Next.js</span>
                                <span>React</span>
                                <span>TailwindCss</span>
                            </div>
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/3D-Home-Renovation-App" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </a>
                                <a aria-label='live demo link' href="https://renovate-it.netlify.app/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
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
                                <span>Next.js</span>
                                <span>React</span>
                                <span>Sanity</span>
                                <span>Sentry</span>
                                <span>...</span>
                            </div>
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a className='invisible' aria-label='live demo link' href="https://renovate-it.netlify.app/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
                                </a>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/StartUps-Pitch" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
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
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/Food-Recipe-App" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </a>
                                <a aria-label='live demo link' href="https://food-recipe-app-olive-ten.vercel.app/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
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
                        <div className='foot w-full flex mt-5 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>HTML</span>
                                <span>CSS</span>
                                <span>JavaScript</span>
                            </div>
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/Quiz-app" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </a>
                                <a aria-label='live demo link' href="https://quiz-app-opal-two-50.vercel.app/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
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
                        <div className='foot w-full flex mt-2 items-center justify-between'>
                            <div className='technologies text-sm font-bold flex items-center gap-2 text-customGray-200'>
                                <span>React</span>
                                <span>TailwindCss</span>
                                <span>Chakra UI</span>
                            </div>
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/Expense-Tracker-App" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </a>
                                <a aria-label='live demo link' href="https://expense-tracker-app-5g0.pages.dev/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
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
                            <div className='github text-customGray-200 flex items-center gap-2'>
                                <a aria-label='github repo link' href="https://github.com/mahdii-Dz/Shopping-Cart-using-Redux-on-React" target='_blank' className='text-2xl !cursor-pointer'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-customGray-200 !size-7' width="32" height="32" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </a>
                                <a aria-label='live demo link' href="https://shopping-cart-using-redux.pages.dev/" target='_blank'>
                                    <Image src={'/Demo.svg'} alt='demo link icon' width={40} height={40} />
                                </a>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>
            </div>
            <div aria-label='project view more wrapper' className="count w-60 h-20 flex items-center cursor-pointer justify-center mt-16 border-2 gap-2 border-white rounded-full hover:shadow-custom hover:shadow-white hover:-translate-y-4 hover:translate-x-4 transition duration-200 ease-in-out">
                <a aria-label="github repo's link" href='https://github.com/mahdii-Dz?tab=repositories' target='_blank' className='text-2xl font-bold flex items-center gap-2'>
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
                    <Image aria-label='external link btn' width={36} height={36} src={'/external-link.svg'} alt='external link icon' />
                </div>
            </div>
        </section>
    )
}

export default Projects