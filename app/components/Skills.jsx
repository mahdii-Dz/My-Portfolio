import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
const ScrollFloat = dynamic(() => import('./ScrollFloat'));
const AnimatedContent = dynamic(() => import('./AnimatedContent'));

function Skills() {
    return (
        <section id='skills' className="skills w-full h-auto mt-36 pt-40 text-white flex flex-col justify-center items-center">
            <ScrollFloat
                containerClassName='w-full h-48 !py-0 !my-0 font-black flex items-center justify-center'
                animationDuration={1.5}
                ease='back.inOut(2)'
                scrollStart='center bottom+=40%'
                scrollEnd='bottom bottom-=20%'
                stagger={0.03}
            >
                Skills
            </ScrollFloat>
            <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.5}
                threshold={0.1}
                delay={0}
            >
                <div className='text-[28px] font-black'>Programming</div>
            </AnimatedContent>
            <div className="container w-full flex flex-wrap justify-center items-center gap-16 mt-16">
                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='react photo' src={'/skills/react.svg'} width={96} height={96} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>React</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='next photo' src={'/skills/Next.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Next Js</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='tailwind photo' src={'/skills/tailwind.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Tailwind Css</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='sanity photo' src={'/skills/Sanity.svg'} width={72} height={72} className='rounded-full select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Sanity</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='authJs photo' src={'/skills/AuthJs.png'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Auth Js</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='css photo' src={'/skills/Css.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Css</h3>
                </div>
            </div>
            <AnimatedContent
                distance={50}
                direction="vertical"
                reverse={false}
                duration={0.7}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={0.5}
                threshold={0.1}
                delay={0}
            >
                <div className='text-[28px] font-black mt-16'>Tools</div>
            </AnimatedContent>
            <div className="container w-full flex flex-wrap justify-center items-center gap-16 mt-16">
                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='ShadCn photo' src={'/skills/shadcn.svg'} width={72} height={72} className='fill-white select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>ShadCn</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='Figma photo' src={'/skills/Figma.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Figma</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='Netlify photo' src={'/skills/Netlify.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Netlify</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='sentry photo' src={'/skills/Sentry.svg'} width={72} height={72} className='rounded-full select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Sentry</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='Git photo' src={'/skills/Git.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Git</h3>
                </div>

                <div className="wrapper">
                    <div className='w-32 h-32 flex items-center justify-center bg-black-lighter/15 rounded-2xl backdrop-blur-[5px]'>
                        <Image alt='Redux photo' src={'/skills/Redux.svg'} width={72} height={72} className='select-none' />
                    </div>
                    <h3 className='text-lg font-bold text-center mt-2'>Redux</h3>
                </div>
            </div>
        </section>
    )
}

export default Skills