"use client";
import React from 'react'
import ScrollFloat from './ScrollFloat';
import ScrollReveal from './ScrollReveal';



function About() {
    return (
        <section className="about w-full h-dvh text-white flex flex-col justify-center">
            <ScrollFloat
                containerClassName='w-full h-auto font-black flex items-center justify-center'
                animationDuration={1}
                ease='back.inOut(2)'
                scrollStart='center bottom+=60%'
                scrollEnd='bottom bottom-=20%'
                stagger={0.03}
            >
                About me
            </ScrollFloat>
            <ScrollReveal
                containerClassName='w-full h-auto mb-24 flex items-center justify-center'
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
            >
                I’m Mahdi Hadjidj, a front-end developer with a  designer’s eye and a coder’s precision.
                I thrive on transforming complex challenges into elegant, user-friendly interfaces.
                When I’m not  debugging JavaScript or optimizing animations, you’ll find me exploring
                the latest web tech trends or contributing to open-source projects. My  toolkit? React,
                Nextjs, Tailwind..., and a relentless curiosity. Check out my Skills below!
            </ScrollReveal>
        </section>
    )
}

export default About